const grid = document.querySelector(".grid");
const gold = document.getElementById("gold-value");
const tries = document.getElementById("tries-value");
const gameRoundValue = document.getElementById("round-value");
const gridWrapper = document.querySelector(".grid-wrapper");
const characterName = document.getElementById("character-name");
const altText = document.getElementById("alt-text");

const width = 10;

let goldValue = 100;
let triesValue = 0;
let index = 0;

gridWrapper.style.backgroundImage = `url(images/${people[index].imgSrc})`;
gameRoundValue.innerText = index;
gold.innerText = goldValue;
tries.innerText = triesValue;

const handleClick = (e) => {
  if (e.target.style.backgroundColor !== "transparent") {
    e.target.style.backgroundColor = "transparent";
    e.target.innerText = "";
    goldValue -= 2;
    triesValue += 1;
    gold.innerText = goldValue;
    tries.innerText = triesValue;
  }
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
  altText.innerText = people[index].alt;
};

const nextRound = () => {
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
  if (!people[index + 1]) {
    const nextButton = document.getElementById("nextButton");
    nextButton.disabled = true;
    nextButton.innerText = "Last round";
  }
};

createBoard();
