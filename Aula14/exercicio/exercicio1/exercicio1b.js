const Excel = require("exceljs");

// Arquivo a ser transformado
const arquivo = require("./cliente.json");

let workbook = new Excel.Workbook();
let sheet = workbook.addWorksheet(arquivo.titulo);

sheet.columns = [
    { header: 'ID', key: 'id'},
    { header: 'Nome', key: 'name'},
    { header: 'Email', key: 'email'},
    { header: 'Cidade', key: 'city'},
];

for (let col of sheet.columns){
    col.width = 30;
}

sheet.addRows(arquivo);

workbook.xlsx.writeFile("Clientes.xlsx").then(function() {
    
    console.log("Arquivo salvo!");
  });

