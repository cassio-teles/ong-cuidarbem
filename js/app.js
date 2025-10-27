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
 * Ponto de entrada principal da aplicação.
 * É executado quando o DOM está pronto.
 */
function main() {
  initHamburgerMenu();
  initRouter();
}

// Inicia a aplicação
document.addEventListener('DOMContentLoaded', main);