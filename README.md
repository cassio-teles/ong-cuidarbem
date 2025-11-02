🌱 ONG CuidarBem — Plataforma Web
Este repositório faz parte da disciplina de Front-End Web do curso de Análise e Desenvolvimento de Sistemas.


ACESSSE E VEJA:

https://cassio-teles.github.io/ong-cuidarbem/#/



📖 Descrição do Projeto
A ONG CuidarBem é uma organização fictícia criada para fins acadêmicos. O projeto evoluiu de um site estático para uma Single Page Application (SPA) completa, dinâmica e modular, utilizando ferramentas modernas de desenvolvimento e seguindo práticas profissionais de versionamento, acessibilidade e otimização.



🧭 Objetivos da Entrega
Aplicar fundamentos de HTML5 (estrutura semântica e formulários);

Criar layout responsivo com CSS Grid e Flexbox;

Implementar validação de formulários com HTML5 e máscaras de input (CPF, telefone e CEP);

Definir e utilizar um Design System com variáveis CSS customizadas;

Implementar navegação responsiva e interativa (menu principal, submenu e menu hambúrguer);

Demonstrar boas práticas de acessibilidade (WCAG) e SEO.

Arquitetura SPA: Converter o site estático em uma Single Page Application (SPA), onde todo o conteúdo é carregado dinamicamente sem recarregar a página.

Modularidade (ES6 Modules): Estruturar todo o código JavaScript em módulos (import/export), separando responsabilidades (App, Roteador, Templates, Validação).

Validação Avançada: Criar um sistema de validação (js/validation.js) que verifica a consistência dos dados (ex: validação algorítmica de CPF) e salva no localStorage.

Acessibilidade (WCAG 2.1 AA): Implementar um design acessível, incluindo navegação por teclado e um Modo Escuro (Dark Mode) funcional com persistência.

Otimização para Produção: Utilizar Vite para minificar, agrupar (bundle) e otimizar todos os assets (JS, CSS, HTML, Imagens) para um carregamento de alta performance.

Versionamento Profissional: Empregar uma estratégia de GitFlow (branches main/feature), Commits Semânticos e Releases no GitHub.

Deploy Contínuo: Configurar um fluxo de deploy automatizado (gh-pages) que publica a versão otimizada (dist/) do site no GitHub Pages.


🧭 Estrutura da Aplicação (SPA)O projeto não utiliza mais arquivos HTML separados. 
Ele usa um único index.html como "shell" e carrega o conteúdo dinamicamente via JavaScript.

