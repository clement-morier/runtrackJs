function filterData() {
    const id = document.getElementById('id').value;
    const nom = document.getElementById('nom').value;
    const type = document.getElementById('type').value;

    const queryParams = new URLSearchParams({
        id: id,
        nom: nom,
        type: type
    });

    fetch('pokemon.json?' + queryParams)
        .then(response => {
            if (!response.ok) {
                throw new Error('La réponse du réseau n\'était pas valide');
            }
            return response.json();
        })
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error('Un problème est survenu lors de l\'opération fetch :', error);
        });
}

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    if (data.length === 0) {
        resultsDiv.innerText = 'Aucun résultat trouvé.';
        return;
    }

    const ul = document.createElement('ul');
    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `ID: ${item.id}, Nom: ${item.nom}, Type: ${item.type}`;
        ul.appendChild(li);
    });
    resultsDiv.appendChild(ul);
}