const grid = document.querySelector(".grid");
const gold = document.getElementById("gold-value");
const tries = document.getElementById("tries-value");
const gameRoundValue = document.getElementById("round-value");
const gridWrapper = document.querySelector(".grid-wrapper");
const characterName = document.getElementById("character-name");
const altText = document.getElementById("alt-text");
const nextButton = document.getElementById("nextButton");
const revealButton = document.getElementById("revealButton");

const width = 10;
const peopleLength = Object.keys(people).length;

let goldValue = 100;
let triesValue = 0;
let index = 0;

gridWrapper.style.backgroundImage = `url(images/${people[index].imgSrc})`;
gameRoundValue.innerText = index;
gold.innerText = goldValue;
tries.innerText = triesValue;

// initial function for creating the grid
const createBoard = () => {
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement("div");
    square.innerText = i + 1;
    square.addEventListener("click", handleClick);
    square.setAttribute("id", i);
    grid.appendChild(square);
  }
};

// onClick handler for each cell
const handleClick = (e) => {
  if (e.target.style.backgroundColor !== "transparent") {
    e.target.style.backgroundColor = "transparent";
    e.target.style.cursor = "default";
    e.target.innerText = "";
    goldValue -= 2;
    triesValue += 1;
    gold.innerText = goldValue;
    tries.innerText = triesValue;
  }
};

// reveal button handler
const reveal = () => {
  grid.innerHTML = "";
  characterName.innerText = people[index].name;
  altText.innerText = people[index].alt;
  revealButton.disabled = true;
};

// nextRoundButton handler
const nextRound = () => {
  if (index + 1 === peopleLength) {
    window.location.reload();
  }
  grid.innerHTML = "";
  goldValue = 100;
  triesValue = 0;
  gold.innerText = goldValue;
  tries.innerText = triesValue;
  characterName.innerText = "";
  altText.innerText = "";
  index += 1;
  gridWrapper.style.backgroundImage = `url(images/${people[index].imgSrc})`;
  gameRoundValue.innerText = index;
  createBoard();
  revealButton.disabled = false;
  if (!people[index + 1]) {
    nextButton.innerText = "Try again";
  }
};

createBoard();
