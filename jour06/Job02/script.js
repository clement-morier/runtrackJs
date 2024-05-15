document.getElementById("modifierTexte").addEventListener("click", function () {
    document.getElementById("jumbotronText").innerText =
      "J'ai vu tant de choses, que vous, humains, ne pourriez pas croire... De grands navires en feu surgissant de l'épaule d'Orion, j'ai vu des rayons fabuleux, des rayons C, briller dans l'ombre de la Porte de Tannhaüser. Tous ces moments se perdront dans l'oubli, comme les larmes dans la pluie. Il est temps de mourir.";
  });
  
  function changerContenu(numero) {
    var jumbotronText = document.getElementById("jumbotronText");
    var bouton = document.getElementById("modifierTexte");
  
    // Modifier le texte en fonction du numéro de page
    switch (numero) {
      case 1:
        jumbotronText.innerHTML =
          "Je ne m'y ferai sans doute jamais, dés qu'arrive la date de ton départ, je ne suis plus la même : les souvenirs envahissent mon esprit et je me sens tourmentée. La vie continue avec ses joies et ses peines, malheureusement tu n'es plus là. Mais tu es dans mon coeur à tout jamais ma petite maman.";
        break;
      case 2:
        jumbotronText.innerHTML =
          "Écoute... Je n'aime pas faire la morale, mais je vais te donner un conseil qui te servira à jamais. Dans la vie tu rencontreras beaucoup de cons. S'ils te blessent, dis-toi que c'est la bêtise qui les pousse à te faire du mal. Ça t'évitera de répondre à leur méchanceté. Car il n'y a rien de pire au monde que l'amertume et la vengeance. Reste toujours digne et intègre à toi-même.";
        break;
      case 3:
        jumbotronText.innerHTML =
          "Ce qui me manque dans ma vie c'est toi... C'est ton odeur, les mots d'amour sortant de ta bouche, ta respiration, ton sourire, la douceur de ta peau, la chaleur de ton corps, le son de ta voie, la douceur de tes mains, la chaleur de tes bras, l'odeur de tes cheveux, leur longueur, tes bisous dans mon cou, ton corps sur mon corps, tes lèvres contre mes lèvres, ta jalousie quand je m'approchais trop d'une fille, ça me manque de ne plus t'entendre dire je ne suis qu'à toi, ton sourire me manque... mais ce qui me manque le plus c'est de ne plus t'entendre me dire Je t'aime.";
        break;
      default:
        break;
    }
  }
  function activerElement(element) {
    // Désactiver tous les éléments de la liste
    var listGroup = document.getElementById("listGroup");
    var elements = listGroup.getElementsByClassName("list-group-item");
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove("active");
    }
  
    // Activer l'élément cliqué
    element.classList.add("active");
  }