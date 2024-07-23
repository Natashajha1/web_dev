import express from "express"
import ejs from "ejs"

const app=express();
const port=3000;

const d = new Date();
let day = d.getDay();

app.get("/", (req, res) => {
    if(day===0||day===6)
    res.render("index.ejs", {date:"weekend",flag:"have fun"});
    else
    res.render( "index.ejs",{date:"weekday",flag:"work hard"});

  });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  