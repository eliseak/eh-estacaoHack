// Query selector com CONST
// FUNÇÕES
// ATRIBUIÇÕES
let certo = document.querySelector("#certo");
let errado = document.querySelector("#errado");

function gatoErrado(){
    alert("GATO ERRADO, CLIQUE NO OUTRO GATO");
}

function gatoCerto(){
    certo.src = "http://placekitten.com/300/300"
    alert("PARABÉNS, VOCÊ CLICOU NO GATO CERTO. ELE TE MORDEU E FOI EMBORA. MAS VEIO OUTRO");

}

errado.onclick = gatoErrado;
certo.onclick = gatoCerto;


/*alert("Bem vindo à página dos dois gatos!!")

let titulo = document.querySelector("#titulo");

titulo.classList.add("bemGrande");

console.log("Classe do HTML adicionada com sucesso!");

*/