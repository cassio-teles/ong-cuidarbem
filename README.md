🌱 ONG CuidarBem — Plataforma Web

Este repositório faz parte da disciplina de Front-End Web do curso de Análise e Desenvolvimento de Sistemas.



📖 Descrição do Projeto



A ONG CuidarBem é uma organização fictícia criada para fins acadêmicos.
A proposta da plataforma é oferecer uma presença digital funcional, responsiva e acessível para ONGs, permitindo apresentar seus projetos, captar recursos e engajar voluntários.



🧭 Objetivos da Entrega



Aplicar fundamentos de HTML5 (estrutura semântica e formulários);

Criar layout responsivo com CSS Grid e Flexbox;

Implementar validação de formulários com HTML5 e máscaras de input (CPF, telefone e CEP);

Definir e utilizar um Design System com variáveis CSS customizadas;

Implementar navegação responsiva e interativa (menu principal, submenu e menu hambúrguer);

Demonstrar boas práticas de acessibilidade (WCAG) e SEO.

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

📂 Estrutura de Pastas
ong-cuidarbem/

├─ index.html           (Arquivo HTML único, "shell" da aplicação)

├─ css/

│  └─ style.css         (Estilos, incluindo feedback de validação)

├─ js/

│  ├─ app.js            (Ponto de entrada, inicializa o menu e o roteador)

│  ├─ router.js         (Gerencia as rotas e renderiza os templates)

│  ├─ templates.js      (Contém os templates HTML das "páginas")

│  ├─ validation.js     (Lógica de validação avançada e salvamento no localStorage)

│  └─ masks.js          (Funções de máscara de input, agora como módulo)

├─ assets/

│  ├─ images/

│  │  ├─ hero.webp

│  │  ├─ projeto1.webp

│  │  └─ projeto2.webp

└─ README.md



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

Validação de campos com atributos HTML5 (required, pattern, minlength etc.);

Máscaras JS para CPF, Telefone e CEP (masks.js);

Feedback visual de erro com classes CSS (.input.invalid);

Campos acessíveis com aria-label, aria-required e aria-describedby.

✨ Feedback de Validação Avançado: O js/validation.js injeta mensagens de erro específicas (.form-error-message) para cada campo que falha na validação, melhorando a usabilidade.

✨ Validação de Consistência: Implementada verificação algorítmica para o CPF, garantindo que o número não seja apenas formatado corretamente, mas que seja um CPF matematicamente válido.

✨ Persistência de Dados: Após a validação bem-sucedida, os dados do formulário são coletados e salvos como um objeto JSON no localStorage do navegador.



♿ Acessibilidade



Estrutura HTML semântica (header, main, section, article, footer);

alt em todas as imagens;

Hierarquia correta de títulos (h1, h2, h3);

Navegação por teclado garantida;

Contraste adequado de cores;

Elementos escondidos apenas visualmente com .visually-hidden.



📈 SEO



Uso de meta description em todas as páginas;

Títulos (<title>) claros e descritivos;

Atributos alt em imagens;

Estrutura semântica para melhor indexação. (Nota: O uso de Hash Routing em SPAs é menos ideal para SEO do que o roteamento estático, mas foi uma escolha técnica para garantir a funcionalidade no GitHub Pages.)



🧑‍💻 Tecnologias



HTML5 Semântico

CSS3 (Mobile First, Flexbox e Grid, Variáveis Customizadas)

JavaScript (ES6+)

Arquitetura Single Page Application (SPA)

Módulos ES6 (import/export)

Manipulação Avançada do DOM

Roteamento Client-Side (Hash Routing)

LocalStorage API

Git & GitHub Pages
