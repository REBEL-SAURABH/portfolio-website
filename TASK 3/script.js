async function getQuote(){

try{

const response =
await fetch(
"https://dummyjson.com/quotes/random"
);

const data =
await response.json();

document.getElementById("quote")
.innerText = `"${data.quote}"`;

document.getElementById("author")
.innerText = `- ${data.author}`;

}catch(error){

document.getElementById("quote")
.innerText = "Failed to load quote.";

}

}

function copyQuote(){

const text =
document.getElementById("quote").innerText;

navigator.clipboard.writeText(text);

alert("Quote Copied!");

}