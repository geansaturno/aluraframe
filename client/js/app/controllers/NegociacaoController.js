/*jshint esversion:6*/

class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputData         = $('#data');
        this._inputValor        = $('#valor');
        this._inputQuantidade   = $('#quantidade');

        this._listaNegociacoes  = new ListaNegociacoes();

        this._negociacoesView   = new NegociacoesView($('#negociacoes'));
        this._negociacoesView.render(this._listaNegociacoes.negociacoes);

        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagem = new Mensagem();
    }

    adicionar(event){
        event.preventDefault();

        let negociacao = new Negociacao(DataHelper.textToDate(this.data), this.quantidade, this.valor);

        this._listaNegociacoes.addNegociacao(negociacao);
        this._negociacoesView.render(this._listaNegociacoes.negociacoes);

        this._limpaFormulario();
        this._inputData.focus();

        this._mensagem.texto = 'Negociação adicionada com sucesso';
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
