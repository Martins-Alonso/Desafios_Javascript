let comecar = function(comecar){
    let nome = prompt("Digite o nome do Aluno")
    let nota1 = parseInt(prompt("Digite a primeira nota de " + nome))
    let nota2 = parseInt(prompt("Digite a segunda nota de " +nome))
    let media = (nota1 + nota2) / 2
    var resultado = document.querySelector("botao")
    var novopara = document.createElement("p")
    novopara.textContent = `${media}`
    console.log(novopara)
    return comecar
}