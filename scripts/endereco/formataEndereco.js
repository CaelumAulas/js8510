import { CakeEnderecoInvalidoError } from "/scripts/erros/CakeEnderecoInvalidoError.js";

export function formataEndereco(endereco) {
    
    if(endereco === null || endereco === "") {
        return 'blank'
    }

    if(typeof endereco !== "string") {
        // função construtora
        const erro = TypeError(`
            Endereço inválido:
                ${endereco}
            Tipo inválido:
                ${typeof endereco}
        `)

        // console.dir(erro)
        throw erro
    }

    // https://regex101.com/r/9Pcs6v/2/
    const experessaoURL = /^[\S]+\.[\S]{2,}(\/[^\/\s]+)*$/
    
    // if(endereco.match(experessaoURL) === null) {
    if(!experessaoURL.test(endereco)) {
        throw CakeEnderecoInvalidoError("URL inválida: " + endereco)
    }

    if (endereco.substring(0, 7) !== "http://" &&
        endereco.substring(0, 8) !== "https://") {
        endereco = "http://" + endereco;
    }
    return endereco;
}
