/*
    Crie duas listas no script, uma de meninos e uma de meninas.
    Exemplo: let meninos = ["João", "José", "Júlio"]
    Como as festas juninas estão chegando, 
    os meninos e as meninas vão formar duplas para dançar quadrilha.

    Use console.log para mostrar no console TODAS as duplas possíveis
    entre meninos e meninas.

*/

let meninos = ["Akira", "Kaito", "Kei"];
let meninas = ["Maria", "Milena", "Mônica"];

let i = 0;
let j = 0;
while (i < meninos.length){
    while (j < meninas.length){
        console.log(`Par: ${meninas[j]} e ${meninos[i]}`);
        j++;
    }
    j = 0;
    i++;
}