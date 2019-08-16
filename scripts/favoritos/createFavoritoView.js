import { carregar } from '/scripts/navegacao/carregar.js';


// carga cognitiva
export class FavoritoView {
    constructor(nome, endereco) {

        this.nome = nome || endereco
        this.descricao = endereco
        
        this._endereco = endereco

        this.onclick = this.onclick.bind(this)
    }

    onclick() {
        carregar(this._endereco)
    }
}

// Função construtora
export function FavoritoViewNaRaca(nome, endereco) {
    if(!(this instanceof FavoritoView)){
        throw new Error("Não chama sem new")
    }

    this.nome = nome || endereco
    this.descricao = endereco
    this.endereco = endereco

    this.onclick = function() {
        carregar(endereco)
    }
}

FavoritoViewNaRaca.prototype.onclick = function() {
    carregar(this.endereco)
}

// FavoritoViewNaRaca.prototype.__proto__ = $CakeFavorite.prototype

// Função factory
// Função fábrica

export function createFavoritoView(nome, endereco) {
    return {
        nome: nome || endereco,
        descricao: endereco,
        onclick: function () {
            carregar(endereco)
        }
    }
}
