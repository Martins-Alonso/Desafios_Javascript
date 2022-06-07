let resultado = document.getElementById("resultado")
let numero = 1;
function mathRandomico(){
    if(numero >= 1 && numero <= 100){
        return Math.floor(Math.random() * 100)
    }else{
        return false
    }
}
function gerador(){
    resultado.innerText = `Acabei de pensar no número: ${mathRandomico()}`
}
function limpar(){
    resultado.innerText = "";
}