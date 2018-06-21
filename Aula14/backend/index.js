const express = require('express'); // verifica no node_modules?
const bodyParser = require('body-parser'); //necessário para ler os dados que o usuário enviar - bodyparser  vem junto com express

const app = express(); // Aplicação para trabalhar a resposta dos clientes

app.use(bodyParser.json()); // deve ser colocado antes dos endpoints

// get(endereço, função de resp(requisição, resposta))
app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/pudim', (req, res) => {
    res.send('Sorvete é melhor');
});

app.get('/sorvete', (req, res) => {
    res.send({
        sabor: 'baunilha',
        cobertura: 'caramelo'
    });
});

app.get('/teste', (req, res) => {
    res.send('<h1>Teste</h1>');
});

app.post('/', (req, res) =>{
    res.send(`Recebi um POST`);
})

app.post('/lerPOST', (req, res) =>{
    res.send(req.body);
})

app.post('/lerPOST2', (req, res) =>{
    if (!req.body.pudim)
        res.send('Você não tem pudim');
    else
        res.send(`Seu pudim é ${req.body.pudim}`);
})

app.listen(3000); //porta que o processo vai rodar
// Sempre no final do código

// HTTP 80
// HTTPS 443

//node index.js
//localhost:3000

// .ejs