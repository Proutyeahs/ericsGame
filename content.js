var today = new Date();
var hourNow = today.getHours();
var greeting;
    //this is basicaly useless until I learn how to change the ratio of what animals shows up.
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


// I want to diplay a map and track the location using a grid in the background and highlight the tile on the map that is the users location

// I was told I will only have one js file and one html file at prime, so I need to consolidate my files