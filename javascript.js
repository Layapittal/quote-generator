const quoteText = document.querySelector(".quote"),
    getquote = document.querySelector(".btnquote")
getauthor = document.querySelector(".author .name");

function getQuote() {
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result)
        quoteText.innerText = result.content;
        document.querySelector(".name").innerText = result.author;
    })
}

function sound() {
    console.log("hello")
    let x = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${getauthor.innerText}`);
    speechSynthesis.speak(x);

}
function copy() {
    navigator.clipboard.writeText(quoteText.innerText)
}