// Declaração de função precisa de um nome

// Expressão de função
// IIFE só pra proteger/criar um escopo

import { aceitouSalvar } from "/scripts/storage/aceitouSalvar.js"
import { paginaInicial, salvar } from "/scripts/storage/paginaInicial.js"
import { formataEndereco } from "/scripts/endereco/formataEndereco.js"

if(aceitouSalvar === true) {
    let enderecoInicial = paginaInicial

    if (!enderecoInicial) {
        enderecoInicial = prompt("Digite o endereço inicial")
    }
    // const isEnderecoPreenchido = enderecoInicial !== null && enderecoInicial !== ""

    if(enderecoInicial){
        enderecoInicial = formataEndereco(enderecoInicial);
        salvar(enderecoInicial)
    }
}


