// Imports
const express = require('express');
const path = require('path')
const app =express(),
    //   bodyParser = require('body-parser');
      port = 8080;

// app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/views')));
app.get('/', (req,res) => {
res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.listen(port,()=>{
    console.log(`server listening on the port::${port}`)
    console.log(path.join())
    console.log(__dirname)
})