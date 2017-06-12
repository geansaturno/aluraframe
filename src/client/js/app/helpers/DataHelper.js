// jshint esversion:6

class DataHelper {

    constructor(){
        throw new Error('Classe ' + this.constructor.name + ' não pode ser instanciada');
    }

    static textToDate(text){
        if(!/^\d{2}\/\d{2}\/\d{4}$/.test(text)){
            throw Error('Data deve estar no formato dd/mm/aaaa');
        }

        return new Date(...text.split('/').reverse()
                .map((item, indice) => item - indice % 2)
        );
    }

    static dateToText(date){
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

}
