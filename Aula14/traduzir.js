let dicionario = {
    'letargia': 'estado de sono profundo que se assemelha ao coma',
    'comitar': 'comer e vomitar ao mesmo tempo',
    'sapão': 'homi provido de beleza e gostosura (ou sapo grande)',
    'poc': 'proof of concept (prova de conceito) ou não',
    
};

let palavra = process.argv[2];

let traducao = dicionario[palavra];

if (traducao == undefined)
    console.log('Palavra não está no dicio!');
else
    console.log(traducao);
// node traduzir.js "comitar"
