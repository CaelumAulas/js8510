import { formataEndereco } from "/scripts/endereco/formataEndereco.js"
import { CakeEnderecoInvalidoError } from "/scripts/erros/CakeEnderecoInvalidoError.js"

export function carregar(endereco) {
    try {
        endereco = formataEndereco(endereco)
    
        $inputEndereco.value = endereco
        $iframeJanela.src = endereco
    } catch(erro) {
        if(erro instanceof CakeEnderecoInvalidoError) {
            const termoBusca = encodeURIComponent(erro.endereco)
            const urlBusca = `https://www.google.com/search?q=${termoBusca}`
            carregar(urlBusca)
        } else {
            throw erro
        }
    }
}
