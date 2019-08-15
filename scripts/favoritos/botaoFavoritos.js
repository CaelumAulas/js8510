import * as storage from '/scripts/storage/favoritos.js'

for( const favorito of storage.listaFavoritos ) {
    $Cake.addFavorite(favorito)
}

// TODO isolar criação do objeto
$botaoFavoritos.addEventListener('click', function adicionaNaBarra() {
    const enderecoFavorito = $iframeJanela.contentWindow.location.href
    const nomeFavorito = prompt("Qual o nome do favorito?") || enderecoFavorito
    
    const favorito = {
        nome: nomeFavorito,
        descricao: enderecoFavorito
    }
    
    storage.adiciona(favorito)
    $Cake.addFavorite(favorito)
})
