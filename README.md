
## Apostila atualizada
http://aluno.caelum.com.br/login


 	https://github.com/artdiniz/cake-fake-browser


## Código feito nas aulas:
	https://github.com/CaelumAulas/js8510

## Se manter atualizado:
	
	Pessoas pra seguir no Twitter:
        TODO
	
	Github do TC39:
		https://github.com/tc39/proposals	


## Coisas prontas para o código

  Olá --nome da pessoa aqui--!
 Antes de usar o Cake, precisamos que
 você aceite nossos termos de uso:
 • Você aceita que este software foi
 feito por pessoas que participaram
 do curso de Java.
 • Você aceita que o código dessas
 pessoas pode acessar tudo o que	
 você digitar aqui.
 • Você aceita que tudo aqui está
 em desenvolvimento e por isso não
       recomendamos que você troque de navegador agora

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }

https://developer.mozilla.org/pt-BR/docs/Web/Java/Guide/Regular_Expressions