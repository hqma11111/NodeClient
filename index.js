const express=require('express');
const path = require('path');
const app=express();
app.get('/*', (req, res) => {
res.sendFile(path.join(__dirname, './index.html'));
})
const htmlPort = process.env.PORT || 4000;
app.listen(htmlPort,()=>{
    console. log(`App running on ${htmlPort}`);
})