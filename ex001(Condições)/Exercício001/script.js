function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
 
    
    msg.innerHTML = `Agora são ${hora} horas. <br>`
    if(hora >=0 && hora < 12){
        //Bom diaa!!!
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        //Boa Tardee!!!
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    }else{
        //Boa Noiteee!!!
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}