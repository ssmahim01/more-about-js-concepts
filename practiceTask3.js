/* Fetch data from an API and logs a message */

async function loadMessage(){
    try{
        const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
        const data = await res.json();
        console.log(data);
        const show = document.getElementById('show');
        show.innerText = await data.joke;
        show.style.fontWeight = 'bold';
        show.classList.add("half");
    }
    catch(error){
        console.log('Something Wrong', error);
    }
}

loadMessage(); // Solved.