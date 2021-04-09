function processText(event) {
    event.preventDefault()
    debugger
    let key ="201c43f2114dfcda474c3967055f646d";
    let text = document.getElementById('text').value
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
        let sentimented_entity_list = "";
        let sentimented_concept_list = "";

        console.log(res)
        
        document.getElementById('remaining_credits').innerHTML = res.status.remaining_credits;

        document.getElementById('model').innerHTML = res.model;
        document.getElementById('score_tag').innerHTML = res.score_tag;
        document.getElementById('agreement').innerHTML = res.agreement;
        document.getElementById('subjectivity').innerHTML = res.subjectivity;
        document.getElementById('confidence').innerHTML = res.confidence;
        document.getElementById('irony').innerHTML = res.irony;
        document.getElementById('model').innerHTML = res.model;
        document.getElementById('model').innerHTML = res.model;
        document.getElementById('model').innerHTML = res.model;

        res.sentimented_entity_list.forEach(element => {
            sentimented_entity_list +=  element.form + ', ';
        });
        document.getElementById('sentimented_entity_list').innerHTML = sentimented_entity_list;

        res.sentimented_concept_list.forEach(element => {
            sentimented_concept_list +=  element.form + ', ';
        });
        document.getElementById('sentimented_concept_list').innerHTML = sentimented_concept_list;
        

    })
    .catch(error => console.log('error', error));
}

export { processText }
