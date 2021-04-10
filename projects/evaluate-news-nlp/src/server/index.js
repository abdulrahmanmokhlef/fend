var path = require('path')
const express = require('express')
const app = express()
var port = process.env.PORT || 8081;

var bodyParser = require('body-parser')
var cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')


app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})


// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

app.get('/getApiKey', function(req, res){
  let key ={
    key:"201c43f2114dfcda474c3967055f646d"
  };
  res.json(key);
})



