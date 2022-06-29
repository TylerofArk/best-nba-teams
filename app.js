/*let yellow = "Yellow";

let otherYellow = "yellow";

let favColor = yellow;

console.log(yellow);
console.log(yellow); \

console.log(yellow == other otherYellow);

let usersColor = prompt("What is your favorite color?")
console.log(usersColor)
*/


const favorite = Number(prompt("What is the mascot of your favorite NBA team?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === Thunder) {
    console.log('Cool! The Thunder are the best team!')
} else if (favorite === 7) {
    console.log('7 is also a cool number')
} else if (favorite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 or 7 or 9')
}

if (favorite !== 23) console.log('Why not 23?');

if (usersColor.toLowerCasae() == "yellow") {
    console.log("Mine too!")
}

// Gets user input
let name = prompt("What is your name?");
let num = prompt("What is your favorite number? ");

// Uses user input to print out information
println("Hello " + "name" + "!");
println(num + "?! That's my favorite number too!");

// Prints out the variable type
println("Name is a " + typeof "name");
println("Num is a " + typeof num);