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
} else if (hourNow > 0) {
    greeting = 'Careful Zoologist! Earth species are more common at this time.';
} else {
    greeting = 'Welcome!'
}
    //the internet says doc.write is bad...?
document.write('<h3>' + greeting + '</h3>');
