let button = document.getElementById("btn");

button.addEventListener("click", () =>{
    const altura = parseInt(document.getElementById("altura").value);
    const peso = parseInt(document.getElementById("peso").value);
    const idade = parseInt(document.getElementById("idade").value);
    const resultado= document.getElementById("resultado");
    let valor_altura=false, valor_peso=false;

    if(altura === "" || isNaN(altura) || (altura <= 0)){
        document.getElementById("erro_altura").innerHTML = "Coloque uma altura válida";
    }else{
        document.getElementById("erro_altura").innerHTML = "";
        valor_altura=true;
    }

    if(peso === "" || isNaN(peso) || (peso <= 0)){
        document.getElementById("erro_peso").innerHTML = "Coloque um peso válido";
    }else{
        document.getElementById("erro_peso").innerHTML = "";
        valor_peso=true;
    }

    if(idade === "" || isNaN(idade) || (idade <= 0)){
        document.getElementById("erro_idade").innerHTML = "Coloque uma idade válida";
    }else{
        document.getElementById("erro_idade").innerHTML = "";
    }

    if(valor_altura && valor_peso){
        const imc = (peso / ((altura*altura)/10000)).toFixed(2);

        if(imc < 18.6){
            resultado.innerHTML = "Abaixo do Peso: " + imc;
        }else if(imc >= 18.6 && imc < 24.9){
            resultado.innerHTML = "Normal: " + imc;
        }else{
            resultado.innerHTML = "Acima do Peso: " + imc;
        }
    }else{
        alert("Algo está errado!")
        resultado.innerHTML = "";
    }
    

});