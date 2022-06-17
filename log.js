/* I am going to need to make functions that increase and save the stats as they level up
I need to review math floor(math random) etc... and add 1-4 stats gained per level to the randomized starting stats
learn how to create the attack and defence interaction 
*/
let exp; // monsters will give the amount of exp equal to what it takes to level them up.

let lvl; // 1-999

let hp; // defence will block a % of hp
let def;
let att;
let res; // resistance to status effects (all effects will do dmg over time)

const type; // 25%? more or less dmg depending on typing (earth, wind, fire and water)

/* trashing this
function Species(name, description, type, lvl, exp, hp, def, att, res) {
    this.name = name;
    this.description = description;
    this.type = type;
    this.lvl = function increaselvl (lvl) {
        return lvl++ //this needs to increase based on experience
    };
    this.exp = exp // this needs to increase based on battles and lvl of opponent
    this.hp = function increase(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }; hp = increase(1, 4);
    this.def = function increase(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }; def = increase(1, 4);
    this.att = function increase(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }; att = increase(1, 4);
    this.res = function increase(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }; res = increase(1, 4); 
};  //needs to add this every time lvl increases..

//Simple example for now, used the JS&JQuery book to learn this
var glyptodonSpecies = new Species("Glyptodon", "Large heavily armored mammal", "earth", 1, 10, 10, 10, 10);
var teratornithidaeSpecies = new Species("Teratornithidae", "Large bird of pray", "air", 1, 10, 10, 10, 10);
var baijiSpecies = new Species("Baiji", "Fresh water dolphin", "water", 1, 10, 10, 10, 10)

var monster = document.getElementById("journal");
//this isnt exactly what im looking to do, but I wanted something on the page for now!
monster.textContent = JSON.stringify(baijiSpecies);
*/