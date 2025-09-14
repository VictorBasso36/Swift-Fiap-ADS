document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('overlay');
    const navLinks = document.querySelectorAll('.sidebar nav a');

    // Função para fechar o menu
    const closeMenu = () => {
        sidebar.classList.remove('visible');
        overlay.classList.remove('visible');
    };

    // Abre/fecha o menu ao clicar no botão hambúrguer
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('visible');
        overlay.classList.toggle('visible');
    });

    // Fecha o menu ao clicar no overlay
    overlay.addEventListener('click', closeMenu);

    // Fecha o menu ao clicar em um link (útil para navegação na mesma página)
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});