//DICE PART

function createDice(points) {

	const DieDotPositionMatrix = {
		1: [
			[50, 50]
		],
		2: [
			[20, 20],
			[80, 80]
		],
		3: [
			[20, 20],
			[50, 50],
			[80, 80]
		],
		4: [
			[20, 20],
			[20, 80],
			[80, 20],
			[80, 80]
		],
		5: [
			[20, 20],
			[20, 80],
			[50, 50],
			[80, 20],
			[80, 80]
		],
		6: [
			[20, 20],
			[20, 80],
			[50, 20],
			[50, 80],
			[80, 20],
			[80, 80]
		]
	};

	const dice = document.createElement("div");
	dice.classList.add("dice");

	for (const DieDotPosition of DieDotPositionMatrix[points]) {
		const dot = document.createElement("div");
		dot.classList.add("Diedot");
		dot.style.setProperty("--top", DieDotPosition[0] + "%");
		dot.style.setProperty("--left", DieDotPosition[1] + "%");
		dice.appendChild(dot);

	}

	return dice;

};


function loopDice(diceWrapper, number, resultElement) {
	diceWrapper.innerHTML = "";

	for (let i = 0; i < number; i++) {

		const random = Math.floor((Math.random() * 6) + 1);
		const dice = createDice(random);

		diceWrapper.appendChild(dice);
		updateResult(random, resultElement);
	}
}

function updateResult(result, resultElement) {
	resultElement.textContent = + result;
}

const NumberOfDice = 1;
const diceWrapper = document.querySelector(".dice-wrapper");
const Roll = document.querySelector(".Roll");
const resultElement = document.getElementById("result");

// BACKGROUND CHANGE

let colors = ["#f77f00", "#600C38", "#8ecae6", "#2a9d8f", "#c8b6ff", "#ffafcc"]

let indexColor = 0;

function backgroundChange() {
	const body = document.querySelector("body");
	body.style.backgroundColor = colors[indexColor];
	indexColor = (indexColor + 1) % colors.length;
}

// DISPLAY
loopDice(diceWrapper, NumberOfDice, resultElement);

Roll.addEventListener("click", () => {
	loopDice(diceWrapper, NumberOfDice, resultElement);
	backgroundChange();
});
