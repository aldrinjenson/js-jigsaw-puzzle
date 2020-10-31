const grid = document.querySelector(".grid");
const gold = document.getElementById("gold-value");
const tries = document.getElementById("tries-value");
const gameRoundValue = document.getElementById("round-value");
const gridWrapper = document.querySelector(".grid-wrapper");
const characterName = document.getElementById("character-name");
const characterClass = document.getElementById("character-class");

const width = 10;
const bgPaths = ["0.jpeg", "1.png", "2.jpg", "3.jpeg", "4.jpeg", "5.jpeg"];
const people = {
  0: { name: "Aldrin Jenson", class: "CS3B" }, // trial
  1: { name: "Jisna Jose", class: "CS7A" },
  2: { name: "Shimil Abraham", class: "CS3A" },
  3: { name: "Alan Chettan", class: "LKG-B" },
  4: { name: "Jency Chechy", class: "EB5" },
  5: { name: "Neema John", class: "ECE" },
};
let goldValue = 100;
let triesValue = 0;
let index = 0;

gridWrapper.style.backgroundImage = `url(images/${bgPaths[index]})`;
gameRoundValue.innerText = index;
gold.innerText = goldValue;
tries.innerText = triesValue;

const handleClick = (e) => {
  e.target.style.backgroundColor = "transparent";
  goldValue -= 2;
  triesValue += 1;
  gold.innerText = goldValue;
  tries.innerText = triesValue;
};

const createBoard = () => {
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement("div");
    square.innerText = i + 1;
    square.addEventListener("click", handleClick);
    square.setAttribute("id", i);
    grid.appendChild(square);
  }
};

const reveal = () => {
  grid.innerHTML = "";
  characterName.innerText = people[index].name;
  characterClass.innerText = people[index].class;
};

const nextRound = () => {
  grid.innerHTML = "";
  goldValue = 100;
  triesValue = 0;
  gold.innerText = goldValue;
  tries.innerText = triesValue;
  characterName.innerText = "";
  characterClass.innerText = "";
  index += 1;
  gridWrapper.style.backgroundImage = `url(images/${bgPaths[index]})`;
  gameRoundValue.innerText = index;
  createBoard();
  if (index + 1 === bgPaths.length) {
    const nextButton = document.getElementById("nextButton");
    nextButton.disabled = true;
    nextButton.innerText = "Last round";
  }
};

createBoard();
