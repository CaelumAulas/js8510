const http = require('http')

const variavelNossa = require('./servidor-config')

console.log("Valor: " + variavelNossa)
console.log("Servidor inciando")

const servidor = http.createServer()

servidor.listen(4200)


