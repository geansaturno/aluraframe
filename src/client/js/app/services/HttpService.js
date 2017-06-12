// jshint esversion:6

class HttpService {

    get(url){

        return new Promise((resolve, reject) => {
            let xhr = XMLHttpRequestFactory.create('GET', url, json => resolve(json), error => reject(error));
            xhr.send();
        });
    }

    post(url, dado) {
        return new Promise((resolve, reject) => {
            let xhr = XMLHttpRequestFactory.create('POST', url, json => resolve(json), error => reject(error));
            xhr.send(JSON.stringify(dado));
        });
    }
}
