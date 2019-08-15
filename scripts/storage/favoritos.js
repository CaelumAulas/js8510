import { aceitouSalvar } from "/scripts/storage/aceitouSalvar.js";

const listaFavoritosPrivada = JSON.parse(localStorage.getItem('favoritos')) || []

// Duplicando a lista e congelando
export const listaFavoritos = Object.freeze([...listaFavoritosPrivada])

export function adiciona(favorito) {
    if(aceitouSalvar) {
        listaFavoritosPrivada.push(favorito)
        localStorage.setItem('favoritos', JSON.stringify(listaFavoritosPrivada))
    }
}
