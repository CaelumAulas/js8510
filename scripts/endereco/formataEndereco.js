export function formataEndereco(endereco) {
    
    if(endereco === null || endereco === "") {
        return 'blank'
    }

    if(typeof endereco !== "string") {
        const erro = Error(`
            Endereço inválido:
                ${endereco}
            Tipo inválido:
                ${typeof endereco}
        `)

        // console.dir(erro)
        throw erro
    }

    // https://regex101.com/r/d0DKJn/1/
    const experessaoURL = /.\..{2,}$/
    // if(endereco.match(experessaoURL) === null) {
    if(!experessaoURL.test(endereco)) {
        alert("Inválido")
    }

    if (endereco.substring(0, 7) !== "http://" &&
        endereco.substring(0, 8) !== "https://") {
        endereco = "http://" + endereco;
    }
    return endereco;
}
