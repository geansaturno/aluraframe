// jshint esversion: 6

class View {

    constructor(element){
        this._element = element;
    }

    template(model){
        throw new Error('Método template deve ser implemetado');
    }

    render(model) {
        this._element.innerHTML = this.template(model);
    }
}
