// Declaração de função precisa de um nome

// Expressão de função
// IIFE só pra proteger/criar um escopo

import aceitouSalvar from "/scripts/pedeInformacoesIniciais/aceitouSalvar.js"

if(aceitouSalvar === true) {
    let enderecoInicial = localStorage.getItem('paginaInicial')

    if (!enderecoInicial) {
        enderecoInicial = prompt("Digite o endereço inicial")
    }
    // const isEnderecoPreenchido = enderecoInicial !== null && enderecoInicial !== ""

    if(enderecoInicial){
        if (
            enderecoInicial.substring(0, 7) !== "http://"  &&
            enderecoInicial.substring(0, 8) !== "https://" 
        ) {
            enderecoInicial = "http://" + enderecoInicial
        }

        localStorage.setItem("paginaInicial", enderecoInicial)

        $inputEndereco.value = enderecoInicial
        $iframeJanela.src = enderecoInicial
    }
}

