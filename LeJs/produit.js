// Ajout des produits:

// // Function Afficher produits:

// function afficheProduits() {
//   const produitsDiv = document.getElementById("produits");
//   produitsDiv.innerHTML = "";

//   const categories = [...new Set(produits.map(p => p.categorie))];

//   categories.forEach(categorie => {
//     const section = document.createElement("section");
//     section.id = categorie.toLowerCase(); // IMPORTANT : permet le scroll vers cette section via l'ancre URL

//     // Titre de la catégorie:
//     const titre = document.createElement("h3");
//     titre.textContent = `Catégorie  ${categorie}`;
//     titre.classList.add("titre-categorie"); // c'est ici que tu ajoutes la classe
//     section.appendChild(titre);
//     const container = document.createElement("div");
//     container.className = "categorie-container";

//     produits
//       .filter(p => p.categorie === categorie)
//       .forEach(prod => {
//         const div = document.createElement("div");
//         div.innerHTML = `
//           <img src="${prod.image}" width="80" class="imag"><br>
//           <div style="color: gold;">
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-regular fa-star"></i>
//           </div>
//           <strong>${prod.titre}</strong><br>
//           ${prod.prix} €<br>
//           <button onclick="ajoutePanier(${prod.id})" class="btn">Ajouter au panier</button>
//         `;
//         container.appendChild(div);
//       });

//     section.appendChild(container);
//     produitsDiv.appendChild(section);
//   });
// }
// // Appel de la fonction:
// afficheProduits()

// Le parcours entre les pages:
const hash = window.location.hash;
const categorie = hash ? hash.substring(1) : null;

// La barre de navigation et le menu//
const searchContainer = document.querySelector(".search-container")
const btnSearch = document.querySelector("#search-icon")
const header = document.querySelector(".nav")

btnSearch.addEventListener("click",()=>{
    searchContainer.classList.toggle("active")
})

// Le scroll
window.addEventListener("scroll",(e)=>{
    searchContainer.classList.remove("active")
})

window.addEventListener("scroll",()=>{
    if(window.scrollY > 0){
        header.style.boxShadow = "0 4px 8px"
        header.style.backgroundColor = "burlywood"
    }else{
        header.style.boxShadow = ""
        header.style.backgroundColor = ""
    }
})

// BurgerMenu:
const burgerBtn = document.getElementById('burger-menu');
const navigation = document.querySelector('.navigation')

burgerBtn.addEventListener('click',()=>{
    navigation.classList.toggle('active')
})

// Liste des produits
const produits =JSON.parse(localStorage.getItem("produits")) || [
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

if (!localStorage.getItem("produits")) {
  localStorage.setItem("produits", JSON.stringify(produits));
}

// Fonction pour afficher les produits
function afficheProduits() {
  const produitsDiv = document.getElementById("produits");
  produitsDiv.innerHTML = "";

  const hash = window.location.hash;
  const categorieActive = hash ? hash.substring(1) : null;

  const categories = categorieActive
    ? [categorieActive]
    : [...new Set(produits.map(p => p.categorie))];

  categories.forEach(categorie => {
    const section = document.createElement("section");
    section.id = categorie.toLowerCase();

    const titre = document.createElement("h3");
    titre.textContent = `Catégorie  ${categorie}`;
    titre.classList.add("titre-categorie");
    section.appendChild(titre);

    const container = document.createElement("div");
    container.className = "categorie-container";

    produits
      .filter(p => p.categorie === categorie)
      .forEach(prod => {
        const div = document.createElement("div");
        div.classList.add("produit"); // pour le style CSS

        div.innerHTML = `
          <img src="${prod.image}" width="80" class="imag"><br>
          <strong>${prod.titre}</strong><br>
          ${prod.prix} GNF<br>
          
          <div class="etoiles">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
          </div>
          
           <!-- Le header: <div class="etoiles">
              ★ ★ ★ ★ ☆
          </div> -->
          <button onclick="ajoutePanier(${prod.id})" class="btn">Ajouter au panier</button>
        `;
        container.appendChild(div);
      });

    section.appendChild(container);
    produitsDiv.appendChild(section);
  });
}

// Fonction pour ajouter un produit au panier (localStorage clé = "panier")
function ajoutePanier(id) {
  const panier = JSON.parse(localStorage.getItem("panier")) || [];
  const produits = JSON.parse(localStorage.getItem("produits")) || [ /* ta liste par défaut */ ];
  const product = produits.find(p => p.id === id);
  const existing = panier.find(p => p.id === id);

  if (existing) {
    existing.quantite += 1;
  } else {
    panier.push({ ...product, quantite: 1 });
  }

  localStorage.setItem("panier", JSON.stringify(panier));
  alert("Produit ajouté !");
}

// Appel initial pour afficher les produits
afficheProduits();



// La recherche d'un produit:
// nouvelle fonction pour afficher un tableau donné (ex : filtré)
function afficheProduitsFiltres(produitsAF) {
  const produitsDiv = document.getElementById("produits");
  produitsDiv.innerHTML = "";

  if (produitsAF.length === 0) {
    produitsDiv.textContent = "Aucun produit trouvé.";
    return;
  }

  const categories = [...new Set(produitsAF.map(p => p.categorie))];

  categories.forEach(categorie => {
    const section = document.createElement("section");
    section.id = categorie.toLowerCase();

    const titre = document.createElement("h3");
    titre.textContent = `Catégorie ${categorie}`;
    titre.classList.add("titre-categorie");
    section.appendChild(titre);

    const container = document.createElement("div");
    container.className = "categorie-container";

    produitsAF
      .filter(p => p.categorie === categorie)
      .forEach(prod => {
        const div = document.createElement("div");
        div.classList.add("produit");

        div.innerHTML = `
          <img src="${prod.image}" width="80" class="imag"><br>
          <strong>${prod.titre}</strong><br>
          ${prod.prix} GNF<br>
          <div class="etoiles">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
          </div>
          <button onclick="ajoutePanier(${prod.id})" class="btn">Ajouter au panier</button>
        `;
        container.appendChild(div);
      });

    section.appendChild(container);
    produitsDiv.appendChild(section);
  });
}

// gestion du filtre avec l'input recherche
const inputRecherche = document.getElementById("recherche");

inputRecherche.addEventListener("input", () => {
  const filtre = inputRecherche.value.toLowerCase();

  if(filtre.trim() === "") {
    afficheProduits(); // pas de filtre = affiche tout
    return;
  }

  const produitsFiltres = produits.filter(p =>
    p.titre.toLowerCase().includes(filtre)
  );

  afficheProduitsFiltres(produitsFiltres);
});

// au départ, affiche tout
afficheProduits();
