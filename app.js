// const fs = require('fs');

// const generatePage = require('./src/page-template.js');

// const profileDataArgs = process.argv.slice(2, process.argv.length);

// //const name = profileDataArgs[0];
// //const github = profileDataArgs[1];
// // above two lines can be written as below, called "assignment restructuring"
// const [name, github] = profileDataArgs;

// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw err;
//     console.log('Portfolio complete! Check out index.html to the the output.');
// })

const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));