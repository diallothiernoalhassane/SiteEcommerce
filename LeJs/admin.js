// Initialisation de la liste produits dans localStorage si absente
if (!localStorage.getItem("produits")) {
  const listeDefaut = [
    {id:1, titre:"Chemise1", prix:50000, image:'../img/img1.jpg', categorie: "chemises"},
    {id:2, titre:"Chemise2", prix:50000, image:'../img/img2.jpg', categorie: "chemises"},
    {id:3, titre:"Chemise3", prix:75000, image:'../img/img3.jpg', categorie: "chemises"},
    {id:4, titre:"Chemise4", prix:75000, image:'../img/img4.jpg', categorie: "chemises"},
    {id:5, titre:"Chemise5", prix:60000, image:'../img/img5.jpg', categorie: "chemises"},
    {id:6, titre:"Chemise6", prix:60000, image:'../img/img6.jpg', categorie: "chemises"},
    {id:7, titre:"Chemise7", prix:30000, image:'../img/img7.jpg', categorie: "chemises"},
    {id:8, titre:"Chemise8", prix:30000, image:'../img/img8.jpg', categorie: "chemises"},
    {id:9, titre:"Chemise9", prix:50000, image:'../img/img9.jpg', categorie: "chemises"},
    {id:11, titre:"Chemise11", prix:60000, image:'../img/img11.jpg', categorie: "chemises"},

    {id:12, titre:"Pentalons1", prix:60000, image:'../img/pent1.jpg', categorie: "pentalons"},
    {id:13, titre:"Pentalons2", prix:60000, image:'../img/pent2.jpg', categorie: "pentalons"},
    {id:14, titre:"Pentalons3", prix:60000, image:'../img/pent3.jpg', categorie: "pentalons"},
    {id:15, titre:"Pentalons4", prix:60000, image:'../img/pent5.jpg', categorie: "pentalons"},
    {id:17, titre:"Pentalons6", prix:60000, image:'../img/pent6.jpg', categorie: "pentalons"},
    {id:18, titre:"Pentalons7", prix:60000, image:'../img/pent7.jpg', categorie: "pentalons"},
    {id:19, titre:"Pentalons8", prix:60000, image:'../img/pent8.jpg', categorie: "pentalons"},
    {id:20, titre:"Pentalons9", prix:60000, image:'../img/pent9.jpg', categorie: "pentalons"},
    {id:21, titre:"Pentalons10", prix:60000, image:'../img/pent10.jpg', categorie: "pentalons"},
    {id:22, titre:"Pentalons11", prix:60000, image:'../img/pent11.jpg', categorie: "pentalons"},

    {id:23, titre:"Robes1", prix:60000, image:'../img/rob1.jpg', categorie: "robes"},
    {id:24, titre:"Robes1", prix:60000, image:'../img/rob2.jpg', categorie: "robes"},
    {id:25, titre:"Robes1", prix:60000, image:'../img/rob4.jpg', categorie: "robes"},
    {id:27, titre:"Robes1", prix:60000, image:'../img/rob5.jpg', categorie: "robes"},
    {id:28, titre:"Robes1", prix:60000, image:'../img/rob6.jpg', categorie: "robes"},
    {id:29, titre:"Robes1", prix:60000, image:'../img/rob7.jpg', categorie: "robes"},
    {id:30, titre:"Robes1", prix:60000, image:'../img/rob8.jpg', categorie: "robes"},
    {id:31, titre:"Robes1", prix:60000, image:'../img/rob9.jpg', categorie: "robes"},
    {id:32, titre:"Robes1", prix:60000, image:'../img/rob10.jpg', categorie: "robes"},
    {id:33, titre:"Robes1", prix:60000, image:'../img/rob11.jpg', categorie: "robes"},

    {id:34, titre:"Jacket1", prix:60000, image:'../img/jack1.jpg', categorie: "jackets"},
    {id:35, titre:"Jacket1", prix:60000, image:'../img/jack2.jpg', categorie: "jackets"},
    {id:36, titre:"Jacket1", prix:60000, image:'../img/jack3.jpg', categorie: "jackets"},
    {id:37, titre:"Jacket1", prix:60000, image:'../img/jack4.jpg', categorie: "jackets"},
    {id:38, titre:"Jacket1", prix:60000, image:'../img/jack5.jpg', categorie: "jackets"},
    {id:39, titre:"Jacket1", prix:60000, image:'../img/jack6.jpg', categorie: "jackets"},
    {id:40, titre:"Jacket1", prix:60000, image:'../img/jack7.jpg', categorie: "jackets"},
    {id:41, titre:"Jacket1", prix:60000, image:'../img/jack8.jpg', categorie: "jackets"},
    {id:42, titre:"Jacket1", prix:60000, image:'../img/jack9.jpg', categorie: "jackets"},
    {id:43, titre:"Jacket1", prix:60000, image:'../img/jack10.jpg', categorie: "jackets"},
  ];
  localStorage.setItem("produits", JSON.stringify(listeDefaut));
}

let produits = JSON.parse(localStorage.getItem("produits"));

// Affiche la liste des produits dans l'admin
function afficherProduitsAdmin() {
  const container = document.getElementById("admin-produits");
  container.innerHTML = "";

  produits.forEach((prod, index) => {
    const div = document.createElement("div");
    div.classList.add("admin-produit");
    div.innerHTML = `
      <img src="${prod.image}" width="80" /><br>
      <strong>${prod.titre}</strong><br>
      ${prod.prix} GNF<br>
      <em>${prod.categorie}</em><br>
      <button onclick="modifierProduit(${index})" class="btnModif">Modifier</button>
      <button onclick="supprimerProduit(${index}) "class="btn">Supprimer</button>
    `;
    container.appendChild(div);
  });
}

// Ajouter un nouveau produit via formulaire
const formAjout= document.getElementById("form-ajout")
  formAjout.addEventListener("submit", (e) => {
  e.preventDefault();

  const titre = document.getElementById("titre").value.trim();
  const prix = parseInt(document.getElementById("prix").value);
  const image = document.getElementById("image").value.trim();
  const categorie = document.getElementById("categorie").value.trim();

  if (!titre || !prix || !image || !categorie) {
    alert("Veuillez remplir tous les champs !");
    return;
  }

  const nouveauProduit = {
    id: Date.now(),
    titre,
    prix,
    image,
    categorie
  };

  produits.push(nouveauProduit);
  localStorage.setItem("produits", JSON.stringify(produits));
  afficherProduitsAdmin();
  e.target.reset();

});

// Supprimer un produit
function supprimerProduit(index) {
  if (confirm("Confirmer la suppression ?")) {
    produits.splice(index, 1);
    localStorage.setItem("produits", JSON.stringify(produits));
    afficherProduitsAdmin();
  }
}

// Modifier un produit (avec prompt simple)
function modifierProduit(index) {
  const prod = produits[index];
  const titre = prompt("Titre :", prod.titre);
  const prix = parseInt(prompt("Prix :", prod.prix));
  const image = prompt("Lien image :", prod.image);
  const categorie = prompt("Catégorie :", prod.categorie);

  if (!titre || !prix || !image || !categorie) {
    alert("Modification annulée : champs invalides");
    return;
  }

  produits[index] = {
    ...prod,
    titre,
    prix,
    image,
    categorie
  };

  localStorage.setItem("produits", JSON.stringify(produits));
  afficherProduitsAdmin();
}

// Appel initial pour afficher la liste
afficherProduitsAdmin();
