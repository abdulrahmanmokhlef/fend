function processText(event) {
    event.preventDefault()
    debugger
    let key ="201c43f2114dfcda474c3967055f646d";
    let text = document.getElementById('w3review').value
    let lang = "en"
    let url = "https://api.meaningcloud.com/sentiment-2.1";

    const formdata = new FormData();
    formdata.append("key", key);
    formdata.append("txt", text);
    formdata.append("lang", lang);  // 2-letter code, like en es fr ...

    const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
    };

    const response = fetch(url, requestOptions)
    .then(response => response.json()
    )
    .then(function(res){
        debugger
        console.log(res)
        return res;
    })
    .catch(error => console.log('error', error));
}

export { processText }
