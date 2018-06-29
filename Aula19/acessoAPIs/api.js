// Requisição em API

// fetch(endereço, {dados e características do request});

/*
    Padrões do FETCH:

    Método: GET
    Corpo: vazio 

*/

// Acesso ao Deck of Cards (baralho)

// fetch devolve uma promessa que vai ter uma reposta

// fetch(endereço).then(function);
//          RETORNA UMA PROMESSA >>>> RESOLVE(TRATA) O RETORNO DO RESULTADO

// Garante que é um json
// fetch(endereço).then(promessa => promessa.json().then(promessa => {o que quiser fazer}));

/*
fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
    .then(promessa => promessa.json()) // promessa.xml()
        .then(dados => {console.log(dados.deck_id);});
*/

const imagem = document.querySelector("#carta img");

fetch("https://deckofcardsapi.com/api/deck/gkv4bw2o8a4t/draw/")
    .then(promessa => promessa.json()) // promessa.xml()
        .then(dados => {
            console.log(dados.cards[0].image);
            imagem.src = dados.cards[0].image;

});

// POST
/*
fetch(endereço, 
    {
        headers: {
            "Content-Type": "application/json" // Define que os dados mandados são um JSON
        },
        method: "POST",
        body: JSON.stringify({objeto a ser mandado});

    }).then(promessa => promessa.json()) // promessa.xml()
        .then(dados => {
            console.log(dados);

});
*/
