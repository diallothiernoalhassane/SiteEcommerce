// La barre de navigation et le menu //
//-----------------------------------//
const searchContainer = document.querySelector(".search-container");
const btnSearch = document.querySelector("#search-icon");
const header = document.querySelector(".nav");

btnSearch.addEventListener("click", () => {
  searchContainer.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.style.boxShadow = "0 4px 8px";
    header.style.backgroundColor = "burlywood";
  } else {
    header.style.boxShadow = "";
    header.style.backgroundColor = "";
  }
});

// BurgerMenu
const burgerBtn = document.getElementById("burger-menu");
const navigation = document.querySelector(".navigation");

burgerBtn.addEventListener("click", () => {
  navigation.classList.toggle("active");
});

// Le script du panier:
let panier = JSON.parse(localStorage.getItem("panier")) || [];

function afficherPanier() {
  const container = document.getElementById("contenu-panier");
  container.innerHTML = "";

  if (panier.length === 0) {
    container.innerHTML = "<p>Votre panier est vide.</p>";
    document.getElementById("total").textContent = "Total: 0 GNF";
    return;
  }

  panier.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "item-panier";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.titre}" />
      <strong><p>${item.titre}</p></strong>
      <div class="quantite-control">
        <button class="moins" data-index="${index}">−</button>
        <input type="number" value="${item.quantite}" min="1" data-index="${index}" class="quantite" />
        <button class="plus" data-index="${index}">+</button>
      </div>
      <span class="prix">${item.prix} €</span>
      <button class="supprimer" data-index="${index}"><p>Supprimer</p></button>
    `;
    container.appendChild(div);
  });

  calculerTotal();
}

function calculerTotal() {
  const total = panier.reduce((somme, item) => somme + item.prix * item.quantite, 0);
  document.getElementById("total").textContent = `Total: ${total.toFixed(2)} €`;
}

// Supprimer un produit
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".supprimer");
  if (btn) {
    const index = btn.dataset.index;
    panier.splice(index, 1);
    localStorage.setItem("panier", JSON.stringify(panier));
    afficherPanier();
  }
});

// Modifier la quantité via input
document.addEventListener("input", function (e) {
  if (e.target.classList.contains("quantite")) {
    const index = e.target.dataset.index;
    let nouvelleQuantite = parseInt(e.target.value);
    if (isNaN(nouvelleQuantite) || nouvelleQuantite < 1) {
      nouvelleQuantite = 1;
      e.target.value = 1;
    }
    panier[index].quantite = nouvelleQuantite;
    localStorage.setItem("panier", JSON.stringify(panier));
    calculerTotal();
  }
});

// Modifier la quantité via + / −
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("plus") || e.target.classList.contains("moins")) {
    const index = e.target.dataset.index;
    if (e.target.classList.contains("plus")) {
      panier[index].quantite++;
    } else if (panier[index].quantite > 1) {
      panier[index].quantite--;
    }
    localStorage.setItem("panier", JSON.stringify(panier));
    afficherPanier();
  }
});

afficherPanier();
