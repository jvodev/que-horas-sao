    //setTimeout    
    setInterval(function() {

    var inMsg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();
    var horas = `${hora} Horas ${min} Minutos ${seg} Segundos`
    
    inMsg.innerHTML = `${horas}` // verificar em casa

    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = 'assets/dia.jpg'
    }   else if (hora >= 12 && hora < 18)   {
        // boa tarde
        img.src = 'assets/tarde.jpg'
        document.body.style.background = '#B33B06'

    } else  {
        // boa noite
        img.src = 'assets/noite.jpg'
        document.body.style.background = '#4f2e24'
    }

})