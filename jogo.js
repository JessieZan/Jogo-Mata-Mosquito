
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMoscaTempo = 1500

var nivel = window.location.search

nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    criaMoscaTempo = 1500
} else if (nivel === 'dificil'){
    criaMoscaTempo = 1000
} else if (nivel === 'chucknorris'){
    criaMoscaTempo = 750
}

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight //recupera a altura da janela
    largura = window.innerWidth //recupera a largura da janela

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){


    tempo -= 1

    if(tempo<0){
        clearInterval(cronometro)//encerra o ciclo do cronometro
        clearInterval(criaMosca)//encerra a criação de mosquitos
        window.location.href = 'vitoria.html'//direciona para a pagina de vitoria
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)


function posicaoRandomica(){


    //remover mosquito anterior caso exista
    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove()//remove o mosquito

        if(vidas>3){
            window.location.href = 'fim_de_jogo.html'//direciona para a pagina de game over
        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"//modifica a imagem de coração cheio]

            vidas++
        }
    }

    //Math.random captura numeros aleatorios
    //Math.floor arredonda os numeros para baixo
    var posicaox = Math.floor(Math.random() * largura) - 90 //diminui a area de abrangencia 
    var posicaoy = Math.floor(Math.random() * altura) - 90

    posicaox = posicaox < 0 ? 0 : posicaox
    posicaoy = posicaoy < 0 ? 0 : posicaoy

    console.log(posicaox, posicaoy)

    //criar o elemento html

    var mosca = document.createElement('img')//cria um elemento html img
    mosca.src = 'imagens/mosca.png' //atribui o src ao elemento html img
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio() //aplica a classe gerada randomicamente ao elemento img criado
    mosca.style.left = posicaox + 'px' //aplica o afastamento a esquerda do numero gerado
    mosca.style.top = posicaoy + 'px' //aplica o afastamento do topo do numero gerado
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosca)//inclui o elemento nesse caso como filho do body

}



function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)// multiplica por 3 pois teremos 3 classes de tamanhos diferentes
    switch(classe) {
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)// multiplica por 2 pois teremos 2 classes de lados diferentes
    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

