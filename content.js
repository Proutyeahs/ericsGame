$(ready)

function ready() {
    greeting();
    displayAni();
}

function greeting() {
let today = new Date();
let hourNow = today.getHours();
    //this is basicaly useless until I learn how to change the ratio of what animals shows up.
    if (hourNow > 18) {
        $('#main-text').append('Evening Zoologist! Fire species are more common at this time of night.');
    } else if (hourNow > 12) {
        $('#main-text').append('Afternoon Zoologist! Wind species are more common at this time of day.');
    } else if (hourNow > 6) {
        $('#main-text').append('Morning Zoologist! Water species are more common this early in the morning.');
    } else {
        $('#main-text').append('Careful Zoologist! Earth species are more common at this time.');
    } 
}

function buttons(){

}


//work on rolling random enemys and assign the stats to the o vars?? 

function attack(type, hp, def, att, res, weapon, oWeapon, oType, oHp, oDef, oAtt, oRes) {
    let typeAdv = 0;

    if (weapon.attribute) {
// atribute calls dmg over time take into account res and dmg per turn
    }

    if (type == 'earth' && oType == 'earth') {
        typeAdv += 1;
    } else if (type == 'earth' && oType == 'wind') {
        typeAdv += 0.5;
    } else if (type == 'earth' && oType == 'fire') {
        typeAdv += 1;
    } else if (type == 'earth' && oType == 'water') {
        typeAdv += 2;
    } else if (type == 'wind' && oType == 'earth') {
        typeAdv += 2;
    } else if (type == 'wind' && oType == 'wind') {
        typeAdv += 1;
    } else if (type == 'wind' && oType == 'fire') {
        typeAdv += 0.5;
    } else if (type == 'wind' && oType == 'water') {
        typeAdv += 1;
    } else if (type == 'fire' && oType == 'earth') {
        typeAdv += 1;
    } else if (type == 'fire' && oType == 'wind') {
        typeAdv += 2;
    } else if (type == 'fire' && oType == 'fire') {
        typeAdv += 1;
    } else if (type == 'fire' && oType == 'water') {
        typeAdv += 0.5;
    } else if (type == 'water' && oType == 'earth') {
        typeAdv += 0.5;
    } else if (type == 'water' && oType == 'wind') {
        typeAdv += 1;
    } else if (type == 'water' && oType == 'fire') {
        typeAdv += 2;
    } else if (type == 'water' && oType == 'water') {
        typeAdv += 1;
    }

    let damage = weapon * (att / oDef) * typeAdv;
    return damage;
}

let weapon = {}

function rollWeapon() {
    weapon.attack = Math.floor(Math.random() * 2222) // I have to make sure this isnt OP AF
    weapon.attribute = Math.floor(Math.random() * dmgTypes.length)
}

let dmgTypes = ['none', 'poison', 'burning', 'shock', 'bleed', 'frost'] //I want the none propety to have higher dmg so its balanced or OP
// higher the res the less dmg DOT will do and less likely the effect takes place

function callDmgOverTime() {
    let dmgInc = hp * .01;
    if (weapon.attribute === 'poison', 'burning', 'shock', 'bleed', 'frost') { // this might now work
        hp -= dmgInc
    }
}

function lvlUp () {
    lvl++
    hp += Math.floor(Math.random() * (4 - 1 + 1) + 1);
    def += Math.floor(Math.random() * (4 - 1 + 1) + 1);
    att += Math.floor(Math.random() * (4 - 1 + 1) + 1);
    res += Math.floor(Math.random() * (4 - 1 + 1) + 1);
}
lvlUp()
console.log(lvl, hp, def, att, res);

// code below is my first attempt, I am in the process of rewriting
function species(name, description, type, lvl, exp, hp, def, att, res) {
    //let animals = {}
    this.name = name;
    this.description = description;
    this.type = type;
    this.exp = exp;
    this.lvl = lvl;
    this.hp = hp;
    this.def = def;
    this.att = att;
    this.res = res;
}; 

//the description will be alot longer in the final verson, describing in detail what the animals look like
let glyptodonSpecies = new species("Glyptodon", "Large heavily armored mammal", "earth", 1, 10, 10, 10, 10);
let teratornithidaeSpecies = new species("Teratornithidae", "Large bird of pray", "air", 1, 10, 10, 10, 10);
let baijiSpecies = new species("Baiji", "Fresh water dolphin", "water", 1, 10, 10, 10, 10)

function displayAni() {
    $('#animalDesc').append(`${Species.description}`)
    $('#journal').append(`${Species.description}`)
}


// I want to diplay a map and track the location using a grid in the background and highlight the tile on the map that is the users location

// I was told I will only have one js file and one html file at prime, so I need to consolidate my files