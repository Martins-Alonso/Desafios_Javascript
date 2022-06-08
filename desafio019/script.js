const titulo = document.getElementById("title");
const botao = document.querySelector("#btn-iniciar");
const resultado = document.querySelector("#resultado");

botao.addEventListener("click", () => {
    let primeiroValor = Number(prompt("Digite o primeiro valor"));
    let segundoValor = Number(prompt("Digite o segundo valor"));
    let operacao = Number(prompt("Digite a operação:\n[1] SOMAR \n" + "[2] SUBTRAIR \n" +"[3] MULTIPLICAR \n" + "[4] DIVIDIR"));

    if(operacao == 1){
        resultado.innerHTML = `A Soma entre ${primeiroValor} + ${segundoValor} é: ${primeiroValor + segundoValor}`
    }
    else if(operacao == 2){
        resultado.innerHTML = `A Subtração entre ${primeiroValor} e ${segundoValor} é: ${primeiroValor - segundoValor}`
    }
    else if(operacao == 3){
        resultado.innerHTML = `A Multiplicação entre ${primeiroValor} e ${segundoValor} é: ${primeiroValor * segundoValor}`
    }
    else if(operacao == 4){
        resultado.innerHTML = `A Divisão entre ${primeiroValor} e ${segundoValor} é: ${primeiroValor / segundoValor}`
    }else{
        titulo.style.backgroundColor = "red"
        titulo.innerHTML = `Resultado inexistente`
        resultado.innerHTML = ""
    }
})