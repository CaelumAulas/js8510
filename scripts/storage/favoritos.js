import { aceitouSalvar } from "/scripts/storage/aceitouSalvar.js"

// underscore no começo significa privado
const _listaFavoritos = JSON.parse(localStorage.getItem('favoritos')) || []

// Duplicando a lista e congelando
const listaFavoritosPublica = Object.freeze([..._listaFavoritos])

// JavaScript Object Notation
function adiciona(favorito) {
    if(aceitouSalvar) {
        _listaFavoritos.push(favorito)
        localStorage.setItem('favoritos', JSON.stringify(_listaFavoritos))
    }
}

function ehFavorito(endereco) {
    return _listaFavoritos.some(
        favorito =>  favorito.endereco === endereco
    )
}

function remove(endereco){ 
    const favoritoRemovido = _listaFavoritos.find(
        favorito => favorito.endereco === endereco
    )

    const posicaoFavorito = _listaFavoritos.indexOf(favoritoRemovido)
    _listaFavoritos.splice(posicaoFavorito, 1)

    localStorage.setItem('favoritos', JSON.stringify(_listaFavoritos))

    return favoritoRemovido
}

export {
    listaFavoritosPublica as listaFavoritos,
    adiciona,
    remove,
    ehFavorito
}
