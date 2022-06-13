/* I am going to need to make functions that increase and save the stats as they level up
I need to review math floor(math random) etc... and add 1-3 stats gained per level to the randomized starting stats
learn how to create the attack and defence interaction 
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

var monster = document.getElementById("journal", "journal", "journal");
//this isnt exactly what im looking to do, but I wanted something on the page for now!
monster.textContent = JSON.stringify(baijiSpecies);
monster.textContent = JSON.stringify(glyptodonSpecies);
monster.textContent = JSON.stringify(teratornithidaeSpecies);