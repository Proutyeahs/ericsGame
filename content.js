var today = new Date();
var hourNow = today.getHours();
var greeting;
    //this is basicaly useless until I learn how to change the ratio of what shows up.
if (hourNow > 18) {
    greeting = 'Evening Zoologist! Fire species are more common at this time of night.';
} else if (hourNow > 12) {
    greeting = 'Afternoon Zoologist! Wind species are more common at this time of day.';
} else if (hourNow > 6) {
    greeting = 'Morning Zoologist! Water species are more common this early in the morning.';
} else {
    greeting = 'Careful Zoologist! Earth species are more common at this time.';
} 
    //this prints every time where the script is tag is placed..
document.write('<h3>' + greeting + '</h3>');


//attempt at grid based movement system

window.addEventListener('DOMContentLoaded', (event) => {

    let keysPressed = {}

    document.addEventListener('keyDown', (event) => {
        keysPressed[event.key] = true;
    });
    document.addEventListener('keyUp', (event) => {
        delete keysPressed[event.key];
    });

    let canvas = document.getElementById("grid");
    let canvas_context = canvas.getContext("2d");

    canvas.style.background = "#000000"

    class Rectangle {
        contructor(x,y, hight, widith, color) {
            this.x = x
            this.y = y
            this.height = height
            this.width = width
            this.color = color
            this.xmom = 0
            this.ymom = 0
        }
        draw() {
            canvas_context.lineWidth = 1
            canvas_context.fillStyle = this.color
            canvas_context.strokeStyle = "black"
            canvas_context.fillRect(this.x, this.y, this.width, this.height)
            canvas_context.strokeRect(this.x, this.y, this.width, this.height)
        }
        moveBy(){
            this.x+=this.xmom
            this.x+=this.ymom
        }
    }
    class Circle{
        constructor(x, y, radius, color, xmom = 0, ymom = 0) {
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
            this.lens = 0
        }
        draw(){
            canvas_context.lineWidth = 0
            canvas_context.strokeStyle = this.color
            canvas_context.beginPath();
            canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI*2), true)
            canvas_context.fillStyle = this.color
            canvas_context.fill()
            canvas_context.stroke();
        }
        move(){
            this.x += this.xmom
            this.y += this.ymom
        }
    }
    class Grid{
        constructor(width, height, color) {
            this.width = width
            this.height = height
            this.x = 0
            this.y = 0
            this.blocks = []
            for(let i = 0; this.y<canvas.height; i++){
                for(let i = 0; this.x<canvas.width; i++){
                    let block
                    if (Math.random() < .91){
                        block = new Rectangle(this.x, this.y, this.height, this.width, color)
                    } else {
                        block = new Rectangle(this.x, this.y, this.height, this.width, "gray")
                    }
                    this.blocks.push(block)
                    this.x+=this.width
                }
                this.y+=this.height
                this.x = 0
            }
        }
        draw(){
            for(let j = 0; j < this.blocks.length; j++){
                this.blocks[j].draw()
            }
        }
    }
    class Agent{
        constructor(grid, color) {
            this.grid = grid
            this.body = new Circle(10,10,Math.min(this.grid.width/4, this.grid.height/4), color)
            this.location = this.grid.blocks[Math.floor(Math.random()*this.grid.blocks.length)]
        }
        draw(){
            this.control()
            this.body.x = this.location.x + this.location.width/2
            this.body.y = this.location.y + this.location.height/2
            this.body.draw()
        }
        control(){
            if(keysPressed['w']){
                this.body.y -= this.grid.height
            }
            if(keysPressed['a']){
                this.body.x -= this.grid.width
            }
            if(keysPressed['s']){
                this.body.y += this.grid.height
            }
            if(keysPressed['d']){
                this.body.x += this.grid.widith
            }
            for(let l = 0;l<this.grid.blocks.length; l++){
                if(this.body.x > this.grid.blocks[l].x){
                    if(this.body.y > this.grid.blocks[l].y){
                        if(this.body.x < this.grid.blocks[l].x+this.grid.blocks[l].width){
                            if(this.body.y < this.grid.blocks[l].y+this.grid.blocks[l].height){
                                if(this.grid.blocks[l].color != "gray"){
                                    this.location = this.grid.blocks[l]
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    let board = new Grid(70,70, "blue")
    let smith = new Agent(board, "white")

    window.setInterval(function(){
        board.draw()
        smith.draw()
    }, 140)
})