const express = require('express');
const app = express();
const list = [];
app.get("/", (req,res) => {
    // res.send("hello");
    const st = "This from page";
    res.render("index.ejs", {st, list});
});

app.get("/Contact.ejs", (req,res) => {
    res.render("Contact.ejs");
});
app.get("/getData", (req, res)=>{
    const data = req.query;
      list.push(data);  
    console.log(list);
    res.redirect("/")
   
});
app.get('/app.data:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is: ${userId}`);
});



app.listen(3300, () =>{
    console.log("Server 3300");
});