function character (name){

this.name = name;
this.weapon;
this.relationship = false;
this.color;
this.job = " Fashionista";
this.getinfo = getCharacter;

}

function getCharacter (){

return this.name + " "	+ this.weapon + " " + this.relationship + " " + this.job + " " + this.color ; 

}

var julien  = new character ("Kelsey julien")
julien.color = "pink"
julien.relationship = false;
julien.weapon = "Katana"
julien.job = "Fashionista"

console.log(julien.getinfo())
