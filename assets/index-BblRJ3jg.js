(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();const m="/ong-cuidarbem/assets/hero-Bxpk7dim.jpg",f="/ong-cuidarbem/assets/hero-B0ixizQq.webp",v="/ong-cuidarbem/assets/projeto1-BdTLVW5E.jpg",g="/ong-cuidarbem/assets/projeto1-DywPN4Wh.webp",b="/ong-cuidarbem/assets/projeto2-BIx9ySHH.jpg",h="/ong-cuidarbem/assets/projeto2-CuUOGHGd.webp",y=[{id:"proj1",title:"Educação Comunitária",img:{webp:g,jpg:v},alt:"Crianças em sala de aula",caption:"Oficinas de reforço escolar e material didático.",description:"Objetivo: reduzir a evasão escolar e reforçar conteúdos essenciais.",link:"#voluntariado"},{id:"proj2",title:"Projeto Crescer - Empreenda",img:{webp:h,jpg:b},alt:"Comercio Aberto com o Microcredito Solidario",caption:"Comercio Aberto com o Microcredito Solidario.",description:"Objetivo: Fortalecer a economia local e gerar renda para familias que querem empreender. Oficinas e microcrédito solidário para pequenos empreendedores.",link:"#voluntariado"}];function E(e){return`
    <article class="card" aria-labelledby="${e.id}" style="margin-top:1rem">
      <h3 id="${e.id}">${e.title}</h3>
      <figure>
        <picture>
          <source srcset="${e.img.webp}" type="image/webp">
          <img src="${e.img.jpg}" alt="${e.alt}" loading="lazy" style="width:50%;height:auto;border-radius:8px">
        </picture>
        <figcaption>${e.caption}</figcaption>
      </figure>
      <p>${e.description}</p>
      <p><a href="${e.link}">Quero ser voluntário</a></p>
    </article>
  `}const q=()=>`
<div class="container">
  <section class="hero" aria-labelledby="hero-title">
    <div>
      <h2 id="hero-title">Transformando comunidades com ações concretas</h2>
      <p>Nossa missão é apoiar famílias em situação de vulnerabilidade através de educação, saúde e geração de renda.</p>
      <p><strong>Contato:</strong> contato@ongcuidarbem.org | <a href="tel:+5511912345678">+55 (11) 91234-5678</a></p>
    </div>
    <figure>
      <picture>
        <source srcset="${f}" type="image/webp" />
        <img src="${m}" alt="Voluntários trabalhando em uma ação comunitária" class="img-responsive" loading="lazy">
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
`,L=()=>`
<div class="container">
  <section aria-labelledby="projetos-list">
    <h2 id="projetos-list">Nossas frentes de atuação</h2>

    ${y.map(E).join("")}
    
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
`,C=()=>`
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
          <option value="RJ">RJ</Coption>              
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
`;function $(e){let o=e.value.replace(/\D/g,"").slice(0,11);o=o.replace(/^(\d{3})(\d)/,"$1.$2"),o=o.replace(/^(\d{3})\.(\d{3})(\d)/,"$1.$2.$3"),o=o.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})$/,"$1.$2.$3-$4"),e.value=o}function P(e){let o=e.value.replace(/\D/g,"").slice(0,11);o=o.replace(/^(\d{2})(\d)/,"($1) $2"),o.length<=13?o=o.replace(/(\d{4})(\d)/,"$1-$2"):o=o.replace(/(\d{5})(\d)/,"$1-$2"),e.value=o}function S(e){let o=e.value.replace(/\D/g,"").slice(0,8);o=o.replace(/^(\d{5})(\d)/,"$1-$2"),e.value=o}function A(){const e=document.getElementById("cpf"),o=document.getElementById("telefone"),t=document.getElementById("cep");e&&e.addEventListener("input",()=>$(e)),o&&o.addEventListener("input",()=>P(o)),t&&t.addEventListener("input",()=>S(t))}function O(e){const o=e.replace(/\D/g,"");if(o.length!==11||/^(\d)\1{10}$/.test(o))return!1;let t=0,r;for(let a=1;a<=9;a++)t+=parseInt(o.substring(a-1,a))*(11-a);if(r=t*10%11,(r===10||r===11)&&(r=0),r!==parseInt(o.substring(9,10)))return!1;t=0;for(let a=1;a<=10;a++)t+=parseInt(o.substring(a-1,a))*(12-a);return r=t*10%11,(r===10||r===11)&&(r=0),r===parseInt(o.substring(10,11))}function w(e,o){e.classList.add("invalid");const t=document.getElementById(`${e.id}-error`);t&&(t.textContent=o,t.style.display="block")}function u(e){e.classList.remove("invalid");const o=document.getElementById(`${e.id}-error`);o&&(o.textContent="",o.style.display="none")}function d(e){let o=!0,t="";return e.hasAttribute("required")&&(e.type==="checkbox"&&!e.checked?(o=!1,t="Você deve aceitar os termos."):e.value.trim()===""&&(o=!1,t="Este campo é obrigatório.")),o&&e.hasAttribute("minlength")&&e.value.length<parseInt(e.minLength,10)&&(o=!1,t=`Este campo deve ter no mínimo ${e.minLength} caracteres.`),o&&e.type==="email"&&e.value.trim()!==""&&(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value)||(o=!1,t="Por favor, insira um e-mail válido.")),o&&e.hasAttribute("pattern")&&e.value.trim()!==""&&(new RegExp(e.pattern).test(e.value)||(o=!1,t="O formato está incorreto. Siga o exemplo.")),o&&e.id==="cpf"&&e.value.trim()!==""&&(O(e.value)||(o=!1,t="Este CPF não é válido. Verifique os dígitos.")),o?u(e):w(e,t),o}function I(e){const o=document.getElementById(e);if(!o)return;const t=o.querySelectorAll("input[required], select[required], textarea[required]");t.forEach(r=>{r.addEventListener("blur",()=>{d(r)}),r.addEventListener("input",()=>{r.classList.contains("invalid")&&u(r)})}),o.addEventListener("submit",function(r){r.preventDefault();let a=!0;if(t.forEach(i=>{d(i)||(a=!1)}),a){const i=new FormData(o),s={};i.forEach((l,n)=>{Object.prototype.hasOwnProperty.call(s,n)?(Array.isArray(s[n])||(s[n]=[s[n]]),s[n].push(l)):s[n]=l}),localStorage.setItem("cadastroVoluntario",JSON.stringify(s)),console.log("Dados salvos no localStorage:",s),alert('Cadastro salvo com sucesso! (Verifique o console ou a aba "Application" do navegador)'),o.reset()}else{const i=o.querySelector(".invalid");if(i){i.focus();const s=i.previousElementSibling,l=s?s.textContent:"O primeiro campo inválido";console.warn(`Erro de validação no campo: ${l}`)}}})}const c={"/":q,"/projetos":L,"/cadastro":C,"/404":()=>'<section class="container card mt-16"><h2>Página não encontrada (404)</h2><p>O conteúdo que você procura não foi localizado.</p></section>'};function M(){const e=window.location.hash;return e===""||e==="#"?"/":e.slice(1)}function p(){const e=document.getElementById("app-root");if(!e){console.error("ERRO: Elemento #app-root não foi encontrado.");return}const o=M(),t=c[o]||c["/404"];e.innerHTML=t(),o==="/cadastro"&&(A(),I("cadForm")),window.scrollTo(0,0)}function x(){window.addEventListener("hashchange",p),window.location.hash||(window.location.hash="#/"),p()}function B(){const e=document.getElementById("hamburgerBtn"),o=document.getElementById("mobileMenu");!e||!o||(e.addEventListener("click",()=>{o.classList.toggle("open"),e.classList.toggle("active")}),o.addEventListener("click",t=>{t.target.tagName==="A"&&(o.classList.remove("open"),e.classList.remove("active"))}))}function R(){const e=document.getElementById("themeToggleBtn");if(!e)return;function o(i){i?(document.body.classList.add("dark-mode"),e.innerHTML="🌙",e.setAttribute("aria-label","Mudar para tema claro"),e.setAttribute("title","Mudar para tema claro")):(document.body.classList.remove("dark-mode"),e.innerHTML="☀️",e.setAttribute("aria-label","Mudar para tema escuro"),e.setAttribute("title","Mudar para tema escuro"))}const t=localStorage.getItem("theme"),r=window.matchMedia("(prefers-color-scheme: dark)").matches;let a=t==="dark"||t===null&&r;o(a),e.addEventListener("click",()=>{a=!document.body.classList.contains("dark-mode"),o(a),localStorage.setItem("theme",a?"dark":"light")})}function j(){B(),R(),x()}document.addEventListener("DOMContentLoaded",j);
