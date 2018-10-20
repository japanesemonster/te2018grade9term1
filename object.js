function character(name){

	this.name = name;
	this.weapon;
	this.power;
	this.color;
	this.relationship = false;
	this.getInfo = getCharacter;
}



function getCharacter(){


return this.name + " " + this.weapon + " " + this.color + " " + this.relationship + " " + this.power;
	}

	let shin = new character("Shino Akaname");
	shin.color = "purple"
	shin.power = "bhuddist palm"
	shin.relationship = true;
	shin.weapon = "katana";


let akari = new character("Akari Akaname");
akari.color = "blue";
akari.power = "manifest"
akari.relationship = false;
akari.weapon = "pistol"; 

	console.log(shin.getInfo());