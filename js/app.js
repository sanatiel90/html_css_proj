var btAlternador = document.querySelector('.js-botao-chaveador');

btAlternador.onclick = function(){
    var menu = document.querySelector('.js-menu');
    menu.classList.toggle('menu--exibindo');
}