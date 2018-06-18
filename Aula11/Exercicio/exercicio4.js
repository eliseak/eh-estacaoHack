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

for (let menino of meninos){
    for (let menina of meninas){
        console.log(`Par: ${menina} e ${menino}`);
    }
}