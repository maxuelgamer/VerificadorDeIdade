
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value == "" || fano.value > ano || fano.value < 1910) {
        window.alert('[ERRO] verifique o ano e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Crianca
                img.setAttribute('src', 'img/crianca-masc.png')
            } else if (idade < 20) {
                img.setAttribute('src', 'img/jovem-masc.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/adulto-masc.png')
            } else {
                img.setAttribute('src', 'img/velho-masc.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Crianca
                img.setAttribute('src', 'img/crianca-fem.png')
            } else if (idade < 20) {
                img.setAttribute('src', 'img/jovem-fem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/adulto-fem.png')
            } else {
                img.setAttribute('src', 'img/velho-fem.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}

