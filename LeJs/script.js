const header = document.querySelector(".nav")
const searchContainer = document.querySelector(".search-container")
const btnSearch = document.querySelector("#search-icon")

btnSearch.addEventListener("click",()=>{
    searchContainer.classList.toggle("active")
})
// Le scroll
window.addEventListener("scroll",(e)=>{
    searchContainer.classList.remove("active")

})

// Le sytle de la navigation partie accueil:
header.style.backgroundColor = "burlywood"
header.style.boxShadow = "2px 2px 10px 2px"

// Le menu burger:
const burgerBtn = document.getElementById('burger-menu');
const navigation = document.querySelector('.navigation')

burgerBtn.addEventListener('click',()=>{
    navigation.classList.toggle('active')
})
