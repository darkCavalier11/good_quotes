const randomQuote = require('./quote')
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const port = process.env.PORT || 3000;
const app = express()
app.use(express.static(path.join(__dirname, '/templates/views')))
app.set('views',path.join(__dirname, '/templates/views'))
app.set('view engine', 'hbs')
app.get('/',(req, res)=>{
    randomQuote(callback=(quote, author)=>{
        res.render('index',{quote:quote, author:author})
    })
})
app.listen(port)