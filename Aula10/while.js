// Como pegar um elevador e ir para o térreo

let andar = 5;
let subindo = false;

while (andar !== 0){
    alert(`Espera mais um poquinho. Andar: ${andar}.`);
    //andar = andar - 1;
    //andar -= 1;

    if (andar === 1){
        subindo = true;
    }
    else if (andar === 5){
        subindo = false;
    }
        
    if (subindo){
        andar++;
    }
    else{
        andar--;
    }

}

alert("Pode sair que já chegou no térreo.");