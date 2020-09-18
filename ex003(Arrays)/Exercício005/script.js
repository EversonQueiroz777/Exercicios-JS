let num = document.getElementById("numid")
let lista = document.getElementById("selid")
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        let item = document.createElement('option')
        item.value = `lista${num.value}`
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        valores.push(num.value)
    }else{
        alert("Valor Inválido ou já encontrado na lista")
    }
}
2
function finalizar(){
    valores.sort()
    alert(`é sla, isso aqui funcionou ${valores}`)
   /* valores.sort()
   for(c = 0; c <= valores.length; c++){
        soma += valores[c]
    }
    res.innerHTML = `Ao todo, temos ${valores.length} números cadastrados`
    res.innerHTML += `O maior valor informado foi ${valores[valores.length - 1]}`
    res.innerHTML += `O menor valor informado foi ${valores[0]}`
    res.innerHTML += `Somando todos os valores temos: ${soma}`
    res.innerHTML += `A média dos valores digitados é: ${soma / valores.length}`*/
}