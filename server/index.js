import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express()
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'masudrana',
    database : 'test',
    insecureAuth : true
})



app.get("/", (req, res)=>{
    res.json("hello this is backend");
})

app.post("/add", (req, res) => {
  const q = "INSERT INTO info(`name`, `phone`, `address`, `photoURL`,`date`, `method`, `totalAmount`, `pay`,`due`,`note`) VALUES (?)";

  const values = [
    req.body.name,
    req.body.phone,
    req.body.address,
    req.body.photoURL,
    req.body.date,
    req.body.method,
    req.body.totalAmount,
    req.body.pay,
    req.body.due,
    req.body.note,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.get("/info", (req, res)=>{
    const q = "SELECT * FROM info";
    db.query(q, (err, data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})


app.listen(8080,()=>{
    console.log("server running on port 8080");
})