var viewQuote = document.getElementById('quote');
var quotes = [
    {
        text: "You only live once, but if you do it right, once is enough.",
        author: "- Mae West"
    },
    {
        text: "Be the change that you wish to see in the world.",
        author: "- Mahatma Gandhi"
    },
    {
        text: "It is never too late to be what you might have been.",
        author: "- George Eliot"
    },
    {
        text: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        author: "- J.K. Rowling"
    },
    {
        text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author: "- Maya Angelou"
    },
    {
        text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "- Dr. Seuss"
    },
    {
        text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "- Mahatma Gandhi"
    },
    {
        text: "Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself...'",
        author: "- C.S. Lewis"
    }
];
lastIndex = null;
function randomQuote() {
    var cartoona = "";
    var newIndex = Math.floor((Math.random() * quotes.length));
    if (lastIndex == newIndex && quotes.length > 1) {
        do {
            newIndex = Math.floor((Math.random() * quotes.length));
        } while (newIndex == lastIndex);
    }
    cartoona += `${quotes[newIndex].text}<br>${quotes[newIndex].author}`;
    viewQuote.innerHTML = cartoona;
    lastIndex = newIndex;
}
