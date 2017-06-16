const express = require("express");
const app = express();
const hsb = require("hbs");
const port = process.env.PORT || 3000;
//app.set('view engine','html');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
    res.render("home.hbs", {
        pageTitle: 'Home Page',
        year: new Date().getFullYear(),
        welcomeMessage: 'Welcome to my site'
    })
});

app.get("/about", (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About page',
        year: new Date().getFullYear()
    });
});
app.listen(port, () => {
    console.log(`Listen to port ${port}`);
});