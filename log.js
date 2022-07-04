/* I am going to need to make functions that increase and save the stats as they level up
I need to review math floor(math random) etc... and add 1-4 stats gained per level to the randomized starting stats
learn how to create the attack and defense interaction 
*/

let exp  = 0; // monsters will give the amount of exp equal to what it takes to level them up.
let lvl = 1; // 1-999
let hp = 10; // defense will block a % of hp
let def = 10;
let att = 10;
let res = 10; // resistance to status effects (all effects will do dmg over time)
let type = ''; // 25%? more or less dmg depending on typing (earth, wind, fire and water)

// if exp = maxForLvl call lvlUp. Need to create exp curve

function lvlUp () {
    lvl++
    hp += Math.floor(Math.random() * (4 - 1 + 1) + 1);
    def += Math.floor(Math.random() * (4 - 1 + 1) + 1);
    att += Math.floor(Math.random() * (4 - 1 + 1) + 1);
    res += Math.floor(Math.random() * (4 - 1 + 1) + 1);
}
lvlUp()
console.log(lvl, hp, def, att, res);

// code below is my first attempt, I am in the process of rewriting and merging the two attempts.
function Species(name, description, type, lvl, exp, hp, def, att, res) {
    this.name = name;
    this.description = description;
    this.type = type;
    this.exp
    this.lvl
    this.hp
    this.def
    this.att
    this.res
};  //needs to add this every time lvl increases..

//Simple example for now, used the JS&JQuery book to learn this
var glyptodonSpecies = new Species("Glyptodon", "Large heavily armored mammal", "earth", 1, 10, 10, 10, 10);
var teratornithidaeSpecies = new Species("Teratornithidae", "Large bird of pray", "air", 1, 10, 10, 10, 10);
var baijiSpecies = new Species("Baiji", "Fresh water dolphin", "water", 1, 10, 10, 10, 10)

var monster = document.getElementById("journal");
