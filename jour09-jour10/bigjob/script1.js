document
  .getElementById("inscriptionForm")
  .addEventListener("input", function (event) {
    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("email-error");
    var emailRegex = /^[a-zA-Z0-9._%+-]+@laplateforme\.io$/;

    var emailValue = emailInput.value.trim();
    if (!emailRegex.test(emailValue)) {
      emailError.style.display = "block";
    } else {
      emailError.style.display = "none";
    }

    var mdpInput = document.getElementById("motdepasse");
    var mdpError = document.getElementById("mdp-error");
    var mdpRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    var mdpValue = mdpInput.value.trim();
    if (!mdpRegex.test(mdpValue)) {
      mdpError.style.display = "block";
    } else {
      mdpError.style.display = "none"; // Hide error message when password meets the criteria
    }
  });

document
  .getElementById("connexion")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("email-error");
    var emailRegex = /^[a-zA-Z0-9._%+-]+@laplateforme\.io$/;

    var emailValue = emailInput.value.trim();
    var isEmailValid = emailRegex.test(emailValue);

    var mdpInput = document.getElementById("motdepasse");
    var mdpError = document.getElementById("mdp-error");
    var mdpRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    var mdpValue = mdpInput.value.trim();
    var isPasswordValid = mdpRegex.test(mdpValue);

    if (isEmailValid && isPasswordValid) {
      window.location.href = "calendrier.html";
    } else {
      // Display error messages if email or password is invalid
      if (!isEmailValid) {
        emailError.style.display = "block";
      } else {
        emailError.style.display = "none";
      }
      if (!isPasswordValid) {
        mdpError.style.display = "block";
      } else {
        mdpError.style.display = "none";
      }
    }
  });