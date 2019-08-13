;(function() {

    const hjkasdas = (function(){

        let aceitouSalvar = JSON.parse(localStorage.getItem('aceitouSalvar'))
        
        if(aceitouSalvar === null) {
            aceitouSalvar = confirm("Você aceita que suas infos sejam salvas?")
            localStorage.setItem('aceitouSalvar', aceitouSalvar)
        }
        
        return aceitouSalvar
    
    })()
    
    
    ;(function() {
        if(hjkasdas === true) {
            let enderecoInicial = localStorage.getItem('paginaInicial')
        
            if (!enderecoInicial) {
                enderecoInicial = prompt("Digite o endereço inicial")
            }
            // const isEnderecoPreenchido = enderecoInicial !== null && enderecoInicial !== ""
        
            if(enderecoInicial){
                if (
                    enderecoInicial.substring(0, 7) !== "http://"  &&
                    enderecoInicial.substring(0, 8) !== "https://" 
                ) {
                    enderecoInicial = "http://" + enderecoInicial
                }
        
                localStorage.setItem("paginaInicial", enderecoInicial)
        
                $inputEndereco.value = enderecoInicial
                $iframeJanela.src = enderecoInicial
            }
        }
        
        
    })()
    
    
    

})()

