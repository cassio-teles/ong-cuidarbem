// js/masks.js
document.addEventListener('DOMContentLoaded', function () {
  const cpf = document.getElementById('cpf');
  const tel = document.getElementById('telefone');
  const cep = document.getElementById('cep');

  function setCursorToEnd(el) { try { el.selectionStart = el.selectionEnd = el.value.length; } catch(e){} }

  // máscara CPF: 000.000.000-00
  if(cpf){
    cpf.addEventListener('input', function(){
      let v = cpf.value.replace(/\D/g,'').slice(0,11);
      v = v.replace(/^(\d{3})(\d)/,'$1.$2');
      v = v.replace(/^(\d{3})\.(\d{3})(\d)/,'$1.$2.$3');
      v = v.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})$/,'$1.$2.$3-$4');
      cpf.value = v;
    });
  }

  // máscara telefone: (00) 00000-0000 ou (00) 0000-0000
  if(tel){
    tel.addEventListener('input', function(){
      let v = tel.value.replace(/\D/g,'').slice(0,11);
      v = v.replace(/^(\d{2})(\d)/,'($1) $2');
      if(v.length <= 13){
        v = v.replace(/(\d{4})(\d)/, '$1-$2');
      } else {
        v = v.replace(/(\d{5})(\d)/, '$1-$2');
      }
      tel.value = v;
    });
  }

  // máscara CEP: 00000-000
  if(cep){
    cep.addEventListener('input', function(){
      let v = cep.value.replace(/\D/g,'').slice(0,8);
      v = v.replace(/^(\d{5})(\d)/,'$1-$2');
      cep.value = v;
    });
  }
});
