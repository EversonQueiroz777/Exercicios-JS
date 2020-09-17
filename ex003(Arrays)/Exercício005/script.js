function adicionar(){
    let num = document.getElementById("numid")
    let tab = document.getElementById("selid")

    if(num.value.length == 0 || num.value > 100){
        alert("Digite um número válido")
    }else{
        let item = document.createElement('option')
        item.value = `tab${num.value}`
        item.text = `Valor ${num.value} adicionado`
        tab.appendChild(item)
    }
}

function finalizar(){
    let res = document.getElementById("res")
    vetnum.sort()

    for(c = 0; c <= vetnum.length; c++){
        soma += vetnum[c]
    }
    res.innerHTML = `Ao todo, temos ${vetnum.length} números cadastrados`
    res.innerHTML += `O maior valor informado foi ${vetnum.length - 1}`
    res.innerHTML += `O menor valor informado foi ${vetnum[0]}`
    res.innerHTML += `Somando todos os valores temos: ${soma}`
    res.innerHTML += `A média dos valores digitados é: ${soma / vetnum.length}`
}