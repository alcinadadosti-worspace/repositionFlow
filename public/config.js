// ==========================================
// CONFIGURAÇÃO DO BACKEND
// ==========================================

const CONFIG = {
  // URL do backend - usa a mesma origem (frontend e backend estão juntos)
  API_URL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:3000'  // Desenvolvimento local
    : window.location.origin,  // Produção - mesma origem (Render)

  // WebSocket URL - usa a mesma origem
  WS_URL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'ws://localhost:3000'  // Desenvolvimento local
    : `wss://${window.location.host}`  // Produção - mesma origem (Render)
};

// Log da configuração no console para debug
console.log('🔧 Configuração do backend:', CONFIG);
