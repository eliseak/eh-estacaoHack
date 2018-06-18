// WHILE - repetição de código
let i = 1;

while (i <= 10){
    console.log(i);
    i++;
}

// FOR - contadores

for (let i = 1; i <= 10; i++){
    console.log(i);
}

// FOR para melhorar a iteração de listas (2015)
// "for of" e "for in"

let lista = ["James", "Nomes", "Wolfgang", "Golfinho", "Jurupinga", "Nomi", "Cleide", "Tainá"];

// for in
for (let item in lista){
    console.log(item);
}