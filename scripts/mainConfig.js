import { paginaInicial, salvar as salvarPaginaInicial } from "/scripts/storage/paginaInicial.js"
import { aceitouSalvar, salvarAceitou, salvarNaoAceitou } from "/scripts/storage/aceitouSalvar.js"
import { formataEndereco } from "/scripts/endereco/formataEndereco.js"


$inputPaginaInicial.value = paginaInicial
$inputAceitouSalvar.checked = aceitouSalvar

// Função de callback
$botaoSalvar.onclick = salvar

// Declaraçao de função
// Toda declaração sofre hoisting
// Function declaration
function salvar() {
    const enderecoFormatado = formataEndereco($inputPaginaInicial.value)
    $inputPaginaInicial.value = enderecoFormatado
    salvarPaginaInicial(enderecoFormatado)
    
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
