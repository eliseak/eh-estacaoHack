let nota = prompt("Qual foi a nota do aluno?");

nota = Number(nota);

let nota = Number(prompt("Qual foi a nota do aluno?"));


if (isNaN(nota)){
    alert("ERRO: VALOR INVÁLIDO")
}
else{
    if (nota < 5)		
        alert("Reprovado");
    else if (nota >= 7)	
        alert("Aprovado");
    else
        alert("Recuperação");
}