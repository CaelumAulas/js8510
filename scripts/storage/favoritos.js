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
    for(const favorito of _listaFavoritos) {
        if(favorito.endereco === endereco) {
            return true
        }
    }
    return false
}

export {
    listaFavoritosPublica as listaFavoritos,
    adiciona,
    ehFavorito
}
