const titulo = document.getElementById("title")
const resultado = document.getElementById("resultado")
let anoAtual = new Date()

function iniciar(){
    let anoNascimento = Number(prompt("Qual ano você nasceu ?"))
    resultado.innerText = `Você nasceu em ${anoNascimento} em ${anoAtual.getFullYear()} você vai fazer ${anoAtual.getFullYear() - anoNascimento} anos` 
}