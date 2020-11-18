//Initilize die
let die1 = 1;
let die2 = 1;
let dieTotal = 0;

//Rolls dice & displays output
function rollButt() {
    //Calculates roll between 1 & 6 on die1 & die2
    die1 = Math.floor((Math.random() * 6) + 1);
    die2 = Math.floor((Math.random() * 6) + 1);

    //Calculates dice total
    dieTotal = die1 + die2;

    //Displays dice
    document.getElementById("die1").innerHTML = die1;
    document.getElementById("die2").innerHTML = die2;

    //Displays dice total
    document.getElementById("dieTotal").innerHTML = "Roll total = " + dieTotal;
}