let tempo = Number(prompt("Digite quantos segundos você quer:"));

const body = document.querySelector("body");
const cronometro = document.querySelector("#temporizador");
let idIntervalo;

cronometro.innerHTML = tempo;

function trocarFundo(){
    let cor1 = gerarNumeroAleatorio(0, 255);
    let cor2 = gerarNumeroAleatorio(0, 255);
    let cor3 = gerarNumeroAleatorio(0, 255);
    body.style.backgroundColor = `rgb(${cor1},${cor2},${cor2})`;
}
    
function gerarNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max-min+1)) + min;
}

function diminuir(){
    tempo--;
    cronometro.innerHTML = tempo;

    if (tempo === 0)
        clearInterval(idIntervalo);
        setInterval(trocarFundo, 1000);
}

idIntervalo = setInterval(diminuir, 1000);
