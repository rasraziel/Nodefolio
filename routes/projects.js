const router = require("express").Router();

/*
    Project Schema
        Title - (string)
        Description: (string)
        StartDate: (date)
        EndDate: (date)
        Language(s): (array)
        Tech used: (array)
        Image: (string)
        HostedLink: (string)
        GitLink: (string)
*/

/* On the projects page fetch all the projects from the route below */


const projects = [{
    title: "Nordic Motorhomes",
    description: "Nordic Motorhomes is a web app that has to do with Motorhome rentals. It was done using Java, Spring MVC, Thymeleaf, HTML, CSS and MySQL.",
    startDate: new Date("2020-04-01"),
    endDate: new Date("2020-06-30"),
    gitLink: "https://github.com/rasraziel/NordicMotorhomes",
    link: "https://nordic-motorhomes.herokuapp.com/",
    image: "/images/port1.jpg"
}, 
{
    title: "Danish Salary Calculator",
    description: "The Danish Salary Calculator is an Android app that calculates Danish salaries and taxes. It was developed with Java and Android Studio and is freely available on Google Play.",
    startDate: new Date("2020-07-01"),
    endDate: new Date("2021-09-30"),
    link: "https://play.google.com/store/apps/details?id=com.rasapps.salary",
    image: "/images/port2.jpg"
},
{
    title: "Node.js study page",
    description: "This is a web app that documents the NodeJS learning process. It was developed with NodeJS, Vanilla JavaScript, jQuery, HTML5 and CSS3.",
    startDate: new Date("2021-03-09"),
    endDate: new Date("2021-03-24"),
    gitLink: "https://github.com/rasraziel/NodeJsDocumentation",
    link: "https://my-node-documentation.herokuapp.com/",
    image: "/images/port3.jpg"
},
{
    title: "VRNova Courses",
    description: "VrNova Courses is a web app that was developed for VRNova. It has to do with buying/viewing online courses offered by VRNova. This app was developed with ReactJS, Spring MVC, Hibernate, MySQL, HTML5, CSS3. You are free to register and try the prototype demo version with simulated data.",
    startDate: new Date("2020-10-01"),
    endDate: new Date("2020-11-30"),
    link: "https://vrnova-frontend.herokuapp.com/",
    image: "/images/port4.jpg"
}];

router.get("/projects/all", (req, res) => {
    res.send({ projects });
});

module.exports = {
    router
};