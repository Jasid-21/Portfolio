const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');






app.use(express.static('static'));
app.set('port', process.env.PORT || 3000);





app.get('/', function(req, resp){
    resp.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/get_json', function(req, resp){
    try{
        const file = fs.readFileSync(path.join(__dirname, 'static', 'projects.json'), 'utf-8');
        resp.send({status: 1, json: file});
    }catch(error){
        console.log(error);
        resp.send({status: 0, message: "Error geting json file of projects..."});
    }
});






app.listen(app.get('port'), function(){
    console.log("App listening in port: ", app.get('port'));
})