Rota (Hash),                        Template (em js/templates.js),        Descrição
index.html,                         (Shell da Aplicação),                 "Estrutura principal com <header>, <footer> e <main id=""app-root"">."
index.html (ou index.html#/),        homeTemplate,                        "Página inicial — Missão, valores, imagem hero e contato."
index.html#/projetos,                projectsTemplate,                     Listagem de projetos sociais com cards renderizados dinamicamente.
index.html#/cadastro,                registerTemplate,                     Formulário de cadastro de voluntários e doadores com validação.


✨ Funcionalidades Avançadas (SPA):
Arquitetura SPA: Converter o site estático em uma Single Page Application (SPA), onde todo o conteúdo é carregado dinamicamente sem recarregar a página.

Roteamento Client-Side: Implementar um roteador JavaScript (js/router.js) que usa Hash Routing (#/) para gerenciar a navegação, garantindo compatibilidade com hospedagem estática (GitHub Pages) e o uso do histórico do navegador (botões voltar/avançar).

Modularidade (ES6 Modules): Estruturar todo o código JavaScript em módulos (import/export), separando responsabilidades (App, Roteador, Templates, Validação, Máscaras).

Templates JavaScript: Criar um sistema de templates (js/templates.js) que gera o HTML das "páginas" dinamicamente, permitindo a fácil reutilização de componentes (como os cards de projeto).

Validação Avançada: Criar um sistema de validação (js/validation.js) que verifica não apenas o formato (HTML5), mas a consistência dos dados (ex: validação algorítmica de CPF).

Persistência de Dados: Armazenar os dados do formulário de cadastro no localStorage do navegador após a validação bem-sucedida.

🧾 Estrutura de Páginas

| Página          | Descrição                                                                         |
| --------------- | --------------------------------------------------------------------------------- |
| `index.html`    | Página inicial — Missão, visão, valores, imagem hero, equipe e contato.           |
| `projetos.html` | Listagem de projetos sociais com cards responsivos e informações de voluntariado. |
| `cadastro.html` | Formulário de cadastro de voluntários e doadores com validação e máscaras.        |

O projeto não utiliza mais arquivos HTML separados para cada página. Ele usa um único index.html como "shell" e carrega o conteúdo dinamicamente com JavaScript.



📂 Estrutura de Pastas (Pós-Build)
A estrutura de desenvolvimento foi configurada para usar Vite, o que resulta em uma pasta dist/ otimizada para produção.

ong-cuidarbem/

├── .gitignore             # Ignora 'node_modules' e 'dist'

├── index.html             # O "shell" principal da SPA

├── package.json           # Gerencia dependências (Vite, gh-pages) e scripts

├── vite.config.js         # Configuração do Vite (ex: base path)

├── assets/

│   └─ images/             # Imagens-fonte (hero.webp, etc.)

├── css/

│   └─ style.css          # Estilos principais (com variáveis de tema)

├── js/

│   ├─ app.js             # Ponto de entrada (inicia menu, tema, roteador)

│   ├─ router.js          # Roteador (Hash Routing)

│   ├─ templates.js       # Templates HTML (com imports de imagens)

│   ├─ validation.js      # Lógica de validação e localStorage

│   └─ masks.js           # Funções de máscara de input

├── node_modules/          # (Ignorado) Dependências de desenvolvimento

└── dist/                  # (Ignorado) Pasta de build, otimizada para produção

└─ README.md


⚡ Otimização e Build (Vite)
O projeto utiliza Vite como ferramenta de build e servidor de desenvolvimento.

npm run dev: Inicia um servidor de desenvolvimento local (HMR) rápido.

npm run build: Gera a pasta dist/ com todos os arquivos estáticos (JS, CSS, HTML) minificados, otimizados e com hashes para cache-busting.

Assets: As imagens são importadas (import heroImg from ...) diretamente no js/templates.js para serem processadas e otimizadas pelo Vite, garantindo que os caminhos funcionem após o build.



📦 Versionamento e Deploy
Controle de Versão: O projeto segue uma estratégia de GitFlow simplificada (main, feature/*), com Commits Semânticos para um histórico limpo.

Deploy Contínuo (GitHub Pages): O deploy é automatizado. O comando npm run deploy executa o build (npm run build) e usa a biblioteca gh-pages para enviar apenas a pasta dist/ otimizada para a branch gh-pages, que é a fonte do site publicado.

Releases: O versionamento do projeto é gerenciado através do GitHub Releases, marcando pontos estáveis da aplicação (ex: v1.0.0).



🎨 Design System (Especificações Técnicas)

✅ Paleta de cores (8 cores):
--color-primary, --color-primary-700, --color-secondary, --color-accent, --color-neutral-100, --color-neutral-300, --color-neutral-600, --color-danger.

✅ Tipografia:
Escala tipográfica com 5 tamanhos — --fs-sm, --fs-md, --fs-lg, --fs-xl, --fs-xxl.

✅ Espaçamento modular:
8px, 16px, 24px, 32px, 48px, 64px (definidos em variáveis CSS).

✅ Grid personalizado:
Sistema de 12 colunas com CSS Grid + utilitários .col-1 a .col-12.

✅ Breakpoints responsivos (5):
xs (0–399px), sm (400–699px), md (700–991px), lg (992–1199px), xl (1200px+).




♿ Acessibilidade
Estrutura HTML semântica (header, main, section, article, footer).

alt em todas as imagens.

Hierarquia correta de títulos (h1, h2, h3).

Navegação por teclado garantida em todo o site, incluindo menu e formulários.

Contraste de cores validado (mínimo 4.5:1).

Modo Escuro (Dark Mode):

Implementado um toggle (botão ☀️/🌙) para alternar entre os temas claro e escuro.

Respeita a preferência do sistema operacional do usuário (prefers-color-scheme).

Salva a escolha do usuário no localStorage para persistir a seleção entre visitas.



🧭 Layout Responsivo
Estrutura principal implementada com CSS Grid.

Componentes internos com Flexbox para alinhamentos.

Breakpoints bem definidos para adaptação fluida em dispositivos móveis, tablets e desktops.

Hero e Cards responsivos com imagens adaptáveis (picture + srcset).

Navegação adaptada para mobile com menu hambúrguer funcional.



🧭 Navegação Interativa

✅ Menu principal fixo e responsivo;

✅ Submenu dropdown acessível com foco e hover;

✅ Menu mobile com botão hambúrguer;

✅ Fechamento automático do menu ao clicar em um link.

✨ Navegação SPA: Toda a navegação principal é gerenciada pelo js/router.js, que intercepta cliques e atualiza o DOM sem recarregar a página.

✨ Hash Routing: Utiliza window.location.hash (ex: #/projetos) para permitir navegação, uso do botão "Voltar" e compatibilidade total com hospedagem estática (GitHub Pages).



🧱 Componentes de Interface
Cards responsivos para apresentação dos projetos;

Botões com estados visuais: hover, focus, active, disabled;

Formulários estilizados com feedback visual de validação;

Alerts, Toasts e Modals prontos para uso;

Badges e tags para categorização de informações.



🦾 Formulários e Máscaras
Validação de campos com atributos HTML5 (required, pattern, minlength etc.).

Máscaras JS (masks.js) para CPF, Telefone e CEP.

Campos acessíveis com aria-label, aria-required e aria-describedby.

Feedback de Validação Avançado: O js/validation.js injeta mensagens de erro específicas (.form-error-message) para cada campo que falha na validação.

Validação de Consistência: Implementada verificação algorítmica para o CPF, garantindo que o número seja matematicamente válido (não apenas formato).

Persistência de Dados: Após a validação bem-sucedida, os dados do formulário são coletados e salvos como um objeto JSON no localStorage do navegador.




📈 SEO
Uso de meta description em todas as páginas;

Títulos (<title>) claros e descritivos;

Atributos alt em imagens;

Estrutura semântica para melhor indexação. (Nota: O uso de Hash Routing em SPAs é menos ideal para SEO do que o roteamento estático, mas foi uma escolha técnica para garantir a funcionalidade no GitHub Pages.)



🧑‍💻 Tecnologias Utilizadas

HTML5 Semântico

CSS3 (Mobile First, Flexbox, Grid, Variáveis Customizadas, Temas)

JavaScript (ES6+ Modules)

Arquitetura Single Page Application (SPA)

Manipulação Avançada do DOM

Roteamento Client-Side (Hash Routing)

LocalStorage API

Vite (Servidor de Desenvolvimento e Otimização de Build)

npm (Gerenciamento de Pacotes)

Git & GitHub

GitFlow (Branching)

GitHub Pages (Hospedagem)

gh-pages (Biblioteca de Deploy)

GitHub Issues & Releases (Gerenciamento de Projeto)
