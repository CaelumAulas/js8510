import * as storage from '/scripts/storage/favoritos.js'
import { carregar } from '/scripts/navegacao/carregar.js';

for( const favoritoSalvo of storage.listaFavoritos ) {
    const favoritoParaExibir = {
        nome: favoritoSalvo.nome,
        descricao: favoritoSalvo.nome || favoritoSalvo.endereco,
        onclick: function() {
            carregar(favoritoSalvo.endereco)
        }
    }

    $Cake.addFavorite(favoritoParaExibir)
}

// TODO isolar criação do objeto
$botaoFavoritos.addEventListener('click', function adicionaNaBarra() {
    const enderecoFavorito = $iframeJanela.contentWindow.location.href
    const nomeFavorito = prompt("Qual o nome do favorito?") || enderecoFavorito

    const favoritoParaSalvar = {
        nome: nomeFavorito,
        endereco: enderecoFavorito
    }
    
    const favoritoParaExibir = {
        nome: nomeFavorito,
        descricao: enderecoFavorito,
        onclick: function() {
            carregar(enderecoFavorito)
        }
    }
    
    storage.adiciona(favoritoParaSalvar)
    $Cake.addFavorite(favoritoParaExibir)
})
