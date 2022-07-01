
// function askName() {
//     let name = prompt('What is your name?');
//     let message = `Hi, ${name}.`;
//     document.write(message);
//     return message;
// }

// function askNumber() {
//     let number = prompt('What is your favorite number?');
//     let message = `${number} is a great number.`;
//     document.write(message);
//     return message;
// }

function askTeam() {
    let team = prompt('What is your favorite NBA team?');
    let message;

    if (team == 'thunder') {
        message = 'Thunder up!'
    } else if (team == 'Thunder') {
        message = 'Thunder up!';
    } else if (team == 'OKC Thunder') {
        message = 'Thunder up!';
    } else {
        message = 'Your team is bad.';
    }
    document.write(message);
    return message;
};

function numberOfBalls() {
    let output = '';
    let balls = prompt('How many basketballs do you want to see?');
    for (let i = 0; i < balls; i++) {
        output += "<img class='balls' src='images/solobasketball.jpg' style='width:250px'/>";
    }
    return document.write(output);
}

function nbaChamp() {
    let usersChoice = prompt("Who won the 2022 NBA Finals?");

    while (usersChoice !== "warriors") {
        alert("Incorrect");
        usersChoice = prompt("do you like cardio?")
        if (usersChoice.toLowerCase() == "warriors") {
            document.write("That's correct!");
        }
    }
}