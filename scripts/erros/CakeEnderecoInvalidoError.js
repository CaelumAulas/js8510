export function CakeEnderecoInvalidoError() {
//     const objeto = Component()
//     objeto.constructor = CakeEnderecoInvalidoError

    // Sintaxe literal de objeto
    // objeto instanceof CakeEnderecoInvalidoError
    const objeto = {
        __proto__: CakeEnderecoInvalidoError.prototype
    }

    return objeto
}
