// 1. Animação de rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Destacar itens de experiência e habilidades ao passar o mouse
const experienciaItems = document.querySelectorAll('.experiencia-item');
const habilidadesItems = document.querySelectorAll('#habilidades li');

experienciaItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#ecf0f1';
        item.style.transition = 'background-color 0.3s ease';
    });

    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = 'transparent';
    });
});

habilidadesItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});

// 3. Exibir uma mensagem de alerta quando o botão de contato for clicado
// Adicione o seguinte código ao HTML se quiser um botão de contato
// <button id="contatoBtn">Entrar em contato</button>

const contatoBtn = document.getElementById('contatoBtn');
if (contatoBtn) {
    contatoBtn.addEventListener('click', () => {
        alert('Obrigado por entrar em contato! Vou responder o mais rápido possível.');
    });
    
}
