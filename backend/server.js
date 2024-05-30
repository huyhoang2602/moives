const express = require('express');
const route = require('./route/movie');
const cors = require('cors');
const app = express();

const port = 3700;
app.use(cors());
app.use(express.json());


app.get('/api/video',(req,res) => {
    res.json('https://vip.opstream11.com/share/2aa997b8fcedde0b8b1d430704d322db');
})

app.use('/',route);

app.listen(3700,(req,res)=>{
    console.log('server is running');
})