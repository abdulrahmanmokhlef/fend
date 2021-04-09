function handleSubmit(event) {
    event.preventDefault()
    debugger
    let url = "https://api.meaningcloud.com/sentiment-2.1";
    let text = document.getElementById('text').value;
    let lang = "en";
    Client.processText(url, text, lang);
}

export { handleSubmit }
