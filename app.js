const fs = require("fs");
const inquirer = require("inquirer");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");

const internHtml = require("./templates/intern");
const engineerHtml = require("./templates/engineer");
const mainHtml = require("./templates/main");
const managerHtml = require("./templates/manager");

