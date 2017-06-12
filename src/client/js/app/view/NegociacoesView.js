// jshint esversion: 6

class NegociacoesView extends View{

    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th onclick="negociacao.ordenar('data')">DATA</th>
                        <th onclick="negociacao.ordenar('quantidade')">QUANTIDADE</th>
                        <th onclick="negociacao.ordenar('valor')">VALOR</th>
                        <th onclick="negociacao.ordenar('volume')">VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                </tbody>
                    ${model.negociacoes.map(n => `
                        <tr>
                            <td>${DataHelper.dateToText(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                        `).join('')
                    }
                <tfoot>
                    <td colspan="3"></td>
                    <td>
                        ${model.total}
                    </td>
                </tfoot>
            </table>
        `;
    }
}
