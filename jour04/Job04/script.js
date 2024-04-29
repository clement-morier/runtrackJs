document.getElementById('updateButton').addEventListener('click', () => {
    fetch('utilisateurs.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('La réponse du réseau n\'était pas valide');
            }
            return response.json();
        })
        .then(users => {
            updateTable(users);
        })
        .catch(error => {
            console.error('Un problème est survenu lors de l\'opération fetch :', error);
        });
});

function updateTable(users) {
    const tbody = document.querySelector('#userTable tbody');
    tbody.innerHTML = ''; // Efface le contenu actuel du tableau

    users.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.nom}</td>
            <td>${user.prenom}</td>
            <td>${user.email}</td>
        `;
        tbody.appendChild(tr);
    });
}