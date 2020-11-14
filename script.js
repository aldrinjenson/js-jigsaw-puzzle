const grid = document.querySelector(".grid");
const gold = document.getElementById("gold-value");
const tries = document.getElementById("tries-value");
const gameRoundValue = document.getElementById("round-value");
const gridWrapper = document.querySelector(".grid-wrapper");
const characterName = document.getElementById("character-name");
const characterClass = document.getElementById("character-class");

const width = 10;

const people = {
  0: { name: "St. Joseph", class: "Bethlehem", imgSrc: "0.jpg" }, // trial
  1: { name: "St. Dominic Savio", class: "Italy", imgSrc: "1.jpeg" },
  2: { name: "Blessed Carlo Acutis", class: "Italy", imgSrc: "4.jpg" },
  3: { name: "Saint Therese of Lisieux", class: "France", imgSrc: "2.jpg" },
  4: { name: "St. Maria Goretti", class: "Italy", imgSrc: "3.jpg" },
  5: { name: "Saint Agnes", class: "Rome", imgSrc: "7.jpg" },
  6: { name: "St. Joan of Arc", class: "Rome", imgSrc: "8.jpg" },
  7: { name: "Saint Philomena", class: "Greece", imgSrc: "6.jpg" },
  8: { name: "St. Kateri Tekakwitha", class: "North America", imgSrc: "5.jpg" },
};
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
