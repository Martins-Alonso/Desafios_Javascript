const title = document.getElementById("title");
const btn = document.getElementById("btn");
const diaSemana = document.getElementById("diaSemana")
const dataAtual = new Date()

btn.addEventListener("click", () => {

    ano.innerHTML = `O ano atual é: ${dataAtual.getFullYear()}`
    mes.innerHTML = `O mês atual é: ${dataAtual.getMonth()}`
    dia.innerHTML = `O dia atual é: ${dataAtual.getDate()}`
    hora.innerHTML = `A hora atual é: ${dataAtual.getHours()}`
    minutos.innerHTML = `O minuto atual é: ${dataAtual.getMinutes()}`
    segundos.innerHTML = `O segundo atual é: ${dataAtual.getSeconds()}`
})
    

   