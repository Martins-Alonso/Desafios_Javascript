let contador = 0;

function clicar() {
    let resultado = document.getElementById("resultado")
    
    resultado.innerHTML = `<p>O contador está em<strong> ${++contador}</strong> cliques</p>` 
    resultado = "";
    console.log(resultado)
}
function zerar() {

    contador = 0;
    resultado.innerHTML = `<br>O Contador Zerou!</br>`

}
