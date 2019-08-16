import { carregar } from '/scripts/navegacao/carregar.js';


// carga cognitiva
export class FavoritoView extends $CakeFavorite{
    constructor(nome, endereco) {
        super()

        this.nome = nome
        this.descricao = endereco || nome
        
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

    this.descricao = endereco || nome
    this.endereco = endereco

    this.onclick = function() {
        carregar(endereco)
    }
}

FavoritoViewNaRaca.prototype.onclick = function() {
    carregar(this.endereco)
}

FavoritoViewNaRaca.prototype.__proto__ = $CakeFavorite.prototype

// Função factory
// Função fábrica

export function createFavoritoView(nome, endereco) {
    return {
        nome: nome,
        descricao: endereco || nome,
        onclick: function () {
            carregar(endereco)
        }
    }
}
