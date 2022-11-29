let menuHamburger = document.querySelector(".burger");
let menuM = document.querySelector(".menuMobile")

function clickmenu() {

    if (menuM.style.display == 'flex') {
        menuM.style.display = 'none';
    } else {
        menuM.style.display = 'flex';
    }
}

var botaoEscuro = document.getElementById('botaoEscuro')
var fundo = document.getElementById('escuro')
var lua = document.getElementById('lua')

function mudarModo() {
    console.log(itemProjeto)
    if (fundo.className == 'modo-claro') {
        fundo.className = 'modo-escuro'
        lua.style.background = 'white'
    } else {        
        fundo.className = 'modo-claro'
        lua.style.background = '#9c9c9c'
    }


}