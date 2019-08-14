if(Array.prototype.includes === undefined) {
    Array.prototype.includes = function(nome) {
        return this.indexOf(nome) !== -1
    }
}
