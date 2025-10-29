document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav-links');
    const mobileMenuButton = document.querySelector('.mobile-menu');
    // NOVO: Seleciona o botão de fechar
    const closeMenuButton = document.querySelector('.close-menu'); 
    const body = document.querySelector('body');

    function toggleMenu() {
        nav.classList.toggle('nav-active');
        body.classList.toggle('no-scroll');
    }

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMenu);
    }
    
    // NOVO: Adiciona o evento de clique ao botão de fechar
    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', toggleMenu);
    }
});