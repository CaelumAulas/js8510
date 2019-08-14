
import { paginaInicial } from '/scripts/storage/paginaInicial.js'

const paginaAtual = sessionStorage.getItem('paginaAtual')

const paginaParaCarregar = paginaAtual === null
    ? paginaInicial
    : paginaAtual


$inputEndereco.value = paginaParaCarregar
$iframeJanela.src = paginaParaCarregar


$iframeJanela.addEventListener('load', function salvaPaginaAtual() {
    sessionStorage.setItem(
        'paginaAtual', 
        $iframeJanela.contentWindow.location.href
    )
})
