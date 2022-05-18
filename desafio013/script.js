
function calcular(){
    let primeiroNumero = Number(prompt("Digite o primeiro número"));
    let segundoNumero = Number(prompt("Digite o segundo número"));
    let resultado = document.getElementById("resultado");

    if(primeiroNumero > segundoNumero){
        resultado.innerHTML = `Os valores avaliados foram: ${primeiroNumero} e ${segundoNumero} o maior é: ${primeiroNumero} `
    }else if(primeiroNumero === segundoNumero){
        resultado.innerHTML = `Os valores avaliados foram: ${primeiroNumero} e ${segundoNumero} e ambos são <strong>Iguais</strong>`
    }else{
        resultado.innerHTML = `Os valores avaliados foram: ${primeiroNumero} e ${segundoNumero} o ${segundoNumero} é o maior`
    }
}
