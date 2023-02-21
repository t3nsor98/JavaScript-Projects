//create a varuable for button element
const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

//lets create a variable to store API key 
const apikey = "h/Ig48/zxpf083tO4DZgyg==eKkv49i06zx2Qm1f";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    },

};

const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1"
//lets create a function to return a joke every time you click the button
async function getJoke() {

    try {
        jokeEl.innerText = "Getting a joke for you.....";
        btnEl.disable = true;
        btnEl.innerText = "Wait!!!";

        const response = await fetch(apiURL, options);
        const data = await response.json();

        btnEl.disable = false;
        btnEl.innerText = "Tell Me Another Joke";

        jokeEl.innerText = data[0].joke;

    } catch (error) {
        jokeEl.innerText = "There is an error might be your Internet connection. Try again later!!!";

        btnEl.disable = false;
        btnEl.innerText = "Tell Me A Joke";

    }


}

btnEl.addEventListener("click", getJoke);