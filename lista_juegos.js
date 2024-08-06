document.addEventListener('DOMContentLoaded', () => {
    const cargarJuegosBtn = document.querySelector('#cargarJuegos');
    cargarJuegosBtn.addEventListener('click', obtenerDatos);

    function obtenerDatos() {
        fetch('https://api.rawg.io/api/games?key=d5418abfa6cc4ac8b9b1abd51ef2f0e6')
            .then(respuesta => respuesta.json())
            .then(resultado => {
                mostrarHTML(resultado.results.slice(0, 50)); 
                console.log(resultado);
            })
            .catch(error => console.error('Error al obtener los juegos:', error));
    }

    function mostrarHTML(juegos) {
        const gameContainer = document.querySelector('#gameContainer');
        gameContainer.innerHTML = ''; // Limpiar contenido previo

        juegos.forEach(juego => {
            const { id, name, released, background_image, rating } = juego;

            const gameCard = document.createElement('div');
            gameCard.classList.add('game-card');

            const gameImage = document.createElement('img');
            gameImage.src = background_image || 'URL_DE_IMAGEN_POR_DEFECTO';
            gameImage.alt = name;

            const gameTitle = document.createElement('h2');
            gameTitle.textContent = name;

            const gameYear = document.createElement('p');
            gameYear.textContent = `Fecha de Lanzamiento: ${released}`;

            const gameRating = document.createElement('p');
            gameRating.textContent = `Rating: ${rating}`;

            const gameId = document.createElement('p');
            gameId.textContent = `ID: ${id}`;

            const gamePlatform = document.createElement('p'); 
            gamePlatform.textContent = `platformplatform ${gamePlatform}`

            gameCard.appendChild(gameImage);
            gameCard.appendChild(gameTitle);
            gameCard.appendChild(gameYear);
            gameCard.appendChild(gameRating);
            gameCard.appendChild(gameId);
            gameCard.appendChild(gamePlatform);

            gameContainer.appendChild(gameCard);
        });
    }
});
