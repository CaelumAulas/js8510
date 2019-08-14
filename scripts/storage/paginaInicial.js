export let paginaInicial = localStorage.getItem('paginaInicial')

export function salvar(valor) {
    localStorage.setItem("paginaInicial", valor)
    paginaInicial = valor
}