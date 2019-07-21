const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express(); 
const urlParserEncoder = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs'); 
app.use(express.static(path.join(__dirname, 'public', 'assets')));

app.listen(5000, (err) => {
    if (err) {
        console.log("Port occupied"); 
    } else {
        console.log("Connected to port 5000");
    }
}); 

// app.use('assets', express.static('assets')); 

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); 
})

app.get("/ticket", (req, res) => {
    console.log("found ticket");
    let ticket = []; 
    for (let i = 0; i < 5; i++) {
        const num = Math.random() * 70; 
        if (num > 69.5) {
            num = 70; 
        }
        ticket.push(Math.floor(num)); 
    }
    let mega = Math.random() * 25; 
    if (mega > 24.5) {
        mega = 25;
    }
    mega = Math.floor(mega);
    ticket.push(`Mega: ${mega}`); 
    res.render('ticket', {ticket: ticket}); 
})

app.post("/customticket", urlParserEncoder, (req, res) => {
    let ticket = []; 
    ticket.push(req.body.first); 
    ticket.push(req.body.second);
    ticket.push(req.body.third);
    ticket.push(req.body.fourth);
    ticket.push(req.body.fifth);
    ticket.push(`Mega: ${req.body.mega}`);
    res.render('ticket', {ticket:ticket});
});

app.post("/check", urlParserEncoder, (req, res) => {
    let result = []; 
    for (let i = 0; i < 5; i++) {
        let num = Math.random() * 70; 
        if (num > 69.5) {
            num = 70; 
        }
        num = Math.floor(num); 
        result.push(num);
    }
    let num = Math.random() * 25; 
    if (num > 24.5) {
        num = 25; 
    } 
    num = Math.floor(num); 
    result.push(`Mega: ${num}`); 
    let match = true; 
    for (let i = 0; i < result.length; i++) {
        if (result[i] !== req.body.ticket[i]) {
            match = false; 
        }
    }
    res.render('result', {result: result, match: match}); 

})