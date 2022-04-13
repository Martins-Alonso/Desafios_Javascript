function media() {
    let resultado = document.getElementById("resultado")
    let someTexto = document.getElementById("someTexto")

    let nome = prompt("Qual o seu nome ?")
    let primeiraNota = parseInt(prompt("Digite a primeira nota de " + nome))
    let segundaNota = parseInt(prompt("Digite a segunda nota de " + nome))
    let media = ((primeiraNota + segundaNota) / 2)

    let criaParagrafro = document.createElement("p")
    resultado.appendChild(criaParagrafro)
    criaParagrafro.textContent = `A média do ${nome} é de: ${media}`

    someTexto.textContent = "";
}
