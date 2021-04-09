function handleSubmit(event) {
    event.preventDefault()
    debugger
    let text = document.getElementById('text').value
    Client.processText(text);
}

export { handleSubmit }
