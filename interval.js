/* Usage of setTimeout() and setInterval() of Asynchronous */

console.log(1);
console.log(2);
const time = setTimeout(() => {
    console.log(3);
    clearTimeout(time);
}, 3000);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);

let num = 0;

const clockID = setInterval( () => {
    num++;
    if(num >= 20){
        clearInterval(clockID);
    }
    console.log('A Developer', num);
}, 1000);