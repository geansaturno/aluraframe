/*jshint esversion:6*/

class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputData         = $('#data');
        this._inputValor        = $('#valor');
        this._inputQuantidade   = $('#quantidade');

        this._listaNegociacoes  = new Bind(new ListaNegociacoes(), new NegociacoesView($('#negociacoes')), 'addNegociacao', 'esvazia');

        this._mensagem = new Bind(new Mensagem(), new MensagemView($('#mensagemView')), 'texto');
    }

    adicionar(event){
        event.preventDefault();

        let negociacao = new Negociacao(DataHelper.textToDate(this.data), this.quantidade, this.valor);

        this._listaNegociacoes.addNegociacao(negociacao);

        this._limpaFormulario();
        this._inputData.focus();

        this._mensagem.texto = 'Negociação adicionada com sucesso';
    }

    apagar() {

        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Negociaçõs apagadas';
    }

    importarNegociacoes() {

        let negociacaoService = new NegociacaoService();

        negociacaoService.negociacoes()
        .then(negociacoes => {
            negociacoes.forEach(negociacao => this._listaNegociacoes.addNegociacao(negociacao));
            this._mensagem.texto = "Negociações importadas com sucesso"
        })
        .catch(error => this._mensagem.texto = error);
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
