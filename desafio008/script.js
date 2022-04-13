function comecar() {
    let numero = Number(prompt("Digite um número para começar."))
    let someTexto = document.getElementById("someTexto")
    let resultado = document.getElementById("resultado")

    let raizQuadrada = Math.sqrt(numero)
    let raizCubica = Math.cbrt(numero)

    someTexto.innerHTML = `O numero a ser avaliado será o <strong>${numero}</strong>`
    

    let criahr = document.createElement("hr")
    let paragrafoUm = document.createElement("p")
    let paragrafoDois = document.createElement("p")
    let paragrafoTres = document.createElement("p")


    resultado.appendChild(criahr)
    resultado.appendChild(paragrafoUm)
    resultado.appendChild(paragrafoDois)
    resultado.appendChild(paragrafoTres)
    

    paragrafoUm.innerHTML = `O seu valor absoluto é ${numero}`
    paragrafoDois.innerHTML = `A raiz quadrade de ${numero} é ${raizQuadrada.toFixed(2) }`
    paragrafoTres.innerHTML = `A raiz cúbica de ${numero} é ${raizCubica.toFixed(2)}`
   
}