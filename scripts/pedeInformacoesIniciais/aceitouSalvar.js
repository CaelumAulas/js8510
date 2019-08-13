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

let aceitouSalvar = JSON.parse(localStorage.getItem('aceitouSalvar'))

if(aceitouSalvar === null) {
    aceitouSalvar = confirm("Você aceita que suas infos sejam salvas?")
    localStorage.setItem('aceitouSalvar', aceitouSalvar)
}

export default aceitouSalvar
