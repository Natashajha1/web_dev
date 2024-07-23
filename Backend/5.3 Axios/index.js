import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    console.log(result);
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {
  try{
  console.log(req.body);
  var type=req.body.type;
  var participants=req.body.participants;
  const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`);
  var soln=response.data;
  console.log(soln);
  var one=soln[Math.floor(Math.random()*soln.length)];
  console.log("RESULT",one);
  res.render("index.ejs",{data:one});
  }catch{
  res.render("index.ejs",{error:"No activities that match your criteria."});
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
