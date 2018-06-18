/*
    Desenhar uma escadinha no console, usando console.log()

    Perguntar ao usuário o tamanho da escadinha. 
    Exemplo de escada tamanho 5:

    #
    ##
    ###
    ####
    #####

    EXTRA: 
    Perguntar ao usuário também qual é o caracter (material) para construir a escada
    Exemplo com @:

    @
    @@
    @@@
    @@@@
    @@@@@

*/

let tamanho = Number(prompt("Digite o tamanho da escada:"));

let caracter = String(prompt("Digite o caracter da escada:"));

let texto = "";

for (let andar = 0; andar < tamanho; andar++){
    texto += caracter;
    console.log(texto);
}






