function contar(){
    let inicio = document.getElementById('iniid')
    let fim = document.getElementById('fimid')
    let passo = document.getElementById('passoid')
    let res = document.querySelector('div#res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //alert('[ERRO] Faltam dados ')
        res.innerHTML = 'Impossível contar !!'
    }else{
       res.innerHTML = `Contando: <br>`
       let i = Number(inicio.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
        if(p <= 0){
            alert('Passo inválido, considerando PASSO = 1')
            p = 1
        }
        if(i < f){
                //Contagem Crescente
                for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
                } 
            }else{
                //Contagem Descrecente
                for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
                }
        }
        res.innerHTML += `\u{1F3C1}`
        }
}