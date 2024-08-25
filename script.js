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

    // Formulário
    const popupForm = document.getElementById('Enviar');
    function Submeter (){
        const email = document.getElementById('email').value;
        const nome = document.getElementById('nome').value;
        const idade = document.getElementById('idade').value;

    // Mensagem de confirmação
    const confirmationMessage = document.createElement('div');
    confirmationMessage.className = 'confirmation-message';
    confirmationMessage.innerHTML = `
        <h2>Obrigado!</h2>
        <p>Seu e-mail: ${email}<br>Seu nome: ${nome}<br>Sua idade: ${idade}</p>
        <button id="closeConfirmation">Fechar</button>
        `;

    const popupContent = document.querySelector('.popup-content');
    popupContent.innerHTML = '';
    popupContent.appendChild(confirmationMessage);


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
                const instagram = this.getAttribute('data-instagram'); 
                const twitter = this.getAttribute('data-twitter');
                const twitch = this.getAttribute('data-twitch'); 
                
                console.log(typeof twitch);

                infoContainer.innerHTML = `
                    <div class="person-info">
                        <div class="imagem"> <img id="person-image" src="${image}" alt="Pessoa"></div>
                        <div id="person-details">
                            <div> 
                                <h3 id="person-name">${name}</h3>
                                <h3 id="person-funcao">${funcao}</h3>
                            </div>
                            <p id="person-bio">${bio}</p>
                            <div id="person-links">
                            </div>
                        </div>
                    </div>
                `;
                let links = document.getElementById("person-links");
                if(instagram != null){
                    links.innerHTML += `<a href="${instagram}" target="_blank"><i class="fab fa-instagram"></i> Instagram</a>`; 
                }
                if(twitter != null){
                    links.innerHTML +=`<a href="${twitter}" target="_blank"><i class="fab fa-twitter"></i> Twitter</a> `
                }
                if(twitch != null){
                    links.innerHTML +=`<a href="${twitch}" target="_blank"><i class="fab fa-twitch"></i> Twitch</a>`
                }

                infoContainer.style.display = 'flex';
            });
        });
    });