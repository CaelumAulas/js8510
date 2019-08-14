import { paginaInicial } from "/scripts/storage/paginaInicial.js"

import { carregar } from '/scripts/navegacao/carregar.js'

$botaHome.addEventListener('click', carregarInicial)

function carregarInicial () {
    carregar(paginaInicial)
}