// Lê arquivos externos
const dicionario = require('./dicionario.json');

let palavra = process.argv[2];

if (palavra === 'listar tudo'){
    console.log(dicionario);
}
else{
    let traducao = dicionario[palavra];

    if (traducao === undefined)
        console.log('Palavra não está no dicio');
    else
        console.log(traducao);
}
// node traduzir.js "comitar"
