/* Correção do exercício 3 da aula */

let tamanho = Number(prompt("Qual o tamanho da escadinha?"));
let contador = 0;
let escadinha = "";

while (contador < tamanho){
    escadinha = escadinha + "#";
    console.log(escadinha);
    contador++;
}