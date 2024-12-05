// Função para detectar rolagem e animar as propostas
document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 50) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});