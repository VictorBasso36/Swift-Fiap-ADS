// Seleciona os elementos do DOM
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const mobileSignUp = document.getElementById('mobileSignUp');
const mobileSignIn = document.getElementById('mobileSignIn');
const container = document.getElementById('container');

// Função para ativar o painel de registro
const showSignUpPanel = (e) => {
    e.preventDefault();
    container.classList.add('right-panel-active');
};

// Função para ativar o painel de login
const showSignInPanel = (e) => {
    e.preventDefault();
    container.classList.remove('right-panel-active');
};

// Adiciona eventos de clique para os botões do DESKTOP
signUpButton.addEventListener('click', showSignUpPanel);
signInButton.addEventListener('click', showSignInPanel);

// Adiciona eventos de clique para os links do MOBILE
mobileSignUp.addEventListener('click', showSignUpPanel);
mobileSignIn.addEventListener('click', showSignInPanel);



