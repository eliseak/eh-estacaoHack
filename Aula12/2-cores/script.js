const quadradinhos = document.querySelectorAll(".quadradinho");
const cores = ["blue", "yellow", "red", "green"];
const h1 = document.querySelector("h1");


function encerrar(){
    for (let quadradinho of quadradinhos){
        quadradinho.classList.add("escondido");
    }

    h1.style.color = quadradinhos[0].style.backgroundColor;
    h1.classList.remove("escondido");
}

function gerarNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max-min+1)) + min;
}

function trocarCor(){
    let cor = gerarNumeroAleatorio(0,3);

    this.style.backgroundColor = cores[cor];

    verificarFim();
}

function verificarFim(){
    let cor = [];
    for (let i = 0; i < quadradinhos.length; i++){
        cor[i] = quadradinhos[i].style.backgroundColor;
    }

    if (cor[0] === cor[1] && cor[1] === cor[2] && cor[2] === cor[3]){
        for (let quadradinho of quadradinhos){
            quadradinho.onmouseenter = null;
        }

        setInterval(encerrar, 500);
        
    }

}

for (let quadradinho of quadradinhos)
    quadradinho.onmouseenter = trocarCor;