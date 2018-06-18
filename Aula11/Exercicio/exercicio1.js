/*
    Criar um programa que avalia uma proposta de empréstimo.
    O programa recebe: 
        - a idade do cliente
        - quanto ele quer emprestado
        - quanto ele recebe por mês
        
    Regras para ACEITAR o empréstimo:
        - Entre 22 e 55 anos;
        - O valor a emprestar a partir de 1000 reais;
        - O valor não pode ultrapassar 15x o quanto ele recebe por mês;

    RESPONDER: ACEITO ou NÃO ACEITO

    EXTRA:
        - Perguntar também a quantidade de parcelas (3 e 20 vezes) 
        - Calcular juros de 8% ao mês (COMPOSTO)
    RESPONDER: VALOR TOTAL DO EMPRÉSTIMO e VALOR DA PARCELA
*/

let idade = Number(prompt("Digite a sua idade"));
let valor_emprestado = Number(prompt("Digite o valor a ser emprestado"));
let valor_salario = Number(prompt("Digite o valor do salário"));

let parcelas = Number(prompt("Quantidade de parcelas"));

if (idade >= 22 
    && idade <= 55 
    && valor_emprestado >= 1000 
    && valor_emprestado <= valor_salario * 15
    && parcelas >= 3
    && parcelas <= 20){
        let valor_total = 0;
        let valor_parcelas = [];

        for (let i = 0; i < parcelas; i++){

            if (i === 0){
                let base = valor_emprestado / parcelas;
                valor_parcelas[i] = base + base * 0.1;
            } else{
                valor_parcelas[i] = valor_parcelas[i-1] + valor_parcelas[i-1] * 0.1;
            }

            valor_total += valor_parcelas[i];

            console.log(`${i+1}ª parcela: R$${valor_parcelas[i]}`);
        }

        console.log(`Valor total: R$${valor_total}`);
        
        alert("ACEITO");
    }
else{
    alert("NÃO ACEITO");
}



