// Abrir o pop-up automaticamente ao carregar a página
window.addEventListener('load', () => {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
});

// Fechar o pop-up ao clicar fora dele
window.addEventListener('click', (event) => {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

// Submeter o formulário
const popupForm = document.getElementById('popupForm');
popupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;

    alert(`Email: ${email}\nNome: ${nome}\nIdade: ${idade}`);

    popup.style.display = 'none';
});