
if(!Array.prototype.includes) {

    console.log('Polyfill para array criado');

    Array.prototype.includes = function(elemento){
        return this.indexOf(elemento) != -1;
    }
}
