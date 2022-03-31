alert("Seja bem-vindo(a) ao meu site")

function calcular(){
    let numero = Number(prompt("Digite o número"))
    let dobro = numero * 2;
    let metade = numero / 2;
    
    let resultado = document.getElementById("resultado")
    let sumirTexto = document.getElementById("sumirTexto")
    let novoParagrafo = document.createElement("p")
    resultado.appendChild(novoParagrafo)
    novoParagrafo.textContent = `O dobro de ${numero} é: ${dobro} e a metade é: ${metade}`

    sumirTexto.textContent = ""
}