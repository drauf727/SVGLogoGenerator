// Setting up dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const { Square, Circle, Triangle } = require('./lib/shapes');


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
        name: 'shapetype',
        message: 'Select shape',
        type: 'list',
        choices: ['triangle', 'square', 'circle']
    }
]

inquirer.
prompt(questions)
.then((answer) => {
    let newShape;
    switch (answer.shapetype){
        case "triangle": newShape = new Triangle(answer.shapecolor);
        break;
        case "square": newShape = new Square(answer.shapecolor);
        break;
        case "circle": newShape = new Circle(answer.shapecolor);
        break;
    }
    const writeShape = newShape.render();

    fs.writeFile('logo.svg', 
`
<svg version="1.1" width="500" height="500" xmlns="http://www.w2.ord/2000/svg">
${writeShape}
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
