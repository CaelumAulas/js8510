/*
    Expressão de
    Função
    Imediatamente
    Invocada

    Immediatelly
    Invoked
    Function
    Expression

    IIFE
    Módulo
*/

// Explodindo ou desestruturando o módulo
// Módulo inteiro é um objeto na vdd
import * as storage from "/scripts/storage/aceitouSalvar.js"

if(storage.aceitouSalvar === null) {
    const aceitouSalvarPrompt = confirm("Você aceita que suas infos sejam salvas?")

    // if ternário
    //  decide um valor
    const funcaoSalvar = aceitouSalvarPrompt 
        ? storage.salvarAceitou 
        : storage.salvarNaoAceitou

    funcaoSalvar()
}