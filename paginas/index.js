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
var itemProjetos = document.getElementsByClassName('item-projeto')

function mudarModo() {
    if (fundo.className == 'modo-claro') {
        fundo.className = 'modo-escuro'
        lua.style.background = 'white'
        itemProjetos.style.background =  '#9c9c9c'
    } else {        
        fundo.className = 'modo-claro'
        lua.style.background = '#9c9c9c'
        itemProjetos.style.backgroundColor =  'white'
    }


}