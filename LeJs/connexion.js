document.getElementById('form-ajout').addEventListener('submit',(e)=>{
    e.preventDefault();

    const nom = document.getElementById('nom').value.trim();
    const mail = document.getElementById('mail').value.trim();
    const pwd = document.getElementById('pwd').value;

    // Vérification s un champ est vide
    if(!nom || !mail || !pwd){
        alert("Veuillez remplir tous les champs !");
        return;
    }

    // Identifiants valides:
    const identifiantsValides = {
        nom: "diallothiernoalhassane",
        mail: "diallothiernoalhassane@gmail.com",
        motDePasse: "Diallo2233alhassane"
    };

    // Vérification des identifiants:
    if(
        nom === identifiantsValides.nom &&
        mail === identifiantsValides.mail &&
        pwd === identifiantsValides.motDePasse
    ){
        alert("Connexion réussie !");
        window.location.href = "../LeHtml/admin.html"; //Rédirection vers la page addministrateur

    } else{
        alert("Identifiants incorrects !");
    }
});
