const fs = require('fs');
const favicon = require('serve-favicon');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

port = process.env.PORT || 8080

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/frontpage'));
app.use(express.static(__dirname + '/public/footer'));
app.use(express.static(__dirname + '/public/nav'));
app.use(express.static(__dirname + '/public/contact'));
app.use(express.static(__dirname + '/public/resume'));
app.use(express.static(__dirname + '/public/projects'));
app.use(express.static(__dirname + '/public/global'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));

const nav = fs.readFileSync(__dirname + "/public/nav/nav.html", "utf-8");
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");
const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");
const projects = fs.readFileSync(__dirname + "/public/projects/projects.html", "utf-8");
const contact = fs.readFileSync(__dirname + "/public/contact/contact.html", "utf-8");
const resume = fs.readFileSync(__dirname + "/public/resume/resume.html", "utf-8");
const importsFrontPage = fs.readFileSync(__dirname + "/public/frontpage/imports.html", "utf-8");
const importsProjects = fs.readFileSync(__dirname + "/public/projects/imports.html", "utf-8");
const importsResume = fs.readFileSync(__dirname + "/public/resume/imports.html", "utf-8");
const importsContact = fs.readFileSync(__dirname + "/public/contact/imports.html", "utf-8");

//Navigation
app.get('/', (req, res)=>{
    res.send(importsFrontPage + nav + frontpage + footer + `</body></html>`);
});

app.get('/projects', (req, res)=>{
    res.send(importsProjects + nav + projects + footer + `</body></html>`);
});

app.get('/resume', (req, res)=>{
    res.send(importsResume + nav + resume + footer + `</body></html>`);
});

app.get('/contact', (req, res)=>{
    res.send(importsContact + nav + contact + footer + `</body></html>`);
});

app.post('/send', function(req, res) {
    // res.send('You sent the name "' + req.body.name + '".');
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
  });

const server = app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});