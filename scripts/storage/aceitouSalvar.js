export let aceitouSalvar = JSON.parse(localStorage.getItem('aceitouSalvar'))

// Setter
// Seta um valor
// Altera o valor da variável
export function salvar(valor){
    // Só aqui dá pra mudar o valor
    localStorage.setItem('aceitouSalvar', valor)
    aceitouSalvar = valor
}