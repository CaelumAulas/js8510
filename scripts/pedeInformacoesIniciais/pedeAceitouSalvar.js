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
import { aceitouSalvar, salvar } from "/scripts/storage/aceitouSalvar.js"

if(aceitouSalvar === null) {
    const aceitouSalvarPrompt = confirm("Você aceita que suas infos sejam salvas?")
    salvar(aceitouSalvarPrompt)
}