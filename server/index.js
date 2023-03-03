import express from "express";
import mysql from "mysql";

const app = express()

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'masudrana',
    database : 'test',
    insecureAuth : true
})

app.use(express.json());


app.get("/", (req, res)=>{
    res.json("hello this is backend");
})

app.get("/books", (req, res)=>{
    const q = "SELECT * FROM books";
    db.query(q, (err, data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books", (req, res) => {
    const q = "INSERT INTO books(`title`, `desc`) VALUES (?)";
  
    const values = [
      req.body.title,
      req.body.desc
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });

app.listen(8080,()=>{
    console.log("server running on port 8080");
})