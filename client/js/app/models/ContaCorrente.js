// jshint esversion:6

class ContaCorrente extends Conta {

    atualiza(taxa) {
        this._saldo *= taxa;
    }
}
