const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const mailer = require('./mailer');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post('/submit', (req, res) => {
  $.ajax({
    url: 'https://barbaramooney.herokuapp.com/',
    type: 'POST',
    headers: {'Accept': 'application/json;'},
    data: {
      "subject": "Subject message",
      "message": "body text"
    },
    }).done(function (res) {
      console.log(res); // it shows your email sent message.
    });
  mailer(req);
  res.redirect('/?alert=true');
})

app.get('/streeteats', (req, res) => {
  res.sendFile(path.join(__dirname + '/streeteats.html'));
});

app.get('/todoapp', (req, res) => {
  res.sendFile(path.join(__dirname + '/todoapp'));
});

app.get('/changecalculator', (req, res) => {
  res.sendFile(path.join(__dirname + '/changecalculator'));
});

module.exports = app;