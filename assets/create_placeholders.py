"""Utility script that (re)generates the placeholder art/audio files."""

from __future__ import annotations

HELP_TEXT = (
    'Run `python assets/create_placeholders.py` whenever you want to reset '
    'assets to a known state or before committing new colours.'
)

import math
import os
import struct
import wave
import zlib

ASSETS = {
    'background.png': (29, 53, 87),
    'button.png': (244, 162, 97),
    'panel.png': (69, 123, 157),
    'logo.png': (233, 196, 106),
}


def write_png(path: str, width: int, height: int, rgb: tuple[int, int, int]) -> None:
    """Minimal PNG encoder used to avoid third-party dependencies."""

    signature = b"\x89PNG\r\n\x1a\n"
    ihdr = struct.pack('>IIBBBBB', width, height, 8, 2, 0, 0, 0)
    r, g, b = rgb
    row = bytes([0]) + bytes([r, g, b]) * width
    data = row * height
    compressed = zlib.compress(data)

    def chunk(tag: bytes, payload: bytes) -> bytes:
        return struct.pack('>I', len(payload)) + tag + payload + struct.pack('>I', zlib.crc32(tag + payload) & 0xFFFFFFFF)

    with open(path, 'wb') as handle:
        handle.write(signature)
        handle.write(chunk(b'IHDR', ihdr))
        handle.write(chunk(b'IDAT', compressed))
        handle.write(chunk(b'IEND', b''))


def write_wav(path: str, freq: int = 880, duration: float = 0.25, sample_rate: int = 16_000) -> None:
    """Creates a tiny sine wave for UI notifications."""

    nframes = int(sample_rate * duration)
    with wave.open(path, 'w') as wav:
        wav.setnchannels(1)
        wav.setsampwidth(2)
        wav.setframerate(sample_rate)
        frames = bytearray()
        for i in range(nframes):
            value = int(32767 * 0.3 * math.sin(2 * math.pi * freq * (i / sample_rate)))
            frames.extend(struct.pack('<h', value))
        wav.writeframes(frames)


def main() -> None:
    os.makedirs('assets/images', exist_ok=True)
    os.makedirs('assets/audio', exist_ok=True)

    for filename, color in ASSETS.items():
        write_png(os.path.join('assets/images', filename), 64, 64, color)

    write_wav(os.path.join('assets/audio', 'notify.wav'))
    print('Placeholders refreshed.')


if __name__ == '__main__':
    main()
    print(HELP_TEXT)
