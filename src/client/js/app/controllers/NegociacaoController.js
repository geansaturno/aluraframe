/*jshint esversion:6*/

class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputData         = $('#data');
        this._inputValor        = $('#valor');
        this._inputQuantidade   = $('#quantidade');

        let self = this;
        this._listaNegociacoes  = new Proxy(new ListaNegociacoes(), {
            get(target, prop, receiver){

                if(['addNegociacao', 'esvazia'].includes(prop) && typeof(target[prop]) == typeof(Function)){

                    return function(){
                        Reflect.apply(target[prop], target, arguments);
                        self._negociacoesView.render(target.negociacoes);
                    };
                }
                return Reflect.get(target, prop, receiver);
            }
        });

        this._negociacoesView   = new NegociacoesView($('#negociacoes'));
        this._negociacoesView.render(this._listaNegociacoes.negociacoes);

        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagem = new Mensagem();
    }

    adicionar(event){
        event.preventDefault();

        let negociacao = new Negociacao(DataHelper.textToDate(this.data), this.quantidade, this.valor);

        this._listaNegociacoes.addNegociacao(negociacao);

        this._limpaFormulario();
        this._inputData.focus();

        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.render(this._mensagem);
    }

    apagar() {

        this._listaNegociacoes.esvazia();

        this._mensagem.texto = 'Negociaçõs apagadas';
        this._mensagemView.render(this._mensagem);

    }

    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0;
    }

    get data(){
        return this._inputData.value;
    }

    get valor(){
        return this._inputValor.value;
    }

    get quantidade(){
        return this._inputQuantidade.value;
    }
}
