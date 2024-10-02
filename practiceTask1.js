/* Displays a message after 5sec */

function displayMessage(){
    setTimeout(() => {
        console.log("I'm a Developer");
    }, 5000);
}

displayMessage(); // Solved.

/* Logs a greeting message after the given delay time */

function delayedGreeting(name, delayTime){
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
    }, delayTime);
}

delayedGreeting('Alice', 2000); // Solved.