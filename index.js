const express = require('express');
const app = express();

app.get('/test',(req,res) => {
    return res.json({hello: "word 2"});
})

app.listen(3333);