const comecar = document.querySelector("#comecar");
const resultado = document.querySelector("#resultado");

comecar.addEventListener("click", () => {
    let numero = Number(prompt("Digite um número"));
    if(numero % 2 === 0){
        resultado.innerHTML = `O numero avaliado foi ${numero} e ele é: <strong>Par</strong>`
    }else{
        resultado.innerHTML = `O número avaliado foi o ${numero} e ele é <strong>Ímpar</strong>`
    }
})