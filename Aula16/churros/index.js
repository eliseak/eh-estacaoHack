const express = require('express');
const expressMongoDB = require('express-mongo-db');
const bodyParser = require('body-parser');

const ObjectID = require('mongodb').ObjectID;

const cors = require('cors');

const app = express();

// Middlewares
// Endereço do local do "banco"
app.use(expressMongoDB('mongodb://localhost/churros'));
app.use(bodyParser.json());
app.use(cors());

// READ ALL - todos os churros
app.get('/churros', (req, res) => {
    req.db.collection('sabores').find().toArray((error, data) =>{
        
        if (error){
            res.status(500).send('Erro ao acessar o banco de dados');
            return;
        }
        
        res.send(data);
    })
})

// READ
app.get('/churro/:id', (req, res) => {
    // Busca
    let query = {
        _id: ObjectID(req.params.id)
    };
    req.db.collection('sabores').findOne(query, (error, data) =>{
        if (error){
            res.status(500).send('Erro ao acessar o banco de dados');
            return;
        }
        
        if(!data){
            res.status(404).send("Churro não encontrado");
            return;
        }

        res.send(data);
    })
})


// INSERT
app.post('/churro', (req, res) => {

    // Validação

    // Objeto com o formato do dado
    let data = {
        sabor: req.body.sabor,
        recheio: req.body.recheio,
        cobertura: req.body.cobertura
    }

    
    req.db.collection('sabores').insert(req.body, (error) => {
        
        if (error){
            res.status(500).send('Erro ao acessar o banco de dados');
            return;
        }
        
        res.send("Ok");
    });
});

// UPDATE
app.put('/churro/:id', (req, res) => {
    // Busca
    let query = {
        _id: ObjectID(req.params.id)
    };
    req.db.collection('sabores').updateOne(query, req.body,(error, data) =>{
        if (error){
            res.status(500).send('Erro ao acessar o banco de dados');
            return;
        }
        
        if(!data){
            res.status(404).send("Churro não encontrado");
            return;
        }

        res.send(data);
    })
})

// DELETE
app.delete('/churro/:id', (req, res) => {
    // Busca
    let query = {
        _id: ObjectID(req.params.id)
    };
    req.db.collection('sabores').deleteOne(query, (error, data) =>{
        if (error){
            res.status(500).send('Erro ao acessar o banco de dados');
            return;
        }
        
        if(!data){
            res.status(404).send("Churro não encontrado");
            return;
        }

        res.send(data);
    })
})

app.listen(3000);

/*
npm install cors

app.use(CORS);
*/