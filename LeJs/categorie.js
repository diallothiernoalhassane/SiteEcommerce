// La barre de navigation et le menu//
//---------------------------------//

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

// Données par catégorie //
//---------------------------------//
const categories = {
    chemises: [
        { id: 4, titre: "chemise", image: "../img/img4.jpg" },
        { id: 1, titre: "chemise", image: "../img/img1.jpg" },
        { id: 2, titre: "chemise", image: "../img/img2.jpg" },
        { id: 3, titre: "chemise",  image: "../img/img3.jpg" },
        { id: 5, titre: "chemise", image: "../img/img5.jpg" },
    ],
    pentalons: [
        { id: 1, titre: "Pantalon", image: "../img/pent1.jpg" },
        { id: 2, titre: "Pantalon", image: "../img/pent2.jpg" },
        { id: 3, titre: "Pantalon", image: "../img/pent3.jpg" },
        { id: 4, titre: "Pantalon", image: "../img/pent4.jpg" },
        { id: 5, titre: "Pantalon", image: "../img/pent5.jpg" },
    ],
    robes: [
        { id: 1, titre: "Robes", image: "../img/rob1.jpg" },
        { id: 2, titre: "Robes", image: "../img/rob2.jpg" },
        { id: 3, titre: "Robes", image: "../img/rob3.jpg" },
        { id: 4, titre: "Robes", image: "../img/rob4.jpg" },
        { id: 5, titre: "Robes", image: "../img/rob5.jpg" },
    ],
    jackets: [
        { id: 1, titre: "Jacket", image: "../img/jack1.jpg" },
        { id: 2, titre: "Jacket", image: "../img/jack2.jpg" },
        { id: 3, titre: "Jacket", image: "../img/jack3.jpg" },
        { id: 3, titre: "Jacket", image: "../img/jack4.jpg" },
        { id: 3, titre: "Jacket", image: "../img/jack5.jpg" },
    ]
};
// Fonction pour créer les sliders
function afficherProduits(categorie, produits) {
    const container = document.getElementById("categories");

    const section = document.createElement("section");
    section.className = `cat-section`;

    section.innerHTML = `
        <h2>Catégorie <span>${categorie}</span></h2>
        <div class="swiper ${categorie}-swiper">
            <div class="swiper-wrapper">
                ${produits.map(prod => `
                    <div class="swiper-slide box">
                        <img src="${prod.image}" alt="${prod.titre}" />
                        <div class="info">
                            <strong>${prod.titre}</strong><br>
                            <a href="../LeHtml/produit.html#${categorie}" class="btn">Voir plus</a>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    container.appendChild(section);

    // Initialiser Swiper pour cette catégorie
    new Swiper(`.${categorie}-swiper`, {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });
}

// Appel pour chaque catégorie
Object.entries(categories).forEach(([nom, produits]) => {
    afficherProduits(nom, produits);
});
