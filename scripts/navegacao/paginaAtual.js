
import { paginaInicial } from '/scripts/storage/paginaInicial.js'
import { carregar } from '/scripts/navegacao/carregar.js'

const paginaAtual = sessionStorage.getItem('paginaAtual')

const paginaParaCarregar = paginaAtual === null
    ? paginaInicial
    : paginaAtual

carregar(paginaParaCarregar)


$iframeJanela.addEventListener('load', function salvaPaginaAtual() {
    sessionStorage.setItem(
        'paginaAtual', 
        $iframeJanela.contentWindow.location.href
    )
})
