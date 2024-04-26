function addOne(){
    const compteur = document.getElementById("compteur");
    let valeur = parseInt(compteur.textContent);
    valeur++;
    compteur.textContent = valeur;
}
const button = document.getElementById("button");
button.addEventListener("click",addOne);