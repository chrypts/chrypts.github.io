const generateQuote = function() {
    const quotes = [
    {
        quote: "Look at that sea, girls — all silver and shadow and vision of things not seen. We couldnt enjoy its loveliness any more if we had millions of dollars and ropes of diamonds.",
        author: "L. M. Montgomery"
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
        quote: "Rest is not idleness, and to lie sometimes on the grass under trees on a summer’s day, listening to the murmur of the water, or watching the clouds float across the sky, is by no means a waste of time.",
        author: "John Lubbock"
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
    },
    {
        quote: "Enjoy the little things, for one day you may look back and realize they were the big things.",
        author: "Robert Brault"
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
