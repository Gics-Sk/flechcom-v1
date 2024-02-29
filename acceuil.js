document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 20) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
});




document.addEventListener("DOMContentLoaded", function () {
    var voirPlusBtn = document.getElementById('voirPlusBtn');

    voirPlusBtn.addEventListener('click', function () {
        // Sélectionnez toutes les cartes cachées et montrez-les
        var hiddenCards = document.querySelectorAll('.hidden-card');
        hiddenCards.forEach(function (card) {
            card.style.display = 'block';
        });

        // Masquez le bouton "Voir Plus" une fois toutes les cartes affichées
        voirPlusBtn.style.display = 'none';
    });
});
function afficherPlus() {
    // Récupérer toutes les cartes cachées
    var cartesCachees = document.querySelectorAll('.hide-card');

    // Afficher chaque carte cachée
    cartesCachees.forEach(function (carte) {
        carte.classList.remove('hide-card');
    });
}