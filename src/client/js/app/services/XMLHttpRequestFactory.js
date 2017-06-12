// jshint esversion:6

class XMLHttpRequestFactory {

    static create(method, url, sucess, fail){

        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onreadystatechange = () => {

            if(xhr.readyState == XMLHttpRequest.DONE){
                if(xhr.status == 200){
                    sucess(JSON.parse(xhr.responseText));
                } else {
                    fail(xhr.responseText)
                }
            }
        };

        if(method == "POST"){
            xhr.setRequestHeader("Content-type", "application/json");
        }

        return xhr;
    }
}
