// js/masks.js

// Função para aplicar a máscara de CPF
function maskCPF(cpf) {
  let v = cpf.value.replace(/\D/g, '').slice(0, 11);
  v = v.replace(/^(\d{3})(\d)/, '$1.$2');
  v = v.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
  v = v.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})$/, '$1.$2.$3-$4');
  cpf.value = v;
}

// Função para aplicar a máscara de Telefone
function maskTel(tel) {
  let v = tel.value.replace(/\D/g, '').slice(0, 11);
  v = v.replace(/^(\d{2})(\d)/, '($1) $2');
  if (v.length <= 13) {
    v = v.replace(/(\d{4})(\d)/, '$1-$2');
  } else {
    v = v.replace(/(\d{5})(\d)/, '$1-$2');
  }
  tel.value = v;
}

// Função para aplicar a máscara de CEP
function maskCEP(cep) {
  let v = cep.value.replace(/\D/g, '').slice(0, 8);
  v = v.replace(/^(\d{5})(\d)/, '$1-$2');
  cep.value = v;
}

/**
 * Função principal que inicializa todas as máscaras.
 * Ela é exportada para ser chamada pelo roteador
 * apenas quando o formulário de cadastro estiver na tela.
 */
export function initMasks() {
  const cpf = document.getElementById('cpf');
  const tel = document.getElementById('telefone');
  const cep = document.getElementById('cep');

  if (cpf) {
    cpf.addEventListener('input', () => maskCPF(cpf));
  }

  if (tel) {
    tel.addEventListener('input', () => maskTel(tel));
  }

  if (cep) {
    cep.addEventListener('input', () => maskCEP(cep));
  }
}