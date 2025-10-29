document.addEventListener('DOMContentLoaded', function() {

    //Lógica Menu Mobile 
    const nav = document.querySelector('.nav-links');
    const mobileMenuButton = document.querySelector('.mobile-menu');
    const closeMenuButton = document.querySelector('.close-menu'); 

    function toggleMenu() {
        if (nav) {
            nav.classList.toggle('nav-active');
        }
    }

    mobileMenuButton?.addEventListener('click', toggleMenu);
    closeMenuButton?.addEventListener('click', toggleMenu);

    //Lógica de Validação do Forms
    const form = document.getElementById('form');
    const nomeInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const feedbackMessage = document.getElementById('feedback-message');
    
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    function showError(inputId, message) {
        const errorElement = document.querySelector(`.error-text[data-for="${inputId}"]`);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block'; 
        }
    }
    
    function hideError(inputId) {
        const errorElement = document.querySelector(`.error-text[data-for="${inputId}"]`);
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    }

    form?.addEventListener('submit', function(event) {

        event.preventDefault(); 
        let isFormValid = true;

        //Validação do Nome 
        if (nomeInput.value.trim() === '') {
            showError('name', 'O campo Nome é obrigatório.');
            isFormValid = false;
        } else {
            hideError('name');
        }

        //Validação do E-mail 
        const emailValue = emailInput.value.trim();

        if (emailValue === '') {
            showError('email', 'O campo E-mail é obrigatório.');
            isFormValid = false;
        } else if (!EMAIL_REGEX.test(emailValue)) {
            showError('email', 'Por favor, digite um e-mail válido.');
            isFormValid = false;
        } else {
            hideError('email');
        }

        //Btn Sucesso
        if (isFormValid) {
            form.style.display = 'none';
            if (feedbackMessage) {
                feedbackMessage.textContent = 'Assinatura confirmada! Sua jornada por insights começa agora. Toda semana, às 6h30 da manhã, entregaremos o essencial para suas manhãs serem produtivas. Prepare o café, porque a inteligência artificial vai entrar na sua rotina!';
                feedbackMessage.style.display = 'block';
            }
        }
    });
});