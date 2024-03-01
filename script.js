// SCRIPT POUR RENDRE LE MOT DE PASSE VISIBLE OU INVISIBLE

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password1");
    var icon = document.querySelector('.password-toggle i');

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = "password";
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

function togglePasswordVisibility1() {
    var passwordInput = document.getElementById("password1");
    var icon = document.querySelector('.password-toggle i');

    if (passwordInput.type === "password1") {
        passwordInput.type = "text";
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = "password1";
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}
function togglePasswordVisibility2() {
    var passwordInput = document.getElementById("password2");
    var icon = document.querySelector('.password-toggle i');

    if (passwordInput.type === "password2") {
        passwordInput.type = "text";
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = "password2";
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// SCRIPT POUR LA NAVBAR TOOGLE COULISSANT DE DROITE
document.querySelector('.navbar-toggler').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('show');
});
document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');
    var closeBtn = document.querySelector('.close-btn');

    navbarToggler.addEventListener('click', function () {
        document.body.classList.toggle('show-navbar');
    });

    closeBtn.addEventListener('click', function () {
        document.body.classList.remove('show-navbar');
    });
});




