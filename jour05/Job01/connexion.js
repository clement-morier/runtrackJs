$(document).ready(function() {
    $('#connexion-form').submit(function(event) {
        event.preventDefault();
        $('#error-messages').empty();
        var email = $('#email').val();
        if (!isValidEmail(email)) {
            $('#error-messages').append('<p>Email invalide.</p>');
        }
        var password = $('#password').val();
        if (password.length < 8) {
            $('#error-messages').append('<p>Le mot de passe doit contenir au moins 8 caractères.</p>');
        }
    });
});
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}