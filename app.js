const fs = require("fs");
const inquirer = require("inquirer");
const engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const employeeHtml = require("./templates/employee");
const engineerHtml = require("./templates/engineer");
const mainHtml = require("./templates/main");
const managerHtml = require("./templates/manager");

