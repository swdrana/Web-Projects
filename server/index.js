const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 8080;

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.get('/', async(req,res)=>{
    res.send('MR Computer Server is running');
})

app.listen(port, ()=>{
    console.log(`MR Computer Server is running on port ${port}`);
})