function showhide(){
    const article = document.getElementById("article");
    if (article.style.display === "block") {
        article.style.display = "none";
    } else {
        article.style.display = "block";
    }
}
const article = document.createElement("article");
article.id = "article";
article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
article.style.display = "none";
document.body.appendChild(article);