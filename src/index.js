const express = require('express')
const app = express()

const PORT = 2000


// '/' it is the basic route for our req and res if we will use '/hello' then our basic workinf is from hello
app.get("/",(req,res) =>{
   // console.log({res});
    res.status(200).send("Hello World");
    //res.send('Hello World');
})


app.post('/', function (req, res) {
    
    res.send('Got a POST request');
  })

app.listen(PORT, () => {
    console.log("==> Server is Connected")
});
