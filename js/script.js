document.addEventListener("DOMContentLoaded", () => {
    // Partie 2 : Gestion de l'envoi du formulaire
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();  // Empêche le formulaire de se soumettre de manière traditionnelle

        // Récupérer les valeurs du formulaire
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Créer l'objet mailto avec les informations du formulaire
        const mailtoLink = `mailto:kevoppa@live.fr?subject=Message%20de%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0ADe: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}`;

        // Ouvrir l'application de messagerie
        window.location.href = mailtoLink;

        // Afficher une alerte pour confirmer l'envoi
        alert("Envoyé vers votre application de messagerie par défaut !");
        
        // Réinitialiser le formulaire après l'envoi
        form.reset();
    });
});
