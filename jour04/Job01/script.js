document.getElementById('button').addEventListener('click', () => {
    fetch('expression.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('La réponse du réseau n\'était pas valide');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('expression').innerText = data;
        })
        .catch(error => {
            console.error('Un problème est survenu lors de l\'opération fetch :', error);
        });
});