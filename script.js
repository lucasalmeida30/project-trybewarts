const inputEmail = document.getElementById('login');
const inputSenha = document.getElementById('login-senha');
const button = document.getElementById('button');
const emailTrybe = 'tryber@teste.com';
const senhaTrybe = '123456';

function validarFormulario() {
  const email = inputEmail.value;
  const senha = inputSenha.value;
  if (email === emailTrybe && senha === senhaTrybe) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
button.addEventListener('click', validarFormulario);
const checkboxInfos = document.querySelector('#agreement');
const buttonSubmit = document.querySelector('#submit-btn');
checkboxInfos.addEventListener('change', () => {
  buttonSubmit.disabled = !checkboxInfos.checked;
});
