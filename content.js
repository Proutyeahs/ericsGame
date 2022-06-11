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
    //the internet says doc.write is bad...?
document.write('<h3>' + greeting + '</h3>');

/* wow this is going to need alot of work.
functions to keep track of all the stats and increase them as they level up.
math floor(math random) etc.??? 1-3 stats gained per level, plus the starting stats?
well looks like this is as far as I make it on this atm.
*/

function Species(name, description, type, lvl, hp, def, att, res) {
    this.name = name;
    this.description = description;
    this.type = type;
    this.lvl = lvl;
    this.hp = hp;
    this.def = def;
    this.att = att;
    this.res = res;
}
//Simple example for now, used the JS&JQuery book to learn this
var glyptodonSpecies = new Species("Glyptodon", "Large heavily armored mammal", "earth", 1, 10, 10, 10, 10);
var teratornithidaeSpecies = new Species("Teratornithidae", "Large bird of pray", "air", 1, 10, 10, 10, 10);
var baijiSpecies = new Species("Baiji", "Fresh water dolphin", "water", 1, 10, 10, 10, 10)

var monster = document.getElementById("journal");

monster.textContent = JSON.stringify(baijiSpecies);