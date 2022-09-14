const inputEmail = document.getElementById('login')
const inputSenha = document.getElementById('login-senha')
const button = document.getElementById('button');
let emailTrybe = 'tryber@teste.com';
let senhaTrybe = '123456';

button.addEventListener('click', validarFormulario);


function validarFormulario (){
    let email = inputEmail.value
    let senha = inputSenha.value

      if(email === emailTrybe && senha === senhaTrybe){
        alert('Olá, Tryber!');
        
    } else {
        alert('Email ou senha inválidos.');
    }
}



