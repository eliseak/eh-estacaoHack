const Excel = require("exceljs");

// Arquivo a ser transformado
const arquivo = require("./arquivo.json");

let workbook = new Excel.Workbook();

let sheet = workbook.addWorksheet(arquivo.titulo);