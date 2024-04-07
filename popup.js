function getJoke(){


    fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.joke;
        console.log(jokeText);
        const jokeElement = document.getElementById('jokeElement');
        jokeElement.innerHTML=jokeText;
})
}
var xyzw = document.getElementById('nextJoke');
xyzw.addEventListener('click',getJoke)

window.onload = getJoke