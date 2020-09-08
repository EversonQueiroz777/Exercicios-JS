function gerarTabuada(){
    num = document.getElementById('numid')
    tab = document.getElementById('selid')
    
    if(num.value.length == 0){
        alert('[ERRO] Digite um número')        
    }else{
        x = Number(num.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.value = `tab${c}` //Seta um valor pra cada option
            item.text = `${x} x ${c} = ${x*c}` //Mostra os valores da tabuada
            tab.appendChild(item) //Adiciona um elemento filho
        }

    }
}