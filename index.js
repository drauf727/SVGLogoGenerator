// Setting up dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
// Creating a questions list
const questions = [
    {
        name: 'fontcolor',
        message: 'Type in font color (name or hexadecimal number)',
        type: 'input'
    },
    {
        name: 'shapecolor',
        message: "Type in shapes background color (name or hexadecimal number)",
        type: 'input'
    },
    {
        name: 'shape',
        message: 'Select shape',
        type: 'list',
        choices: ['triangle', 'square', 'circle']
    }
]

// Inquirer prompt
inquirer.
prompt(questions)
.then((answer) => {
    console.log(`You selected font color: ${answer.fontcolor}, shape color: ${answer.shapecolor}, and the shape of ${answer.shape}!!`),
    (err) => err? console.log(err) : console.log('Success');
})
.catch((error) =>{
    console.log(error)
});
