const generateButton = document.querySelector("button");
const select = document.querySelector("select");
const a = document.getElementById("result");

const describeArray = ["Food",
"Holidays",
"Travel",
"Your hometown",
"Money",
"Your family",
"Your friends",
"Your house",
"Hobbies",
"Music",
"Movies",
"Favourite animal",
"Favourite bovie",
"Favourite band",
"Favourite color",
"A crowded place",
"Favourite Game",
"Someone famous"];

const playArray = ["Hangman",
"Simon says",
"Musical chairs",
"Werewolves",
"Blooket",
"Bamboozle",
"Two truths one lie",
"Charades",
"If...so conditionals",
"Gap fill"];

const drawArray = ["Your favourite animal",
"A food you like",
"Your house",
"Your favourite Pokemon",
"Your family",
"Your best friend",
"Your teacher",
"A t-shirt with your favourite color",
"A cat with a top hat",
"A dragon that can breathe donuts",
"A person holding an umbrella",
"Yourself"];

const onClick = function() {
	if (select.value === "describe") {
	const random = describeArray[Math.floor(Math.random() * describeArray.length)];
	a.innerHTML = random;
}else if (select.value === "play") {
	const randomPlay = playArray[Math.floor(Math.random() * playArray.length)];
	a.innerHTML = randomPlay;
}else if (select.value === "draw") {
	const randomDraw = drawArray[Math.floor(Math.random() * drawArray.length)];
	a.innerHTML = randomDraw;
}
}

generateButton.addEventListener('click',onClick);