
function A(a, b, c){
    return a + b + c;
}

function B(a){
    return a * 2;
}

let lista = [];

lista.push(A);

console.log(A(1,2,3));

console.log(lista[0](1, 2, 3));