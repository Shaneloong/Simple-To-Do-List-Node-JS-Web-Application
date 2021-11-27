const express = require('express');
const bodyParser = require('body-parser');
const e = require('express');

const app = express();

app.use(bodyParser.urlencoded({extended: true})); 

app.set('view engine', 'ejs');


app.get("/", function(req, res){
    
    var today = new Date();
    var currentDay = today.getDay();
    var options ={
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    var date = today.toLocaleDateString('en-US', options);
    var day="";
    var message = "";
    var currentDayName ="";

    if (currentDay === 6 || currentDay === 0){
        day = "Weekend";
        message ="Is time to have a great rest!";
    }
    else{
        day ="Weekday";
        message ="Is time to work for day and night!";
    }
    switch (currentDay) { 
        case 0:
            currentDayName ="Sunday";
            break;
        case 1:
            currentDayName ="Monday";
            break;
        case 2:
            currentDayName ="Tuesday";
            break;
        case 3:
            currentDayName ="Wednesday";
            break;     
        case 4:
            currentDayName ="Thursday";
            break;   
        case 5:
            currentDayName ="Friday";
            break;
        case 6:
            currentDayName ="Saturday";
            break;
        default:
            console.log("Error: current day is equal to: " + currentDay);
}
    res.render('list', {kindOfDay: date, 
                        messageOutput: message,
                        today: currentDayName});
});

app.post("/", function(req, res){
    console.log("Hello World");
});

app.listen(3000, function(){
    console.log("Server is started successfully on port 3000");
});