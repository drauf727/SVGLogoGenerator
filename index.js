// Setting up dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
// const { square, circle, triangle } = require('./lib/shapes');


// Creating a questions list
const questions = [
    {
        name: 'text',
        message: 'Choose your text (3 characters max)',
        type: 'input'
    },
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
    fs.writeFile('logo.svg', 
`
<svg version="1.1" width="500" height="500" xmlns="http://www.w2.ord/2000/svg">
<polygon points="250,0 0,400 500,400" class="triangle" fill="${answer.shapecolor}"/>
<text x="50%" y="50%" font-size="10rem" text-anchor="middle" dominant-baseline="middle" fill="${answer.fontcolor}">
    ${answer.text}   
</text>
</svg> 
`
, 
    //Catching errors
    (err) => err? console.log(err) : console.log('Success'));
})
.catch((error) => {
    console.log(error)
});
