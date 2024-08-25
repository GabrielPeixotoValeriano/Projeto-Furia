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
const popupForm = document.getElementById('Enviar');
function Submeter (){
    const email = document.getElementById('email').value;
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;

    // Exibir mensagem de confirmação
    const confirmationMessage = document.createElement('div');
    confirmationMessage.className = 'confirmation-message';
    confirmationMessage.innerHTML = `
        <h2>Obrigado!</h2>
        <p>Seu e-mail: ${email}<br>Seu nome: ${nome}<br>Sua idade: ${idade}</p>
        <button id="closeConfirmation">Fechar</button>
    `;

    const popupContent = document.querySelector('.popup-content');
    popupContent.innerHTML = ''; // Limpar o conteúdo existente
    popupContent.appendChild(confirmationMessage);

    // Adicionar funcionalidade para fechar a confirmação
    document.getElementById('closeConfirmation').addEventListener('click', () => {
        document.getElementById('popup').style.display = 'none';
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const infoContainer = document.getElementById('infoContainer');
    const personItems = document.querySelectorAll('.person-item');

    personItems.forEach(item => {
        item.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const image = this.getAttribute('data-image');
            const funcao = this.getAttribute('data-funcao');
            const bio = this.getAttribute('data-bio');
            const instagram = this.getAttribute('data-instagram'); // Novo
            const twitter = this.getAttribute('data-twitter'); // Novo
            const twitch = this.getAttribute('data-twitch'); // Novo

            infoContainer.innerHTML = `
                <div class="person-info">
                    <img id="person-image" src="${image}" alt="Pessoa">
                    <div id="person-details">
                        <h2 id="person-name">${name}</h2>
                         <h3 id="person-funcao">${funcao}</h3> <!-- Exibindo a função -->
                        <p id="person-bio">${bio}</p>
                        <div id="person-links">
                            <a href="${instagram}" target="_blank"><i class="fab fa-instagram"></i> Instagram</a> <!-- Novo -->
                            <a href="${twitter}" target="_blank"><i class="fab fa-twitter"></i> Twitter</a> <!-- Novo -->
                            <a href="${twitch}" target="_blank"><i class="fab fa-twitch"></i> Twitch</a> <!-- Novo -->
                        </div>
                    </div>
                </div>
            `;

            infoContainer.style.display = 'flex'; // Exibe a info-container
        });
    });
});