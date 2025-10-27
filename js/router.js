// js/router.js
import { homeTemplate, projectsTemplate, registerTemplate } from './templates.js';
import { initMasks } from './masks.js';
import { initFormValidation } from './validation.js';

// Define as "rotas" e qual template elas devem carregar
const routes = {
  '/': homeTemplate,
  '/projetos': projectsTemplate,
  '/cadastro': registerTemplate,
  '/404': () => `<section class="container card mt-16"><h2>Página não encontrada (404)</h2><p>O conteúdo que você procura não foi localizado.</p></section>`
};

/**
 * Pega o caminho atual da URL a partir do hash.
 * Ex: "#/projetos" retorna "/projetos"
 */
function getPathFromHash() {
  const hash = window.location.hash; // ex: "#/projetos"
  
  // Se o hash estiver vazio ou for só "#", retorna a raiz "/"
  if (hash === "" || hash === "#") {
    return "/";
  }
  // Remove o "#" inicial
  return hash.slice(1); // ex: "/projetos"
}

/**
 * Renderiza o conteúdo da página com base no hash da URL.
 */
function render() {
  const appRoot = document.getElementById('app-root');
  if (!appRoot) {
    console.error('ERRO: Elemento #app-root não foi encontrado.');
    return;
  }

  // Pega o caminho do hash
  const path = getPathFromHash();

  // Encontra o template correspondente ou usa o 404
  const template = routes[path] || routes['/404'];
  
  // Injota o HTML do template
  appRoot.innerHTML = template();

  // --- Pós-renderização ---
  // Executa scripts específicos da página de cadastro
  if (path === '/cadastro') {
    initMasks();
    initFormValidation('cadForm');
  }

  // Rola a página para o topo
  window.scrollTo(0, 0);
}

/**
 * Inicializa o roteador.
 */
export function initRouter() {
  // 1. Escuta por mudanças no hash (cliques em links <a href="#...">, botões voltar/avançar)
  window.addEventListener('hashchange', render);

  // 2. Lida com o carregamento inicial da página
  
  // Se a página for carregada sem hash (ex: .../index.html),
  // define o hash para a raiz para carregar a home.
  if (!window.location.hash) {
    window.location.hash = "#/";
  }
  
  // Renderiza a página com base no hash que já está na URL
  render();
}