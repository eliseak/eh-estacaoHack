const express = require('express');
const expressMongoDB = require('express-mongo-db');
const bodyParser = require('body-parser');

const app = express();

// Endereço do local do "banco"
app.use(expressMongoDB('mongodb://localhost/churros'));
app.use(bodyParser.json());

// Leitura - todos os churros
app.get('/churros', (req, res) => {
    req.db.collection('sabores').find().toArray((error, data) =>{
        
        if (error){
            res.status(500).send('Erro ao acessar o banco de dados');
            return;
        }
        
        res.send(data);
    })
})

app.post('/churro', (req, res) => {
    req.db.collection('sabores').insert(req.body, (error) => {
        
        if (error){
            res.status(500).send('Erro ao acessar o banco de dados');
            return;
        }
        
        res.send("Ok");
    });
});

app.listen(3000);