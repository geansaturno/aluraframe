// jshint esversion:6

class Codigo {

    constructor(codigo){
        if(!/\D{3}-\D{2}-\d{2}/.test(codigo)) {
            throw new Error('Código invávalido');
        }

        this._value = codigo;
    }

    get value() {
        return this._value;
    }
}
