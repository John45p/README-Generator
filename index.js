// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs"); 
const generateREADME = require("./ReadmeGenerate.js")
// TODO: Create an array of questions for user input
const questions = [

      {
        type: 'input',
        message: 'What is your project title?',
        name: 'projectTitle',
        //validate: (value)=>{if (value){return true} else {return 'please enter a value'}},
      },
      {
          type: 'input',
          message: 'Write a description of your project: ',
          name: 'description',
        },
      {
          type: 'input',
          message: 'Describe the installation process: ',
          name: 'installation',
        },
      {
        type: 'input',
        message: 'What is the usage information of this project?',
        name: 'usage',
      },
      {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "MIT",
            "Academic",
            "Mozilla",
            "Open",
            "none",
        ]
        },
        {
            type: 'input',
            message: 'Who contributed to this project?',
            name: 'contributing',
          },
          {
            type: 'input',
            message: 'Is there a test included in this project?',
            name: 'tests',
          },
          {
            type: 'input',
            message: 'Do you have an issue?',
            name: 'questions',
          },
      {
        type: 'url',
        message: 'what is your Github?',
        name: 'github', 
      },
      {
        type: 'url',
        message: 'What is your e-mail address?',
        name: 'email',
      },
      
    
    
];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then(data=>{
    console.log(data);
   var template = generateREADME(data); 
console.log(template)
fs.writeFile("README.md", template, (err) =>{
    if (err){
        console.log(err);
        return
    }
    console.log('succesfully created');
})
})


}

// Function call to initialize app
init();
