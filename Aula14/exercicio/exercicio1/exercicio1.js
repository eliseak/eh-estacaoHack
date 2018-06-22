const Excel = require("exceljs");

// Arquivo a ser transformado
const arquivo = require("./arquivo.json");

let workbook = new Excel.Workbook();
let sheet = workbook.addWorksheet(arquivo.titulo);

sheet.columns = [
    { header: 'Nome', key: 'nome'},
    { header: 'Idade', key: 'idade'},
    { header: 'Profissão', key: 'profissao'},
    { header: 'Força', key: 'FOR'},
    { header: 'Constituição', key: 'CON'},
    { header: 'Poder', key: 'POD'},
    { header: 'Destreza', key: 'DES'},
    { header: 'Aparência', key: 'APA'},
    { header: 'Tamanho', key: 'TAM'},
    { header: 'Inteligência', key: 'INT'},
    { header: 'Educação', key: 'EDU'}
];

for (let col of sheet.columns){
    col.width = 12;
}

sheet.addRows(arquivo.personagens);

workbook.xlsx.writeFile("Lista de Personagens.xlsx").then(function() {
    
    console.log("Arquivo salvo!");
  });

