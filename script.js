console.log("Le script JavaScript est chargé !");
document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    if (heading) {
        heading.style.cursor = 'pointer';
        heading.addEventListener('click', () => {
            alert('Vous avez cliqué sur le titre !');
        });
    }
});