// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMark = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [ // learned of the default parameter for inquirer questions so I included it when appropriate
	{
		name: "title",
		message: "What is the title of your project?",
		type: "input",
		default: "Project Title"
	},
	{
		name: "description",
		message: `Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

		- What was your motivation?
		- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
		- What problem does it solve?
		- What did you learn?`,
		type: "input",
	},
    {
		name: "install",
		message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
		type: "input",
		default: "No installtion necessary."
	},
	{
		name: "usage",
		message: "How does someone use your project? Include screenshots as needed.",
		type: "input",
		default: "Just open the link!"
	},
    {
		name: "contribute",
		message: "Can other people contribute to your project? How can they do so?",
		type: "input",
		default: "To contribute, please contact me."
	},
	{
		name: "testDetails",
		message: "Do you have any tests to run? How can the user run them?",
		type: "input",
		default: "No tests to run."
	},
    {
		name: "credits",
		message: "Did you have any collaborators? if so link their github(s). If you used any 3rd party assets be sure to link them here.",
		type: "input",
		default: "No credits."
	},
	{
		name: "license",
		message: "What license would you like to use?",
		type: "list",
		choices:[
			'Apache',
			'GNU GPLv3',
			'ISC',
			'MIT',
			'Mozilla Public License',
			'Boost Software License 1.0',
			'Unilicense',
			'No license'
		]
	},
    {
		name: "github",
		message: "What is your github username?",
		type: "input",
	},
	{
		name: "email",
		message: "What is your email address?",
		type: "input",
	},
	{
		name: "table",
		message: "Would you like a table of contents?",
		type: "list",
		choices:[
			'true', 
			'false',
		]
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) // This seems redundant, but I'm including this because it was included in 
																		 // in the starter code	 
{
    fs.writeFile(fileName, data, (err) => 
    {
        if (err) 
        {
           return console.error('Error', err);
            
        }
        console.log('Success')
    });
}


// When called the app passes the questions array to the inquirer prompt functin then takes the 
// answers and passes them to the write me function to generate the README file
function init() {
	inquirer.prompt(questions)
		.then(answers => {
			console.log(JSON.stringify(answers, null, 2))
			 writeToFile('README.md', genMark.generateMarkdown(answers))

		})
}
// MAKE VIDEO
// Function call to initialize app
init();
