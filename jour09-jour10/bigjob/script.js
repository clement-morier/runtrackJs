var regex = /["'\\/(){};[\]]/;

document
  .getElementById("inscriptionForm")
  .addEventListener("input", function (event) {
    var nomInput = document.getElementById("nom");
    var nomError = document.getElementById("nom-error");

    nomInput.addEventListener("input", function (event) {
      var nomValue = nomInput.value.trim();

      if (regex.test(nomValue)) {
        document.getElementById("caracSpeNom").style.display = "block";
      } else if (nomValue.length < 4) {
        document.getElementById("nom-error").style.display = "block";
        document.getElementById("caracSpeNom").style.display = "none";
      } else {
        document.getElementById("nom-error").style.display = "none";
      }
    });

    var prenomInput = document.getElementById("prenom");
    var prenomError = document.getElementById("prenom-error");

    prenomInput.addEventListener("input", function (event) {
      var prenomValue = prenomInput.value.trim();

      if (regex.test(prenomValue)) {
        document.getElementById("caracSpePrenom").style.display = "block";
      } else if (
        prenomValue.length === 0 ||
        !/[A-Z]/.test(prenomValue.charAt(0))
      ) {
        document.getElementById("prenom-error").style.display = "block";
        document.getElementById("caracSpePrenom").style.display = "none";
      } else {
        document.getElementById("prenom-error").style.display = "none";
      }
    });

    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("email-error");
    var emailRegex = /^[a-zA-Z0-9._%+-]+@laplateforme\.io$/;

    emailInput.addEventListener("input", function (event) {
      var emailValue = emailInput.value.trim();

      if (regex.test(emailValue)) {
        document.getElementById("caracSpeEmail").style.display = "block";
      } else if (!emailRegex.test(emailValue)) {
        document.getElementById("email-error").style.display = "block";
        document.getElementById("caracSpeEmail").style.display = "none";
      } else {
        document.getElementById("email-error").style.display = "none";
      }
    });

    var mdpInput = document.getElementById("motdepasse");
    var mdpError = document.getElementById("mdp-error");
    var mdpRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    mdpInput.addEventListener("input", function (event) {
      var mdpValue = mdpInput.value.trim();

      if (regex.test(mdpValue)) {
        document.getElementById("caracSpeMdp").style.display = "block";
      } else if (!mdpRegex.test(mdpValue)) {
        document.getElementById("mdp-error").style.display = "block";
        document.getElementById("caracSpeMdp").style.display = "none";
      } else {
        document.getElementById("mdp-error").style.display = "none";
      }
    });

    var adresseInput = document.getElementById("adresse");
    var addresseError = document.getElementById("adresse-error");
    var addressRegex = /^[0-9]+\s[A-Za-z\s]+$/;

    adresseInput.addEventListener("input", function (event) {
      var adresseValue = adresseInput.value.trim();
      if (regex.test(mdpValue)) {
        document.getElementById("caracSpeAdresse").style.display = "block";
      } else if (!addressRegex.test(adresseValue)) {
        document.getElementById("adresse-error").style.display = "block";
      } else {
        document.getElementById("adresse-error").style.display = "none";
      }
    });

    var codepostalInput = document.getElementById("codepostal");
    var codepostalError = document.getElementById("codepostal-error");
    var codepostalRegex = /^\d{5,}$/;

    codepostalInput.addEventListener("input", function (event) {
      this.value = this.value.replace(/\D/g, "").slice(0, 5);
      var codepostalValue = codepostalInput.value.trim();
      if (regex.test(mdpValue)) {
        document.getElementById("caracSpeCode").style.display = "block";
      } else if (!codepostalRegex.test(codepostalValue)) {
        document.getElementById("codepostal-error").style.display = "block";
      } else {
        document.getElementById("codepostal-error").style.display = "none";
      }
    });
  });