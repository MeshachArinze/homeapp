// form validation
const inputs = document.querySelectorAll('input');
const patterns = {
  telephone: /^\d{11}$/,
  username: /^[a-z\d]{5,20}/,
  password: /^[\w@-]{8,20}/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};
//validation function
function validate(field, regex) {
  if(regex.test(field.value)) {
    field.className = 'valid';
  } else {
    field.className = 'invalid';
  }
  // console.log(regex.test(field.value));
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
