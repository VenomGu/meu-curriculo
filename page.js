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
// Ação de mostrar/esconder informações ao clicar na foto
document.getElementById('foto').addEventListener('click', function() {
    const info = document.getElementById('info');
    
    // Alterna a visibilidade das informações
    if (info.style.display === 'none' || info.style.display === '') {
        info.style.display = 'block';
    } else {
        info.style.display = 'none';
    }
});


// 3. Exibir uma mensagem de alerta quando o botão de contato for clicado, mas sem interferir no link do WhatsApp
const contatoBtn = document.getElementById('contatoBtn');
if (contatoBtn) {
    // Verifica se o botão não é o link do WhatsApp
    if (!contatoBtn.closest('a')) {
        contatoBtn.addEventListener('click', () => {
            alert('Obrigado por entrar em contato! Vou responder o mais rápido possível.');
        });
    }
}
