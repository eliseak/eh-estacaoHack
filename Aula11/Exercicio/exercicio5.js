/*
    Usar janelinha de prompt para cadastrar um usuário:
    - Nome
    - Login
    - Senha
    - Data de nascimento
    - Premium (booleano - dica usar CONFIRM ao invés de PROMPT)
    
    Salvar esses dados em um objeto e imprimir no console.

    EXTRA:
    Exibir também no console a idade do usuário no dia do HEXA 
    calculada a partir da data de nascimento.

*/

// Data dd/m/aaaa
let dataHexa = [15, 7, 2018];

let t_nome = prompt("Digite o seu nome:");
let t_login = prompt("Digite o seu login:");
let t_senha = prompt("Digite o sua senha:");
let t_dataNascimento = prompt("Digite o sua data de nascimento no formato dd/mm/aaaa");
let t_premium = confirm("É usuário premium?");

let usuario = {
    nome: t_nome,
    login: t_login,
    senha: t_senha,
    dataNascimento: t_dataNascimento.split("/"),
    premium: t_premium,
}

idade = dataHexa[2] - usuario.dataNascimento[2];

if ((usuario.dataNascimento[1] > dataHexa[1]) || 
    (usuario.dataNascimento[1] == dataHexa[1] 
    && usuario.dataNascimento[0] > dataHexa[0])) {
    idade--;
}

for (let item in usuario){
    if (item !== "dataNascimento")
        console.log(`${item}: ${usuario[item]}`);
    else
        console.log(`${item}: ${usuario[item][0]}/${usuario[item][1]}/${usuario[item][2]}`);
}

console.log(``);
console.log(`Idade no HEXA: ${idade} anos`);
