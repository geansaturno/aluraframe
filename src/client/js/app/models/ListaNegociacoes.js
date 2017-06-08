// jshint esversion: 6

class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    addNegociacao(negociacao){
        this._negociacoes.push(negociacao);
        if(this._callback) this._callback(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
        if(this._callback) this._callback(this._negociacoes);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    get total(){
        return this._negociacoes.reduce((total, n) => total + n.volume, 0);
    }
 }
