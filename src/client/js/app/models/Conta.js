// jshint esversion:6

class Conta {

    constructor(saldo){
        this._saldo = saldo;
    }

    get saldo(){
        return this._saldo;
    }

    atualiza(taxa){
        throw new Error('Atualiza precisa ser emplementado');
    }
}
