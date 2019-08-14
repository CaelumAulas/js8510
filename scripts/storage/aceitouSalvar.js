// Tudo é privado por padrão

// Encapsulado
let aceitouSalvar = JSON.parse(localStorage.getItem('aceitouSalvar'))

// Setter
// Seta um valor
// Altera o valor da variável
function salvar(valor){
    localStorage.setItem('aceitouSalvar', valor)
    aceitouSalvar = valor
}

// Uma função closure
// Closure ou Clausura ou Fechamento
function salvarAceitou() {
    // ambiente da criação
    salvar(true)
}

// Closure
function salvarNaoAceitou() {
   salvar(false)
}

// Revealing Module Pattern
// A partir daqui é público
export {
    aceitouSalvar,
    salvarAceitou,
    salvarNaoAceitou
}