const validateForms = () => {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const nameInput = form.querySelector('input[name="name"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    const consentInput = form.querySelector('input[name="consent"]');

    const applyPhoneMask = (input) => {
      input.addEventListener('input', () => {
        let value = input.value.replace(/\D/g, '');
        if (value.startsWith('7')) {
          value = `+${value}`;
        } else {
          value = `+7${value}`;
        }
        input.value = value.replace(/(\+7)(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5').trim();
      });
    };

    applyPhoneMask(phoneInput);

    nameInput.addEventListener('input', () => {
      const namePattern = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
      if (nameInput.value.trim() === '') {
        nameInput.setCustomValidity('Имя не может быть пустым.');
        nameInput.parentElement.classList.add('is-error');
      } else if (!namePattern.test(nameInput.value)) {
        nameInput.setCustomValidity('Имя должно содержать только буквы.');
        nameInput.parentElement.classList.add('is-error');
      } else {
        nameInput.setCustomValidity('');
        nameInput.parentElement.classList.remove('is-error');
      }
    });

    phoneInput.addEventListener('input', () => {
      const phonePattern = /^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/;
      if (phoneInput.value.trim() === '') {
        phoneInput.setCustomValidity('Номер телефона не может быть пустым.');
        phoneInput.parentElement.classList.add('is-error');
      } else if (!phonePattern.test(phoneInput.value)) {
        phoneInput.setCustomValidity('Введите корректный номер телефона в формате +7 123 456 78 90.');
        phoneInput.parentElement.classList.add('is-error');
      } else {
        phoneInput.setCustomValidity('');
        phoneInput.parentElement.classList.remove('is-error');
      }
    });

    consentInput.addEventListener('change', () => {
      if (!consentInput.checked) {
        consentInput.setCustomValidity('Вы должны согласиться с обработкой персональных данных.');
        consentInput.parentElement.classList.add('is-error');
      } else {
        consentInput.setCustomValidity('');
        consentInput.parentElement.classList.remove('is-error');
      }
    });

    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        form.querySelectorAll(':invalid').forEach((element) => {
          element.parentElement.classList.add('is-error');
        });
      } else {
        form.querySelectorAll('.is-error').forEach((element) => {
          element.parentElement.classList.remove('is-error');
        });
      }
    });

    form.querySelectorAll('input').forEach((input) => {
      input.addEventListener('input', () => {
        if (input.validity.valid) {
          input.parentElement.classList.remove('is-error');
        }
      });
    });
  });
};

export { validateForms };
