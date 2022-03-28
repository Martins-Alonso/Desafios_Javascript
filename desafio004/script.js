function comecar(){
    
    let nome = prompt("Qual é o seu nome ?")

    if(nome === "") {
        alert("Campo nome vazio")
    }else {
        let res = document.getElementById("resultado")
        let novoP = document.createElement('p')
        res.appendChild(novoP).textContent = `Olá, ${nome} É um prazer te conhecer`
    }
}

