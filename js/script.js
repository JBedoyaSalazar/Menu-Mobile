const menuToggle = document.querySelector('.toggle')
const navegation = document.querySelector('.navigation')

menuToggle.onclick = function () {
    menuToggle.classList.toggle('active')
    navegation.classList.toggle('active')
}
