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

