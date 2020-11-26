"use strict";

function generate() {
    let numbers = [];

    while(numbers.length < 7) {
        let randomNumber = Math.floor(Math.random() * 39) + 1;

        if(numbers.indexOf(randomNumber) === -1) {
            numbers.push(randomNumber);
        }

        let add = true;

        for(let i = 0; i < 39; i++) {
            if(numbers[i] == numbers) {
                add = false;
            }
        }
    }

    document.getElementById("result").innerHTML = 'Your lottery number for this week are, ' + numbers.join(" - ") ;
}