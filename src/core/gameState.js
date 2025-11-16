// Lightweight global state shared across scenes without legacy globals.
export const gameState = {
  currentPlayer: 'Explorador',
  musicMuted: false,
  completedTasks: new Set(),
  logs: []
};

export const STORY_TASKS = [
  { id: 'corredor-tour', label: 'Explorar o corredor principal', location: 'Corredor' },
  { id: 'secretaria-card', label: 'Obter cartão UC na secretaria', location: 'Secretaria' },
  { id: 'salas-plan', label: 'Planear estudo no piso das salas', location: 'Salas' },
  { id: 'sala-notes', label: 'Assistir à aula na Sala C.1', location: 'Sala' },
  { id: 'jardim-break', label: 'Pausa criativa no Jardim', location: 'Jardim' },
  { id: 'bar-meet', label: 'Conhecer colegas no Bar', location: 'Bar' },
  { id: 'minigame-code', label: 'Resolver o mini-jogo Acerta o Código', location: 'AcertaoCodigo' },
  { id: 'minigame-ami', label: 'Completar o mini-jogo Aula AMI', location: 'AulaAMI' }
];

// Marks a task as completed and records a log entry for debugging.
export function completeTask(taskId, source = 'unknown') {
  if (!STORY_TASKS.some((task) => task.id === taskId)) {
    console.warn(`Task ${taskId} is not part of STORY_TASKS.`);
    return false;
  }

  if (gameState.completedTasks.has(taskId)) {
    return false;
  }

  gameState.completedTasks.add(taskId);
  logEvent(`Tarefa "${taskId}" concluída via ${source}.`);
  return true;
}

// Adds a timestamped audit log entry viewable from the console.
export function logEvent(message) {
  const entry = { timestamp: new Date().toISOString(), message };
  gameState.logs.push(entry);
  if (gameState.logs.length > 50) {
    gameState.logs.shift();
  }
  // eslint-disable-next-line no-console
  console.info(`[Escape DEI] ${entry.timestamp}: ${entry.message}`);
}

// Toggles the notification audio mute flag.
export function toggleMute() {
  gameState.musicMuted = !gameState.musicMuted;
  logEvent(`Audio ${gameState.musicMuted ? 'silenciado' : 'ativo'}.`);
  return gameState.musicMuted;
}

// Returns metadata for tasks that belong to a specific location.
export function getTasksForLocation(location) {
  return STORY_TASKS.filter((task) => task.location === location);
}

// Clears all tracked progress for faster testing loops.
export function resetProgress() {
  gameState.completedTasks.clear();
  gameState.logs.length = 0;
  logEvent('Progresso limpo.');
}
