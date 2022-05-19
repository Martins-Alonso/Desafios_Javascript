const title = document.getElementById("title")
const btn = document.querySelector("#btn")
let resultado = document.getElementById("resultado")
const diaAtual = new Date()

btn.addEventListener("click", () => {
    title.classList.add("mudaCor");
    resultado.classList.add("mudaCor");
    resultado.innerHTML = `O retorno do Sistema é: ${diaAtual}`
})