
// Assinatura: função nomeFunção (argumentos){ código }
// Paramêtros: valor que preenche o argumento >> nomeFuncao(parametros)

// function sorteio(minimo=10, maximo=20) { 
//>> define valores padrões para os argumentos quando não é informado na chamada

function sorteio(minimo = 0, maximo = 10) {
    let aleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    return aleatorio;
}

let numero1 = sorteio();
let numero2 = sorteio(0, 50);
let numero3 = sorteio(15, 55);

// // Math.floor sempre arredonda para baixo
// let numero1 = Math.floor(Math.random() * 11);
// let numero1 = Math.floor(Math.random() * 11);
// let numero2 = Math.floor(Math.random() * 51);
// let numero3 = Math.floor(Math.random() * 22) + 15;

console.log(numero1, numero2, numero3);