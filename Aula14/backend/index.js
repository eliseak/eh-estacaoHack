const express = require('express'); // verifica no node_modules?

const app = express(); // Aplicação para trabalhar a resposta dos clientes

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

app.listen(3000); //porta que o processo vai rodar
// Sempre no final do código

// HTTP 80
// HTTPS 443

//node index.js
//localhost:3000

