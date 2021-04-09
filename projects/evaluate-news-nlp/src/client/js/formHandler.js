function handleSubmit(event) {
    event.preventDefault()
    debugger
    let apiKey = fetch('http://localhost:8081/getApiKey')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        debugger
        let url = "https://api.meaningcloud.com/sentiment-2.1";
        let text = document.getElementById('text').value;
        let lang = "en";
        let key = data.key;
        Client.processText(url, text, lang,  key);
    });
    
}

export { handleSubmit }
