// jshint esversion:6

class NegociacaoService {

    constructor(){
        this._http = new HttpService();
    }

    negociacoes(){
        return new Promise((resolve, reject) => {
            Promise.all([
                this.negociacoesDaSemana(),
                this.negociacoesDaSemanaAnterior(),
                this.negociacoesDaSemanaRetrasada()
            ])
            .then(negociacoes => {
                resolve(negociacoes.reduce((newArray, array) => newArray.concat(array) , []));
            })
            .catch(error => reject(error))
        });
    }

    negociacoesDaSemana(){
        return new Promise((resolve, reject) => {
            this._http.get('negociacoes/semana')
            .then(negociacoes => resolve(negociacoes.map(json => new Negociacao(new Date(json.data), json.quantidade, json.valor))))
            .catch(error => {
                console.log(error);
                reject('Não foi possível carregar as negociações da semana');
            });
        });
    }

    negociacoesDaSemanaAnterior(){
        return new Promise((resolve, reject) => {

            this._http.get('negociacoes/anterior')
            .then(negociacoes => resolve(negociacoes.map(json => new Negociacao(new Date(json.data), json.quantidade, json.valor))))
            .catch(error => {
                console.log(error);
                reject('Não foi possível carregar as negociações da semana anterior');
            });
        });
    }

    negociacoesDaSemanaRetrasada(){
        return new Promise((resolve, reject) => {
            this._http.get('negociacoes/retrasada')
            .then(negociacoes => resolve(negociacoes.map(json => new Negociacao(new Date(json.data), json.quantidade, json.valor))))
            .catch(error => {
                console.log(error);
                reject('Não foi possível carregar as negociações da semana retrasada');
            });
        });
    }
}
