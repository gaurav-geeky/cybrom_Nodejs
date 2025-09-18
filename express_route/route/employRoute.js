const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.send("<h1>We are employers of capgemini group. </h1>")
})

route.get('/home', (req, res) => {
    res.send("<h1>Welcome to the employers home page. we are employers of capgemini group. </h1>")
})

route.get('/salary', (req, res) => {
    res.send("<h1>Welcome to the Salary page of Employees. class A employees sal - 70k <br> class B employees sla - 40k <br> class C employees sla - 15k. </h1>")
})

route.get('/work', (req, res) => {
    res.send("<h1> Welcome to work profile page. class A has technical work, class B has Non-technical work and class C will manage lower works</h1>")
})

route.get('/material', (req, res) => {
    res.send("<h1> Employees will be provided with an ID card, class A transport facility etc. </h1>")
})

module.exports = route; 