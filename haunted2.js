const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "frying pan",
  item: "flashlight",
};

console.log();
  console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
  player.name = READLINE.question("What is your name?: ");
    let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
  console.log(`${player.name} is entering the house and is faced with 3 doors  `);
let enterDoor =READLINE.question("choose a door 1,2,3 ?");
if(enterDoor == "1" ){
console.log(`you will now have infinite life`);
}
if(enterDoor == "2"){
console.log(`You will now be tourchered for the rest of your life`);
}
if(enterDoor == "3"){
console.log(`You will now go home SPEAK NOTHING OF THIS`);
}



} else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However...`);
  console.log(` a large furry,large creature in the shadows appears
    man you dont got no choice now... Will you open the door?`);
  let door =READLINE.question("Do you want to open the door? yes or no");
  if(door == "yes"){

    console.log("You found a health solution...Good luck you're gonna need it!");
  }

console.log("now there are three more doors");
let enterDoor = READLINE.question("which do you choose, door 1,2,3?");
if(enterDoor == "1" ){
console.log(`you and your relatives now have infinite life but
now you have to clean for eternity.` );
}
if(enterDoor == "2"){
console.log(`You will be torturered for the rest of your life
by a herd of zombies and mutant animals. muhahahahaha. `);
}
if(enterDoor == "3"){
console.log(`You are now in a room filled with a thirsty and hungry-cannibal CULT! ninja you dead!`);
}


console.log("Thanks for playin!")
}

