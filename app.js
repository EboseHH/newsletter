const express = require("express");
const bodyParser = require("body-parser");
const request = "request";

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(res,req){
    const username = req.body.name
    const email = req.body.email
})


app.listen(3000, function () {
  console.log("server is running on port 3000");
});


