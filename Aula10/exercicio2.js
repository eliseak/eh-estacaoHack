/*
    Advinhe o número

    Criar uma variável com um número entre 0 e 50.
    Criar um prompt para que o usuário tente advinhar o número.
    Se ele acertou, então dar Parabéns e encerrar.
    Se for um número baixo, respoder que é MAIOR.
    Se for um número alto, responder que é MENOR.

    EXTRA: 
    Pesquisar código para gerar o número secreto aleatoriamente.
    
*/

let numero = Math.floor(Math.random() * (50 + 1));

let chute = -1;

let acertou = false;

let texto = "";

while (!acertou){
    chute = Number(prompt(`${texto}Advinhe o número. Entre 0 e 50:`));
    if (chute === numero){
        acertou = true;
        alert("Acertou!");
    }
    else{
        if (chute < numero){
            texto = "Número é MAIOR. ";
        }
        else{
            texto = "Número é MENOR. ";
        }
    }
}