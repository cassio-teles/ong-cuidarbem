// js/app.js
import { initRouter } from './router.js';

/**
 * Inicializa o menu hambúrguer (lógica movida do HTML).
 */
function initHamburgerMenu() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!hamburgerBtn || !mobileMenu) return;

  // Alterna a visibilidade do menu
  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    hamburgerBtn.classList.toggle('active');
  });

  // Fecha o menu ao clicar em um link (agora escuta o container)
  mobileMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      mobileMenu.classList.remove('open');
      hamburgerBtn.classList.remove('active');
    }
  });
}

/**
 * NOVO: Inicializa o Toggle de Modo Escuro/Claro.
 */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (!themeToggleBtn) return;

  // Função para aplicar o tema (lido ou salvo)
  function applyTheme(isDark) {
    if (isDark) {
      document.body.classList.add('dark-mode');
      themeToggleBtn.innerHTML = '🌙'; // Lua
      themeToggleBtn.setAttribute('aria-label', 'Mudar para tema claro');
      themeToggleBtn.setAttribute('title', 'Mudar para tema claro');
    } else {
      document.body.classList.remove('dark-mode');
      themeToggleBtn.innerHTML = '☀️'; // Sol
      themeToggleBtn.setAttribute('aria-label', 'Mudar para tema escuro');
      themeToggleBtn.setAttribute('title', 'Mudar para tema escuro');
    }
  }

  // Verifica se o usuário já tem uma preferência salva
  const savedTheme = localStorage.getItem('theme');
  
  // Verifica se o sistema operacional prefere modo escuro
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Decide qual tema carregar:
  // 1. O que está salvo (prioridade)
  // 2. Ou o que o sistema operacional prefere
  let isDarkMode = savedTheme === 'dark' || (savedTheme === null && systemPrefersDark);
  applyTheme(isDarkMode);

  // Lógica do clique no botão
  themeToggleBtn.addEventListener('click', () => {
    // Inverte o modo atual
    isDarkMode = !document.body.classList.contains('dark-mode');
    applyTheme(isDarkMode);
    // Salva a preferência do usuário
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  });
}

/**
 * Ponto de entrada principal da aplicação.
 * É executado quando o DOM está pronto.
 */
function main() {
  initHamburgerMenu();
  initThemeToggle(); // <--- CHAMA A NOVA FUNÇÃO
  initRouter();
}

// Inicia a aplicação
document.addEventListener('DOMContentLoaded', main);