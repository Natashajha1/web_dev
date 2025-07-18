import express from "express"
const app = express();

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Page</h1>");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
