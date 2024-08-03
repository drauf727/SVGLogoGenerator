class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Square extends Shape{
    render() {
    return `<rect x="50" y="50" width="400" height="400" fill="${this.color}"/>`
    }
}

class Circle extends Shape{ 
    render() {
       return `<circle cx="50%" cy="50%" r="200" fill="${this.color}"/>`
    }
}
class Triangle extends Shape{
    render(){
     return `<polygon points="250,0 0,400 500,400" class="triangle" fill="${this.color}"/>`
}
}

module.exports = { Square, Circle, Triangle }