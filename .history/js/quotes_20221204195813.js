const quotes = [
	{
		quote: "When you have a dream, you've got to grab it and never let go.",
		author: "Carol Burnett",
	},
	{
		quote: "Nothing is impossible. The word itself says 'I'm possible!'",
		author: "Audrey Hepburn",
	},
	{
		quote: "There is nothing impossible to they who will try.",
		author: "Alexander the Great",
	},
	{
		quote: "The bad news is time flies. The good news is you're the pilot.",
		author: "Michael Altshuler",
	},
	{
		quote:
			"Success is not final, failure is not fatal: it is the courage to continue that counts.",
		author: "Winston Churchill",
	},
];

const quote = document.querySelector("#quote");
const auhtor = document.querySelector("#quote span:second-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
