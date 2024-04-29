$(document).ready(function() {
    $('#inscription-form').submit(function(event) {
        event.preventDefault();
        $('#error-messages').empty();
        var email = $('#email').val();
        if (!isValidEmail(email)) {
            $('#error-messages').append('<p>Email invalide.</p>');
        }

        // Validate password length
        var password = $('#password').val();
        if (password.length < 8) {
            $('#error-messages').append('<p>Le mot de passe doit contenir au moins 8 caractères.</p>');
        }

        // Validate password confirmation
        var confirmPassword = $('#confirm-password').val();
        if (password !== confirmPassword) {
            $('#error-messages').append('<p>Les mots de passe ne correspondent pas.</p>');
        }

        // Validate password complexity
        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            $('#error-messages').append('<p>Le mot de passe doit contenir au moins 8 caractères, une lettre minuscule, une lettre majuscule et un chiffre.</p>');
        }

        // Validate first name length
        var firstName = $('#prenom').val();
        if (firstName.trim().length < 2) {
            $('#error-messages').append('<p>Le prénom doit contenir au moins 2 caractères.</p>');
        }

        // Validate last name length
        var lastName = $('#nom').val();
        if (lastName.trim().length < 2) {
            $('#error-messages').append('<p>Le nom doit contenir au moins 2 caractères.</p>');
        }

        // Additional validations for other fields can be added similarly
    });
});