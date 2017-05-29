// jshint esversion: 6

class NegociacoesView {

    constructor(element){
        this._element = element;
    }

    _template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                </tbody>
                    ${
                        model.map(n =>
                        `
                            <td>${DataHelper.dateToText(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        `)
                    }
                <tfoot>
                </tfoot>
            </table>
        `;
    }

    render(model) {
        this._element.innerHTML = this._template(model);
    }
}
