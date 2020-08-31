function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('idadeid')
    var res = document.querySelector('div#res')
    
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sex[0].checked){
            genero = 'Homen'
            if(idade >= 0 && idade <10){
                //bebe
                img.setAttribute('src', 'bebe-mas.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-mas.png')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto.png')
            } else{
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        }else if(sex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade <10){
                //bebe
                img.setAttribute('src', 'bebe-fem.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-fem.png')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'adulta.png')
            } else{
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) //adiconar um elemento
    }
}