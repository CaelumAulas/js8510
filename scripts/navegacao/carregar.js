import { formataEndereco } from "/scripts/endereco/formataEndereco.js"

export function carregar(endereco) {
    
    endereco = formataEndereco(endereco)

    $inputEndereco.value = endereco
    $iframeJanela.src = endereco
}