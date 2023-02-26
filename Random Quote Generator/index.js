const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const APIurl = "https://api.quotable.io/random";



async function getQuote() {
    try {
        btnEl.innerText = "Loading...";
        btnEl.disabled = true;
        quoteEl.innerText = "updating...";
        authorEl.innerText = "updating...";
        const response = await fetch(APIurl)
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quoteEl.innerText = quoteContent;
        authorEl.innerText = "~ " + quoteAuthor;
        btnEl.innerText = "Get a quote";
        btnEl.disabled = false;


        console.log(data);
    } catch (error) {
        console.log(`A ERROR happened 
        check your internet connection
        and try again later`);
        quoteEl.innerText = `A ERROR happened (-_-) check your internet connection and try again later`;
        authorEl.innerText = "ERROR 404";

    }
}
getQuote();

btnEl.addEventListener("click", getQuote);