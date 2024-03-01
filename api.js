document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');


    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Empêche le formulaire de se soumettre normalement

        const password1 = document.getElementById('password1').value;
        const password2 = document.getElementById('password2').value;

        // Vérifier si les mots de passe correspondent
        if (password1 !== password2) {
            // Afficher un message d'erreur si les mots de passe ne correspondent pas
            alert("Les mots de passe ne correspondent pas");
            return;
        }
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Empêche le formulaire de se soumettre normalement

        const formData = {
            name:document.getElementById('name').value,
            username: document.getElementById('username').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('Email').value,
            password: document.getElementById('password1').value,
            
            

            // Ajoutez d'autres champs si nécessaire
        };

        // Effectuez une requête POST vers votre endpoint avec les données de formulaire
        fetch('https://event-management-5cp7.onrender.com/users/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la requête');
            }
            return response.json();
        })
        .then(data => {
            // Traitez la réponse de votre serveur ici, par exemple, redirigez l'utilisateur vers une page de succès ou affichez un message de réussite
            console.log('Compte Creer avec succès', data);
            window.location.href = 'success.html'; // Redirige vers une page de succès
        })
        .catch(error => {
            console.error('Erreur:', error);
            // Gérez les erreurs ici, par exemple, affichez un message d'erreur à l'utilisateur
        });
    });
});

