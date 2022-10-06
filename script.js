let apiQuotes = [];

//Show New Quote
function newQuote(){
    //Pick a random quote from apiQuote array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    
    //Locals quotes
    //const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
}

//Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        //Catch Error Here
    }
}

getQuotes();
