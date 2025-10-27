// js/validation.js

/**
 * Validação algorítmica de CPF (Verificação de consistência).
 * @param {string} cpf - CPF no formato 000.000.000-00
 */
function validateCPF(cpf) {
  const cpfLimpo = cpf.replace(/\D/g, '');
  if (cpfLimpo.length !== 11 || /^(\d)\1{10}$/.test(cpfLimpo)) return false;

  let soma = 0;
  let resto;

  for (let i = 1; i <= 9; i++) {
    soma += parseInt(cpfLimpo.substring(i - 1, i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpfLimpo.substring(9, 10))) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(cpfLimpo.substring(i - 1, i)) * (12 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpfLimpo.substring(10, 11))) return false;

  return true;
}

/**
 * Exibe uma mensagem de erro para um campo.
 * @param {HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement} input - O elemento do input.
 * @param {string} message - A mensagem a ser exibida.
 */
function showError(input, message) {
  input.classList.add('invalid');
  const errorEl = document.getElementById(`${input.id}-error`);
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.style.display = 'block';
  }
}

/**
 * Limpa a mensagem de erro de um campo.
 * @param {HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement} input - O elemento do input.
 */
function clearError(input) {
  input.classList.remove('invalid');
  const errorEl = document.getElementById(`${input.id}-error`);
  if (errorEl) {
    errorEl.textContent = '';
    errorEl.style.display = 'none';
  }
}

/**
 * Valida um campo individual em tempo real.
 * @param {HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement} input - O elemento do input.
 */
function validateField(input) {
  let isValid = true;
  let message = '';

  // 1. Validação de 'required' (obrigatório)
  if (input.hasAttribute('required')) {
    if (input.type === 'checkbox' && !input.checked) {
      isValid = false;
      message = 'Você deve aceitar os termos.';
    } else if (input.value.trim() === '') {
      isValid = false;
      message = 'Este campo é obrigatório.';
    }
  }

  // 2. Validação de 'minlength' (comprimento mínimo)
  if (isValid && input.hasAttribute('minlength') && input.value.length < parseInt(input.minLength, 10)) {
    isValid = false;
    message = `Este campo deve ter no mínimo ${input.minLength} caracteres.`;
  }

  // 3. Validação de 'type=email'
  if (isValid && input.type === 'email' && input.value.trim() !== '') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.value)) {
      isValid = false;
      message = 'Por favor, insira um e-mail válido.';
    }
  }

  // 4. Validação de 'pattern' (regex)
  if (isValid && input.hasAttribute('pattern') && input.value.trim() !== '') {
    const regex = new RegExp(input.pattern);
    if (!regex.test(input.value)) {
      isValid = false;
      message = 'O formato está incorreto. Siga o exemplo.';
    }
  }

  // 5. Validação AVANÇADA de consistência (CPF)
  if (isValid && input.id === 'cpf' && input.value.trim() !== '') {
    if (!validateCPF(input.value)) {
      isValid = false;
      message = 'Este CPF não é válido. Verifique os dígitos.';
    }
  }

  // Atualiza a UI
  if (!isValid) {
    showError(input, message);
  } else {
    clearError(input);
  }

  return isValid;
}

/**
 * Inicializa a validação avançada para o formulário.
 * @param {string} formId - O ID do formulário.
 */
export function initFormValidation(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');

  // Validação em tempo real (ao sair do campo)
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      validateField(input);
    });
    // Limpa o erro ao começar a digitar
    input.addEventListener('input', () => {
      if (input.classList.contains('invalid')) {
        clearError(input);
      }
    });
  });

  // Validação no envio (Submit)
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    let isFormValid = true;
    // Valida todos os campos
    inputs.forEach(input => {
      if (!validateField(input)) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      // 1. Coleta os dados do formulário
      // FormData captura até mesmo os valores de 'select multiple'
      const formData = new FormData(form);
      
      // Converte para um objeto simples
      // Nota: getAl() é usado para campos 'multiple' como o select de interesse
      const data = {};
      formData.forEach((value, key) => {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          // Se a chave já existe (ex: select multiple), converte em array
          if (!Array.isArray(data[key])) {
            data[key] = [data[key]];
          }
          data[key].push(value);
        } else {
          data[key] = value;
        }
      });

      // 2. Salva os dados no localStorage do navegador
      localStorage.setItem('cadastroVoluntario', JSON.stringify(data));

      // 3. (BÔNUS) Exibe os dados no console para verificação imediata
      console.log('Dados salvos no localStorage:', data);

      // 4. Avisa o usuário e limpa o formulário
      alert('Cadastro salvo com sucesso! (Verifique o console ou a aba "Application" do navegador)');
      form.reset();
      
    } else {
      // Foca no primeiro campo inválido
      const firstInvalid = form.querySelector('.invalid');
      if (firstInvalid) {
        firstInvalid.focus();
        // Avisa o usuário sobre o erro
        const label = firstInvalid.previousElementSibling;
        const labelText = label ? label.textContent : 'O primeiro campo inválido';
        console.warn(`Erro de validação no campo: ${labelText}`);
      }
    }
  });
}