// FOR para melhorar a iteração de listas (2015)
// "for of" e "for in"

let lista = ["James", "Nomes", "Wolfgang", "Golfinho", "Jurupinga", "Nomi", "Cleide", "Tainá"];

// for in - percorre a lista e item retorna os ÍNDICES da lista
console.log("- For IN");
for (let item in lista){
    console.log(`${item}: ${lista[item]}`);
}

console.log("");

// for in - também funciona para OBJETOS >> Percorre o nome dos atributos
let cliente = {
    nome: "Renan",
    idade:28,
    vivo:true
}

console.log("OBJETO: cliente");
for (let atributo in cliente){
    console.log(`${atributo}: ${cliente[atributo]}`);
}

console.log("");

// for of - percorre a lista e item retorna os valores da lista
console.log("- For OF");

for (let item of lista){
    console.log(`${item}`);

}

//for of - não funciona para objetos, é exclusivo para listas