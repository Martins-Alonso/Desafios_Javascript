let contador = 0;

function clicar() {
    let resultado = document.getElementById("resultado")
    
    resultado.innerHTML = `<p>O contador está em<strong> ${++contador}</strong> cliques</p>` 
    resultado = "";
}
function zerar() {
    contador = 0;
    resultado.innerHTML = `O Contador Zerou!`
}
