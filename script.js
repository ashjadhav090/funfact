const facts = [
    {
        text: "Honey never spoils.",
        background: "url('https://example.com/honey.jpg')"
    },
    {
        text: "Octopuses have three hearts.",
        background: "url('https://example.com/octopus.jpg')"
    },
    {
        text: "Bananas are berries, but strawberries aren't.",
        background: "url('https://example.com/banana.jpg')"
    }
];

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const fact = facts[randomIndex];
    const factContainer = document.getElementById('fact-container');
    factContainer.style.backgroundImage = fact.background;
    document.getElementById('fact').textContent = fact.text;
}
