const header = document.querySelector("header");
const menu = document.querySelector('#menu-icon');
const navlist = document.querySelector('.navlist');
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    // Tornar o cabeçalho "sticky"
    header.classList.toggle("sticky", window.scrollY > 120);

    // Esconder ou mostrar o cabeçalho ao rolar
    let currentScroll = window.scrollY || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Rolando para baixo
        header.classList.add("hide-header");
    } else {
        // Rolando para cima
        header.classList.remove("hide-header");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Controlar o comportamento do menu quando clicado
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

// Fechar o menu ao rolar
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}
