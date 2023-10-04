const generateQuote = function() {
    const quotes = [
    {
        quote: "Look at that sea, girls — all silver and shadow and vision of things not seen. We couldnt enjoy its loveliness any more if we had millions of dollars and ropes of diamonds.",
        author: "L. M. Montgomery, Anne of Green Gables"
    },
    {
        quote: "Home is what you take with you, not what you leave behind.",
        author: "N. K. Jemisin"
    },
    {
        quote: "If you will stay close to nature, to its simplicity, to the small things hardly noticeable, those things can unexpectedly become great and immeasurable.",
        author: "Rainer Maria Rilke"
    },
    {
        quote: "And forget not that the earth delights to feel your bare feet and the winds long to play with your hair.",
        author: "Khalil Gibran"
    },
    {
        quote: "I took a deep breath and listened to the old brag of my heart. I am, I am, I am.",
        author: "Sylvia Plath"
    },
    {
        quote: "The stars are like the trees in the forest, alive and breathing. And they’re watching me.",
        author: "Haruki Murakami"
    },
    {
        quote: "Have a biscuit, Potter.",
        author: "Minerva McGonagall"
    },
    {
        quote: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
        author: "Albus Dumbledore"
    },
    {
        quote: "Whenever you are creating beauty around you, you are restoring your own soul.",
        author: "Alice Walker"
    },
    {
        quote: "I don’t think of all the misery, but of the beauty that still remains.",
        author: "Anne Frank"
    }
];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;

}
window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}
