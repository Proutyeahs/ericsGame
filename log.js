
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

let dmgTypes = ['none', 'poison', 'burning', 'shock', 'bleed', 'frost', ] //I want the none propety to have higher dmg so its balanced or OP
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
function Species(name, description, type, lvl, exp, hp, def, att, res) {
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
let glyptodonSpecies = new Species("Glyptodon", "Large heavily armored mammal", "earth", 1, 10, 10, 10, 10);
let teratornithidaeSpecies = new Species("Teratornithidae", "Large bird of pray", "air", 1, 10, 10, 10, 10);
let baijiSpecies = new Species("Baiji", "Fresh water dolphin", "water", 1, 10, 10, 10, 10)


