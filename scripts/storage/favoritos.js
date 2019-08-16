import { aceitouSalvar } from "/scripts/storage/aceitouSalvar.js"

// underscore no começo significa privado
const _listaFavoritos = JSON.parse(localStorage.getItem('favoritos')) || []

// Duplicando a lista e congelando
const listaFavoritosPublica = Object.freeze([..._listaFavoritos])

function adiciona(favorito) {
    if(aceitouSalvar) {
        _listaFavoritos.push(favorito)
        localStorage.setItem('favoritos', JSON.stringify(_listaFavoritos))
    }
}

export {
    listaFavoritosPublica as listaFavoritos,
    adiciona
}
