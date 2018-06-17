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

let user = {
    nome: t_nome,
    login: t_login,
    senha: t_senha,
    dataNascimento: t_dataNascimento.split("/"),
}

idade = dataHexa[2] - user.dataNascimento[2];

if ((user.dataNascimento[1] > dataHexa[1]) || 
    (user.dataNascimento[1] == dataHexa[1] 
    && user.dataNascimento[0] > dataHexa[0])) {
    idade--;
}

console.log(`Nome: ${user.nome}`);
console.log(`Login: ${user.login}`);
console.log(`Senha: ${user.senha}`);
console.log(`Data de Nascimento: ${user.dataNascimento[0]}/${user.dataNascimento[1]}/${user.dataNascimento[2]}`);
console.log(``);
console.log(`Idade no HEXA: ${idade} anos`);
