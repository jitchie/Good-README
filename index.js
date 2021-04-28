const fs = require('fs');
const inquirer = require('inquirer');
inquirer
  .prompt([
      {
        type:'input',
        message:'what is your GitHub username?',
        name:'username',
      },
      {
        type: 'input',
        message: 'what is your email address?',
        name: 'email',     
      },
      {
        type:'input',
        message:"what is your project's name?",
        name:'project', 
      },
      {
        type: 'input',
        message:'please write a short description of your project',
        name:'description',
        },
        {
          type:'input',
        message:'please write a short description of your project',
        name:'description',
        },
        {
          type: 'list',
          message: 'what kind of license should your project have?',
          choices: ["MIT", "APACHE 2.0", "BSD3", "none"],
        },
        
    /* Pass your questions in here */
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });