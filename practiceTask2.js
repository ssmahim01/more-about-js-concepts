/* Logs a funny message every 2 seconds and after 10 seconds, it stops. */

function tellJoke(){
    console.log("Why don't scientists trust atoms? Because they make up everything!");
}

let num = 0;
const jokeInterval = setInterval(() => {
    num ++;
    tellJoke();
}, 2000);

setTimeout(() => {
    clearInterval(jokeInterval);
}, 10000); // Solved.