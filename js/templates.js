// js/templates.js

// --- 1. Dados da Aplicação (Simulando um DB/API) ---

const projectData = [
  {
    id: 'proj1',
    title: 'Educação Comunitária',
    img: { webp: 'assets/images/projeto1.webp', jpg: 'assets/images/projeto1.jpg' },
    alt: 'Crianças em sala de aula',
    caption: 'Oficinas de reforço escolar e material didático.',
    description: 'Objetivo: reduzir a evasão escolar e reforçar conteúdos essenciais.',
    link: '#voluntariado' // Links internos da página (âncoras) não mudam
  },
  {
    id: 'proj2',
    title: 'Projeto Crescer - Empreenda',
    img: { webp: 'assets/images/projeto2.webp', jpg: 'assets/images/projeto2.jpg' },
    alt: 'Comercio Aberto com o Microcredito Solidario',
    caption: 'Comercio Aberto com o Microcredito Solidario.',
    description: 'Objetivo: Fortalecer a economia local e gerar renda para familias que querem empreender. Oficinas e microcrédito solidário para pequenos empreendedores.',
    link: '#voluntariado' // Links internos da página (âncoras) não mudam
  }
];

// --- 2. Funções de Template (Componentes) ---

/**
 * Cria o HTML para um único card de projeto.
 * @param {object} project - O objeto do projeto
 */
function createProjectCard(project) {
  return `
    <article class="card" aria-labelledby="${project.id}" style="margin-top:1rem">
      <h3 id="${project.id}">${project.title}</h3>
      <figure>
        <picture>
          <source srcset="${project.img.webp}" type="image/webp">
          <img src="${project.img.jpg}" alt="${project.alt}" loading="lazy" style="width:50%;height:auto;border-radius:8px">
        </picture>
        <figcaption>${project.caption}</figcaption>
      </figure>
      <p>${project.description}</p>
      <p><a href="${project.link}">Quero ser voluntário</a></p>
    </article>
  `;
}

// --- 3. Templates de "Página" (Exportados para o Roteador) ---

/**
 * Template para a Página Inicial
 */
export const homeTemplate = () => `
<div class="container">
  <section class="hero" aria-labelledby="hero-title">
    <div>
      <h2 id="hero-title">Transformando comunidades com ações concretas</h2>
      <p>Nossa missão é apoiar famílias em situação de vulnerabilidade através de educação, saúde e geração de renda.</p>
      <p><strong>Contato:</strong> contato@ongcuidarbem.org | <a href="tel:+5511912345678">+55 (11) 91234-5678</a></p>
    </div>
    <figure>
      <picture>
        <source srcset="assets/images/hero.webp" type="image/webp" />
        <img src="assets/images/hero.jpg" alt="Voluntários trabalhando em uma ação comunitária" class="img-responsive" loading="lazy">
      </picture>
      <figcaption class="visually-hidden">Voluntários em atividade</figcaption>
    </figure>
  </section>

  <section class="hero-card">
    <h1>Cuidando de famílias e comunidades</h1>
    <p>Projetos que trazem educação, saúde e geração de renda para os mais necessitados.</p>
    <p><a class="btn btn-primary" href="#/projetos">Conheça nossos projetos</a></p>
  </section>

  <section aria-labelledby="sobre-title" class="card mt-16">
    <h2 id="sobre-title">Sobre a Organização: ONG CuidarBem</h2>
    <p>A ONG CuidarBem nasceu em 2025 do desejo de construir uma sociedade mais justa e igualitária. Impulsionados pela urgência de agir, focamos nossos esforços em duas áreas que consideramos pilares para o desenvolvimento humano e comunitário: Educação e Inclusão Social.</p>
  </section>
</div>
`;

/**
 * Template para a Página de Projetos
 * Usa o "componente" createProjectCard para renderizar os dados.
 */
export const projectsTemplate = () => `
<div class="container">
  <section aria-labelledby="projetos-list">
    <h2 id="projetos-list">Nossas frentes de atuação</h2>

    ${projectData.map(createProjectCard).join('')}
    
  </section>

  <aside aria-labelledby="apoie" class="card mt-16">
    <h2 id="apoie">Como apoiar</h2>
    <p>Você pode doar, ser voluntário ou compartilhar nossas campanhas nas redes.</p>
    <p><a class="btn btn-secondary" href="#/cadastro">Saiba como doar / participar</a></p>
  </aside>

  <section id="voluntariado" aria-labelledby="vol-title" class="mt-16">
    <h2 id="vol-title">Voluntariado</h2>
    <p>O processo de inscrição ocorre via cadastro — preencha o formulário informando suas áreas de interesse.</p>
  </section>
</div>
`;

/**
 * Template para a Página de Cadastro
 * O HTML foi reestruturado para suportar mensagens de erro.
 */
