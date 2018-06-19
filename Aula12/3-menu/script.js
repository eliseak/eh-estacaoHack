const menu = document.querySelector("aside");
const botao = document.querySelector("img");

function deslizar(){
    if (menu.classList.contains("active"))
        menu.classList.remove("active");
    else
        menu.classList.add("active");
}

botao.onclick = deslizar;