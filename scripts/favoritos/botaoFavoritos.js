import * as storage from '/scripts/storage/favoritos.js'
import { FavoritoView, createFavoritoView } from '/scripts/favoritos/createFavoritoView.js'

for( const favoritoSalvo of storage.listaFavoritos ) {
    const favoritoParaExibir = new FavoritoView(
        favoritoSalvo.nome,
        favoritoSalvo.endereco
    )

    $Cake.addFavorite(favoritoParaExibir)
}

// TODO isolar criação do objeto
$botaoFavoritos.addEventListener('click', function adicionaNaBarra() {
    const enderecoFavorito = $iframeJanela.contentWindow.location.href
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
    
    $Cake.addFavorite(favoritoParaExibir)
    
    console.dir(favoritoParaExibir)
    console.log("É instanceof FavoritoView: ", favoritoParaExibir instanceof FavoritoView)
    
    storage.adiciona(favoritoParaSalvar)
})


