const express = require("express");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 3000;
//app.set('view engine','html');
hbs.registerPartials(__dirname+"/views/partials");
app.set('view engine', 'hbs');
app.use(express.static(__dirname + "/public"));

hbs.registerHelper("getCurrentYear",()=>{
return new Date().getFullYear();
});

app.get("/", (req, res) => {
    res.render("home.hbs", {
        pageTitle: 'Home Page',
         welcomeMessage: 'Welcome to my site'
    })
});
app.get("/about", (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About page',
       
    });
});
app.get("/project", (req, res) => {
    res.render('project.hbs', {
        pageTitle: 'Project page',
        message:'Portfolio page here'
    });
});
app.listen(port, () => {
    console.log(`Listen to port ${port}`);
});