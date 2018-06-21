// FileSystem
const fs = require('fs');

let texto = process.argv[2];

// write(nomeDoAquivo, texto, callback)
// Callback = função chamado depois de uma ação (writefile)
fs.writeFile('teste.txt', texto, (error) => {
    if (error){
        console.log('Houve um erro ao gravar o arquivo.');
    }else{
        console.log('Arquivo gravado!');
    }

})