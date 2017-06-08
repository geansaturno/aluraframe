// jshint esversion:6

class NegociacaoService {

    negociacoesDaSemana(cb){

        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/semana');
        xhr.onreadystatechange = ()=>{

            if(xhr.readyState == XMLHttpRequest.DONE){
                if(xhr.status == 200){
                    cb(null, JSON.parse(xhr.responseText)
                    .map(json => new Negociacao(new Date(json.data), json.quantidade, json.valor)));
                } else {
                    cb('Não foi possivel carregar as negociações', null)
                }
            }
        };
        xhr.send();

    }

}
