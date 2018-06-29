let objeto = {};
objeto.nome = "Ereshkigal";
objeto.idade = "1000";
objeto.vivo = false;

console.log(`Objeto criado: ${objeto}`);

objeto.preferencias = ['flores', 'viajar'];

objeto.humor = 'peculiar';

console.log(`Tipo do objeto: ${typeof(objeto)}`);

// Método que recebe uma variável qualquer e transforma num texto com formato JSON
let objetoJSON = JSON.stringify(objeto);

console.log(`JSON.stringify: ${objetoJSON}`);

// Método que transforma JSON num objeto js
let novoObjeto = JSON.parse(objetoJSON);

console.log(`JSON.parse: ${novoObjeto}`);