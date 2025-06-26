console.log("Le script JavaScript est bien chargé !");

// Simple interaction: un message d'alerte quand on clique sur le titre H1
document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    if (heading) {
        heading.style.cursor = 'pointer'; // Changer le curseur pour indiquer que c'est cliquable
        heading.addEventListener('click', () => {
            alert('Bienvenue ! Vous avez cliqué sur le titre !');
        });
    }
});