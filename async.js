/* Usage of setTimeout() method and Promise */

console.log(1);
console.log(2);
const time = setTimeout(() => {
    console.log('Lazy logged');
    clearTimeout(time);
}, 4000);
console.log(4);
console.log(5);
console.log(6);

function doSomething(){
    console.log(3);
}

const loadPromise = () => {
   return new Promise((resolve, reject) => {
    const success = Math.random();

    if(success <= 0.5){
        resolve(success);
    }else{
        reject(success);
    }
})
};

loadPromise()
.then(data => console.log('Resolved Data', data))
.catch(error => console.log('Rejected with value', error))