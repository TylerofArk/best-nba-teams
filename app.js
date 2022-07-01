
function askName() {
    let name = prompt('What is your name?');
    let message = `Hi, ${name}.`;
    document.write(message);
    return message;
}

function askNumber() {
    let number = prompt('What is your favorite number?');
    let message = `${number} is a great number.`;
    document.write(message);
    return message;
}

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