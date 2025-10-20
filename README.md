🌱 ONG CuidarBem — Plataforma Web

Este repositório faz parte da Entrega 1 da disciplina de Front-End Web do curso de Análise e Desenvolvimento de Sistemas.



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

🧾 Estrutura de Páginas

| Página          | Descrição                                                                         |
| --------------- | --------------------------------------------------------------------------------- |
| `index.html`    | Página inicial — Missão, visão, valores, imagem hero, equipe e contato.           |
| `projetos.html` | Listagem de projetos sociais com cards responsivos e informações de voluntariado. |
| `cadastro.html` | Formulário de cadastro de voluntários e doadores com validação e máscaras.        |


📂 Estrutura de Pastas
ong-cuidarbem/

├─ index.html

├─ projetos.html

├─ cadastro.html

├─ css/

│  └─ style.css

├─ js/

│  └─ masks.js

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

Estrutura semântica para melhor indexação.



🧑‍💻 Tecnologias



HTML5

CSS3 (Mobile First, Flexbox e Grid)

JavaScript Vanilla

Git & GitHub Pages
