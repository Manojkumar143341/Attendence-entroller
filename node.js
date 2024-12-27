const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3500;

app.get('^/$|/index(.html)?',(req,res) => {
  res.sendFile(path.join(__dirname,'index.html'));
})
app.get('/attendence(.html)?',(req,res) => {
  res.redirect(301,('index.html'));
})

app.listen(PORT ,()=>console.log('server running on port $(PORT)'));
