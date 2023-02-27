//.cabecera__lista li::after .cabecera__menu{

const cabeceraLista = document.querySelector(".cabecera__lista");
const menu = document.querySelector(".cabecera__menu");
const cabeceraItem = document.querySelector(".cabecera__item");

cabeceraItem.addEventListener("click", function (){
    menu.style.display("none");
});

