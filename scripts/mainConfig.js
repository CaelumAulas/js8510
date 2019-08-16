import {
    paginaInicial, 
    salvar as salvarPaginaInicial, 
    aceitouSalvar, 
    salvarAceitou, 
    salvarNaoAceitou
} from "/scripts/storage/index.js"

import { formataEndereco } from "/scripts/endereco/formataEndereco.js"
import { CakeEnderecoInvalidoError } from "/scripts/erros/CakeEnderecoInvalidoError.js"

$inputPaginaInicial.value = paginaInicial
$inputAceitouSalvar.checked = aceitouSalvar

// Função de callback
$botaoSalvar.onclick = salvar

// Declaraçao de função
// Toda declaração sofre hoisting
// Function declaration
function salvar() {
    try {
        const enderecoFormatado = formataEndereco($inputPaginaInicial.value)
        
        $inputPaginaInicial.value = enderecoFormatado
        salvarPaginaInicial(enderecoFormatado)
    } catch(erro) {
        // verificar o tipo do objeto
        if(erro instanceof CakeEnderecoInvalidoError){
            alert("Pagina inicial inválida: " + erro.endereco)
            $inputPaginaInicial.value = paginaInicial
            $inputPaginaInicial.focus()
        } else if(erro instanceof Error) {
            $inputPaginaInicial.value = ""
            console.warn(erro.message)
        } else {
            throw erro
        }
    }

    
    // Expressão de função
    // Função como valor de uma variável
    // Function expression
    const funcaoAceitouSalvar = $inputAceitouSalvar.checked 
        ? salvarAceitou 
        : salvarNaoAceitou
    
    funcaoAceitouSalvar()   
}

$botaoApagar.addEventListener('click', function apagaTudo(){
    const listaDeProprieadesFixas = ["aceitouTermos", "aceitouSalvar"]

    const listaDasPropriedades = Object.keys(localStorage)
    for (const nomeDaProp of listaDasPropriedades) {

        const ehFixa = listaDeProprieadesFixas.includes(nomeDaProp)
        
        if(!ehFixa) localStorage.removeItem(nomeDaProp)
    }

    // Apagar tudo menos paginaAtual
    const listaDePropriedadesFixasSesion = ['paginaAtual']
    const listaDasPropriedadesSession = Object.keys(sessionStorage)

    for(const nomeDaProp of listaDasPropriedadesSession) {
        const ehFixa = listaDePropriedadesFixasSesion.includes(nomeDaProp)
        if(!ehFixa) sessionStorage.removeItem(nomeDaProp)
    }

    window.location.reload()
})
