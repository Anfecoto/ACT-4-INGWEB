$(document).ready(function() {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            let characters = data.results;
            let output = '';

            characters.forEach(character => {
                output += `
                    <div class="col-md-4">
                        <div class="card">
                            <img src="${character.image}" class="card-img-top" alt="${character.name}">
                            <div class="card-body">
                                <h5 class="card-title">${character.name}</h5>
                                <p class="card-text">Species: ${character.species}</p>
                                <p class="card-text">Status: ${character.status}</p>
                            </div>
                        </div>
                    </div>
                `;
            });

            $('#character-container').html(output);
        })
        .catch(error => console.log('Error:', error));
});
