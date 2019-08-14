export function formataEndereco(endereco) {

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

    if (endereco.substring(0, 7) !== "http://" &&
        endereco.substring(0, 8) !== "https://") {
        endereco = "http://" + endereco;
    }
    return endereco;
}
