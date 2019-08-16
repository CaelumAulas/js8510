import * as storage from '/scripts/storage/favoritos.js'
import { FavoritoView, createFavoritoView } from '/scripts/favoritos/createFavoritoView.js'

for( const favoritoSalvo of storage.listaFavoritos ) {
    const favoritoParaExibir = new FavoritoView(
        favoritoSalvo.nome,
        favoritoSalvo.endereco
    )

    $Cake.addFavorite(favoritoParaExibir)
}

function marcaEstrela() {
    $botaoFavoritos.src="images/libCake/estrela-cheia.svg"
}
function desmarcaEstrela() {
    $botaoFavoritos.src = "images/libCake/estrela-vazia.svg";
}

$iframeJanela.addEventListener("load", function() {
    const enderecoAtualEhFavorito = storage.ehFavorito($iframeJanela.contentWindow.location.href)
    if(enderecoAtualEhFavorito) {
        marcaEstrela()
    } else {
        desmarcaEstrela();
    }
})

$botaoFavoritos.addEventListener('click', function removeDaBarra() {
    const enderecoFavorito = $iframeJanela.contentWindow.location.href
    if(storage.ehFavorito(enderecoFavorito)) {
        remove(enderecoFavorito)
    } else {
        adiciona(enderecoFavorito)
    }
})

function adiciona(enderecoFavorito) {
    const nomeFavorito = prompt("Qual o nome do favorito?")

    const favoritoParaSalvar = {
        nome: nomeFavorito,
        endereco: enderecoFavorito
    }
    
    // sem instanceof
    // Duck Typing
    // const favoritoParaExibir = createFavoritoView(nomeFavorito, enderecoFavorito)
    
    // Se verificassem instanceof $CakeFavorite
    const favoritoParaExibir = new FavoritoView(nomeFavorito, enderecoFavorito)
    
    storage.adiciona(favoritoParaSalvar)
    
    $Cake.addFavorite(favoritoParaExibir)
    marcaEstrela()
    
    console.dir(favoritoParaExibir)
    console.log("É instanceof FavoritoView: ", favoritoParaExibir instanceof FavoritoView)
}

function remove(enderecoFavorito) {
    desmarcaEstrela()
    const favoritoRemovido = storage.remove(enderecoFavorito)
    $Cake.removeFavorite(favoritoRemovido)
}