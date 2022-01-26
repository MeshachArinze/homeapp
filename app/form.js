(function() {
  'use strict';
    const signBtn = document.getElementById('signup__btn');
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('signup__box');
    const form = document.forms;
    const inputs = document.querySelectorAll('input');
    
    signBtn.addEventListener('click', () => {
      container.classList.toggle('moveBtn')
    });

    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active')
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active')
  });

  const patterns = {
    username: /^[a-z\d]{5,20}/,
    password: /^[\w@-]{8,20}/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
  };

  function validate(field, regex) {
    // console.log(regex.test(field.value));
    if(regex.test(field.value)) {
      field.className = 'valid';
    } else {
      field.className = 'invalid';
    }
  }

  inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
      input.focus();
      validate(e.target, patterns[e.target.attributes.name.value]);
    });
    input.addEventListener('input', () => {
      input.setCustomValidity('');
      input.checkValidity();
    });
  });
    
})();