function soma(){
    let primeiro = Number(prompt("Digite o primeiro número"))
    let segundo = Number(prompt("Digite o segundo número"))
    let soma = primeiro + segundo

    let resultado = document.getElementById("resultado")
    let sumirTexto = document.getElementById("sumirTexto")
    let novoParagrafo = document.createElement("p")
    resultado.appendChild(novoParagrafo)
    novoParagrafo.textContent = `A soma entre: ${primeiro} e ${segundo} é: ${soma}` 
    sumirTexto.textContent = "";
}