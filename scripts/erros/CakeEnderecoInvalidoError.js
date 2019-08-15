export function CakeEnderecoInvalidoError(endereco) {
    const erro = Error("URL inválida " + endereco)
    erro.endereco = endereco

    Object.setPrototypeOf(erro, CakeEnderecoInvalidoError.prototype)
    return erro
}

Object.setPrototypeOf(
    CakeEnderecoInvalidoError.prototype, 
    Error.prototype
)










//const objeto = Component()
//objeto.constructor = CakeEnderecoInvalidoError

// Sintaxe literal de objeto
// objeto instanceof CakeEnderecoInvalidoError
// const objeto = {
//  __proto__: CakeEnderecoInvalidoError.prototype
// }



// CakeEnderecoInvalidoError.prototype.__proto__ = Error.prototype

// // Monkey patching
// // Polyfill
// Array.prototype.indexOf = function() {
//     return "oi"
// }