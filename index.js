const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express(); 

app.set('view engine', 'ejs'); 

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
        const num = Math.random() * 75; 
        ticket.push(Math.floor(num)); 
    }
    let mega = Math.random() * 20; 
    mega = Math.floor(mega);
    ticket.push(`Mega: ${mega}`); 
    res.render('ticket', {ticket: ticket}); 
})