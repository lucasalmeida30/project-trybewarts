const inputEmail = document.getElementById('login');
const inputSenha = document.getElementById('login-senha');
const button = document.getElementById('button');
let emailTrybe = 'tryber@teste.com';
let senhaTrybe = '123456';

button.addEventListener('click', validarFormulario);


function validarFormulario (){
    let email = inputEmail.value;
    let senha = inputSenha.value;

      if(email === emailTrybe && senha === senhaTrybe){
        alert('Olá, Tryber!');
        
    } else {
        alert('Email ou senha inválidos.');
    }
}



// Requisito 18 -------- Função para habilitar o button 

const checkboxInfos = document.querySelector('#agreement');
const buttonSubmit = document.querySelector('#submit-btn');

checkboxInfos.addEventListener('change', () => { //O changeevento é disparado para os elementos <input>, <select>e <textarea>quando o usuário modifica o valor do elemento. https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
    buttonSubmit.disabled = !checkboxInfos.checked;
});


