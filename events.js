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

// Sélectionnez tous les boutons de filtre
const filterButtons = document.querySelectorAll('.filter-buttons button');

// Parcourir tous les boutons de filtre
filterButtons.forEach(button => {
    // Ajoutez un gestionnaire d'événements click à chaque bouton
    button.addEventListener('click', function(event) {
        // Empêcher le comportement par défaut du bouton
        event.preventDefault();
        
        // Supprimer la classe active de tous les boutons
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Ajouter la classe active uniquement au bouton cliqué
        this.classList.add('active');
    });
});

