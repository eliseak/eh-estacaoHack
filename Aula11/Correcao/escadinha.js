/* Correção do exercício 3 da aula */

let tamanho = Number(prompt("Qual o tamanho da escadinha?"));
let contador = 0;
let escadinha = "";

let degrau = prompt("Digite o modelo de degrau");

while (contador < tamanho){
    escadinha = escadinha + degrau;
    console.log(escadinha);
    contador++;
}