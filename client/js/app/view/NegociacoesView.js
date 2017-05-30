// jshint esversion: 6

class NegociacoesView extends View{

    template(model) {
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
                    ${model.map(n => `
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
                        ${model.reduce((total, n) => total + n.volume, 0.0)}
                    </td>
                </tfoot>
            </table>
        `;
    }
}
