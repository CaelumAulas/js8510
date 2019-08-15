import { CakeEnderecoInvalidoError } from "/scripts/erros/CakeEnderecoInvalidoError.js";

export function formataEndereco(endereco) {
    
    if(endereco === null || endereco === "" || endereco === "blank") {
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

    // https://regex101.com/r/9Pcs6v/3/
    const experessaoURL = /^[\S]+[\.\:][\S]{2,}(\/[^\/\s]+)*$/
    
    // if(endereco.match(experessaoURL) === null) {
    if(!experessaoURL.test(endereco)) {
        const erro = CakeEnderecoInvalidoError(endereco)
        throw erro
    }

    if (endereco.substring(0, 7) !== "http://" &&
        endereco.substring(0, 8) !== "https://") {
        endereco = "http://" + endereco;
    }
    return endereco;
}
