

function calcula()
{
    let resultado = document.getElementById("resultado");

    const nomeAluno = prompt("Digite o nome do Aluno");
    let nota1 = Number(prompt("Digite a primeira nota do " + nomeAluno));
    let nota2 = Number(prompt("Digite a segunda nota do " + nomeAluno));
    let media = (nota1 + nota2) / 2

    let paragrafo1 = document.createElement("p");
    let paragrafo2 = document.createElement("p");
    let paragrafo3 = document.createElement("p");
    let paragrafoMensagem = document.createElement("p")

    resultado.appendChild(paragrafo1);
    resultado.appendChild(paragrafo2);
    resultado.appendChild(paragrafo3);
    resultado.appendChild(paragrafoMensagem)

    paragrafo1.innerText = ` Calculando a média final de: ${nomeAluno}`
    paragrafo2.innerText = `As notas obtidas foram: ${nota1} e ${nota2}`
    paragrafo3.innerText = ` A média final será: ${media}`
    if(media > 5 && media < 7){
        paragrafoMensagem.innerHTML = `<h2>A mensagem que temos é: Estude um Pouco Mais</h2> `
        paragrafoMensagem.style.color = "red"
    }else {
        paragrafoMensagem.innerHTML = `<h2>Parabéns</h2>`
        paragrafoMensagem.style.color = "green"
    }
}