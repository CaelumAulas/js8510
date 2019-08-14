function mudaEnderecoResumido() {
    $inputEndereco.value = $iframeJanela.contentWindow.location.hostname
}

function mudaEnderecoCompleto() {
    $inputEndereco.value = $iframeJanela.contentWindow.location.href
}

$inputEndereco.onfocus = mudaEnderecoCompleto
$inputEndereco.onblur = mudaEnderecoResumido

$iframeJanela.onload = mudaEnderecoResumido
