const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();

const items = [];
const workItems =[];

app.use(bodyParser.urlencoded({extended: true})); 

app.use(express.static('public'));

app.set('view engine', 'ejs');


app.get("/", function(req, res){
    
    const day = date.getDate();

    res.render('list', {listTitle: day, newListItem: items, actionRoute: "/"});
});

app.post("/", function(req, res){

    const item = req.body.newItem;

    if (req.body.list === 'Work List'){
        workItems.push(item);
        res.redirect('/work');
    }
    else{
        items.push(item);
        res.redirect('/');
    }

});

app.get('/work', function (req, res){
    res.render('list', {listTitle: "Work List", newListItem: workItems, actionRoute: ''});
});

app.get('/about', function(req, res){
    res.render('about');
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is started successfully on port 3000");
});