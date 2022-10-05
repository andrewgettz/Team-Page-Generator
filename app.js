const inquirer = require('inquirer');
const fs = require('fs');


//internal modules 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer'); 
const Intern = require('./lib/Intern'); 

const questions = require('./questions'); 
const render = require('./lib/htmlRenderer'); 
const { Sequelize } = require('sequelize/types');


//Array to contain all employee objects to render HTML 
const employees = []; 


//function to create a manager object 
async function createManager() {
    let managerResponses = await inquirer.prompt(questions.manager);



//create new object from class and add to employee array
let newManager = new Manager
    (managerResponses.mgrName, 
        managerResponse.mgrId, 
        managerResponses.mgrEmail, 
        managerResponses.mgrOffice); 

employees.push(newManager); 

console.log("Thanks! We've added a new manager to the team: ", newManager); 
}; 

// Function to ask if they'd like to create a new team member 
async function confirmEmployee(){

    //Would you like to add another team member? 
    let confirmEmployee = await inquirer.prompt(questions.create); 

    switch (confirmEmployee.confirmEmp) {
        case false; 
        console.log("Thank you for your input so far. Here are your team members: ", employees); 
        console.log('Generating your HTML page next...'); 
        return; 
    
    //If yes, they'd like to add another team member, ask whether they'd like to create an Engineer or Intern
    case true: 
        await createEmployee(); 
    };
}; 
//Function to create Enignner or Intern 
async function createEmployee() {
    //Would you like to add an Engineer or Intern? 
    let employeeRole = await inquirer.prompt(questions.employee); 

    switch (employeeRole.empRole) {
        case 'Engineer': 
            let engResponses = await inquirer.prompt(questions.engineer); 
            let newEngineer = new Engineer
                (engResponses.engName, 
                    engResponses.engId, 
                    engResponses.engEmail, 
                    engResponses.engGithub);
            employees.push(newEngineer); 
            console.log("Thanks! We've added a new engineer to the team: ", newEngineer);
            await confirmEmployee();
            break; 
        case 'Intern': 
            let internResponses = await inquirer.prompt
            (questions.Intern); 
            let newIntern = new Intern
                (internResponses.interName,
                    internResponses.interId, 
                    internResponses.internEmail, 
                    internResponses.internSchool); 
            employees.push(newIntern); 
            console.log("Thanks! We've added a new intern to the team: ", newIntern); 
            await confirmEmployee(); 
    };
}; 