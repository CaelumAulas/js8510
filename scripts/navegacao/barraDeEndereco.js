import { carregar } from '/scripts/navegacao/carregar.js'

function mudaEnderecoResumido() {
    $inputEndereco.value = $iframeJanela.contentWindow.location.hostname
}

function mudaEnderecoCompleto() {
    $inputEndereco.value = $iframeJanela.contentWindow.location.href
}

$inputEndereco.addEventListener('focus', mudaEnderecoCompleto)
$inputEndereco.addEventListener('blur', mudaEnderecoResumido)

// $iframeJanela é um EventEmmiter
$iframeJanela.addEventListener("load", mudaEnderecoResumido)

// Parâmetro é opcional
$inputEndereco.addEventListener('keyup', function carregarDigitado() {
    const evento = arguments[0]
    const queNaoExiste = arguments[1]
    
    // console.log(arguments)
    // console.log("Nº de argumentos", arguments.length)
    // console.log("Nao existe: ", queNaoExiste)
    // console.log(evento)

    if(evento.key === 'Enter') {        
        const enderecoDigitado = this.value
        carregar(enderecoDigitado)
    }
})


// Em algum momento
// Eu sou o chrome
// const tecla = "Enter"
// const evento = objetao
// carregarDigitado.call($inputEndereco, evento)
