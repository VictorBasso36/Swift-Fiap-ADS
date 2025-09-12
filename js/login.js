const telaLoginRegistro = document.querySelector('#tela-login-registro');
const btnLogin = document.querySelector('#btn-login');
const btnRegistro = document.querySelector('#btn-registro');

btnRegistro.addEventListener('click', ()=>{
    telaLoginRegistro.classList.add('ativo')
})

btnLogin.addEventListener('click', ()=>{
    telaLoginRegistro.classList.remove('ativo')
})