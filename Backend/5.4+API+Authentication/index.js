import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "demo";
const yourPassword = "demopassword";
const yourAPIKey = "ecccae47-0eed-40ac-8f38-a2e8b7b75d19";
const yourBearerToken = "fa3b6aea-86c8-4852-907f-e123a7f6153c";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
  try{
    const response= await axios.get("https://secrets-api.appbrewery.com/random");
    var ans=JSON.stringify(response.data);
    res.render("index.ejs",{content:ans})
  }catch{

  }
});

app.get("/basicAuth", async(req, res) => {
  try{
    const response= await axios.get("https://secrets-api.appbrewery.com/all?page=2",{
      auth:{
        username:yourUsername,
        password:yourPassword,
      },
    });
    var ans=JSON.stringify(response.data);
    res.render("index.ejs",{content:ans})
  }catch(error){

  }
});

app.get("/apiKey", async(req, res) => {

  try{
    const response= await axios.get(`https://secrets-api.appbrewery.com/filter?score=5&apiKey=${yourAPIKey}`);
    var ans=JSON.stringify(response.data);
    res.render("index.ejs",{content:ans})
  }catch(error){

  }
});

app.get("/bearerToken", async(req, res) => {
  try{
    const response= await axios.get(`https://secrets-api.appbrewery.com/secrets/42`,{
      headers:{
        Authorization: `Bearer ${yourBearerToken}` 
      },
    });
    var ans=JSON.stringify(response.data);
    res.render("index.ejs",{content:ans})
  }catch(error){

  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
