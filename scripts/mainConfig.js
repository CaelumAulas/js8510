import { paginaInicial, salvar as salvarPaginaInicial } from "/scripts/storage/paginaInicial.js"
import { aceitouSalvar, salvarAceitou, salvarNaoAceitou } from "/scripts/storage/aceitouSalvar.js"


$inputPaginaInicial.value = paginaInicial
$inputAceitouSalvar.checked = aceitouSalvar

// Função de callback
$botaoSalvar.onclick = salvar

// Declaraçao de função
// Toda declaração sofre hoisting
// Function declaration
function salvar() {

    salvarPaginaInicial($inputPaginaInicial.value)
    
    // Expressão de função
    // Função como valor de uma variável
    // Function expression
    const funcaoAceitouSalvar = $inputAceitouSalvar.checked 
        ? salvarAceitou 
        : salvarNaoAceitou
    
    funcaoAceitouSalvar()   
}


