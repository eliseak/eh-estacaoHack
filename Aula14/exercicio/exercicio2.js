const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Envie titulo e texto num JSON para ser gravado!");
})

app.post("/", (req, res) => {
    let titulo = req.body.titulo + ".txt";
    let texto = req.body.texto;

    if (titulo !== undefined && texto !== undefined){
        gravar(titulo, texto, res);
    }
    else{
        res.send("Título e/ou texto não podem ser nulos!");
    }

})

app.listen(3000);

function gravar(titulo, texto, res){
    fs.writeFile(titulo, texto, (error) => {
        if (error){
            res.send(`Houve um erro ao gravar o arquivo: ${titulo}.txt`);
        }
        else{
            res.send(`Arquivo ${titulo}.txt foi gravado com sucesso!`);
        }
    })
}