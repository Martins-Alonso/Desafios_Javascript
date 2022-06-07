let botao = document.getElementById("btn");
let resultado = document.getElementById("resultado")
let numeroSorteado = Math.floor(Math.random() * 50)


botao.addEventListener("click", function() {
  let numeroDigitado = Number(prompt("Digite um número"))
  if(numeroDigitado === numeroSorteado){
      resultado.innerHTML = `Parabéns o número sorteado foi: ${numeroSorteado}`
  }if(numeroDigitado < numeroSorteado){
      resultado.innerHTML = `O número digitado foi: ${numeroDigitado} e o número sorteado é maior`
  }if(numeroDigitado > numeroSorteado){
      resultado.innerHTML = `O número digitado foi: ${numeroDigitado} e o número sorteado é menor`
  }
})