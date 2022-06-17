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

window.addEventListener('grid'.(event) => [

    let keysPressed = ()
    document.addEventListener('keyDown'.(event)=>{
        keysPressed[event.key] = true;
    })
    document.addEventListener('keyUp'.(event) => {
        delete keysPressed[event.key];
    })

    let canvas = document.getElementById("grid");
    let canvas
])