export const registerTemplate = () => `
<div class="container">
  <section aria-labelledby="form-title">
    <h2 id="form-title">Formulário de Cadastro</h2>
    <form id="cadForm" class="card form-grid" action="#" method="post" novalidate>
      
      <div class="form-group full">
        <label for="nome" data-required="true">Nome Completo</label>
        <input id="nome" name="nome" type="text" class="input" required minlength="3" aria-required="true">
        <span class="form-error-message" id="nome-error" aria-live="polite"></span>
      </div>

      <div class="form-group">
        <label for="email" data-required="true">E-mail</label>
        <input id="email" name="email" type="email" class="input" required placeholder="seunome@exemplo.com" aria-required="true">
        <span class="form-error-message" id="email-error" aria-live="polite"></span>
      </div>

      <div class="form-group">
        <label for="cpf" data-required="true">CPF</label>
        <input id="cpf" name="cpf" type="text" class="input" inputmode="numeric" required placeholder="000.000.000-00" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" aria-required="true">
        <span class="form-error-message" id="cpf-error" aria-live="polite"></span>
      </div>

      <div class="form-group">
        <label for="telefone" data-required="true">Telefone</label>
        <input id="telefone" name="telefone" type="tel" class="input" inputmode="tel" required placeholder="(00) 00000-0000" pattern="\\(\\d{2}\\)\\s?\\d{4,5}-\\d{4}" aria-required="true">
        <span class="form-error-message" id="telefone-error" aria-live="polite"></span>
      </div>
      
      <div class="form-group">
        <label for="nascimento" data-required="true">Data de Nascimento</label>
        <input id="nascimento" name="nascimento" type="date" class="input" required aria-required="true">
        <span class="form-error-message" id="nascimento-error" aria-live="polite"></span>
      </div>

      <div class="form-group">
        <label for="cep" data-required="true">CEP</label>
        <input id="cep" name="cep" type="text" class="input" inputmode="numeric" required placeholder="00000-000" pattern="\\d{5}-\\d{3}" aria-required="true">
        <span class="form-error-message" id="cep-error" aria-live="polite"></span>
      </div>

      <div class="form-group full">
        <label for="endereco" data-required="true">Endereço</label>
        <input id="endereco" name="endereco" type="text" class="input" required placeholder="Rua, número, complemento" aria-required="true">
        <span class="form-error-message" id="endereco-error" aria-live="polite"></span>
      </div>
      
      <div class="form-group">
        <label for="cidade" data-required="true">Cidade</label>
        <input id="cidade" name="cidade" type="text" class="input" required aria-required="true">
        <span class="form-error-message" id="cidade-error" aria-live="polite"></span>
      </div>

      <div class="form-group">
        <label for="estado" data-required="true">Estado</label>
        <select id="estado" name="estado" class="input" required aria-required="true">
          <option value="">Selecione</option>
          <option value="SP">SP</option>
          <option value="RJ">RJ</option>
          <option value="AC">AC</option>
          <option value="AL">AL</option>              
          <option value="AP">AP</option>
          <option value="AM">AM</option>              
          <option value="BA">BA</option>
          <option value="CE">CE</option>              
          <option value="DF">DF</option>
          <option value="ES">ES</option>              
          <option value="GO">GO</option>
          <option value="RJ">RJ</option>              
          <option value="MA">MA</option>
          <option value="MT">MT</option>              
          <option value="MS">MS</option>
          <option value="MG">MG</option>              
          <option value="PA">PA</option>
          <option value="PB">PB</option>              
          <option value="PR">PR</option>
          <option value="PE">PE</option>              
          <option value="PI">PI</option>
          <option value="RN">RN</option>             
          <option value="RS">RS</option>
          <option value="RO">RO</option>              
          <option value="RR">RR</option>
          <option value="SC">SC</option>
          <option value="SE">SE</option>
          <option value="TO">TO</option>
        </select>
        <span class="form-error-message" id="estado-error" aria-live="polite"></span>
      </div>
      
      <div class="form-group full">
        <label for="interesse">Áreas de interesse (Opcional)</label>
        <select id="interesse" name="interesse" class="input" multiple size="4" aria-describedby="hintInteresse">
          <option value="educacao">Educação</option>
          <option value="saude">Saúde</option>
          <option value="renda">Geração de Renda</option>
          <option value="logistica">Logística</option>
        </select>
        <p id="hintInteresse" class="hint" style="font-size: var(--fs-sm); margin-top: 4px;">Segure Ctrl (ou Cmd) para selecionar várias opções.</p>
      </div>

      <div class="form-group-checkbox full">
        <input id="aceito" name="aceito" type="checkbox" required aria-required="true">
        <label for="aceito" data-required="true">Declaro que as informações são verdadeiras e aceito os termos.</label>
        <span class="form-error-message" id="aceito-error" aria-live="polite" style="width: 100%; margin-left: 1.5rem;"></span>
      </div>

      <div class="full">
        <button type="submit" class="btn btn-primary" id="submitBtn">Enviar</button>
        <button type="reset" class="btn btn-secondary">Limpar</button>
      </div>
    </form>
  </section>
</div>
`;