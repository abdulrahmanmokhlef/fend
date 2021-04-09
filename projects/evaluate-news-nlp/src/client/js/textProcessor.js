function processText(url,text, lang, key) {
    debugger
    var textTemp = text; // adding this temp variable because that value is changed when use trim()
    let regexText = /^$/;
    if(textTemp.trim().match(regexText)){
        alert("You must insert a text.");
        return false;
    }

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
        
        res.sentimented_entity_list.forEach(element => {
            sentimented_entity_list +=  element.form + ', ';
        });
        // remove comma and white space from last word in the string
        sentimented_entity_list = sentimented_entity_list.substring(0, sentimented_entity_list.length - 2);
        document.getElementById('sentimented_entity_list').innerHTML = sentimented_entity_list;

        res.sentimented_concept_list.forEach(element => {
            sentimented_concept_list +=  element.form + ', ';
        });
        sentimented_concept_list = sentimented_concept_list.substring(0, sentimented_concept_list.length - 2);
        document.getElementById('sentimented_concept_list').innerHTML = sentimented_concept_list;
        

    })
    .catch(error => console.log('error', error));
}

export { processText }
