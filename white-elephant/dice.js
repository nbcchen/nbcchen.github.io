const btnDice = document.querySelector(".button");
const diceResults = [
  "PASS GIFTS LEFT ⬅️",
  "TRADE YOUR GIFT WITH SOMEONE 🔄",
  "MAKE 2 PEOPLE SWAP GIFTS 🔁",
  "STEAL ANY GIFT 🥷",
  "KEEP YOUR GIFT 🎁",
  "EVERYONE PASS GIFTS RIGHT ➡️",
];

function diceAction() {
  const diceOneOne = document.querySelector(".dice_one_f1");
  const diceOneTwo = document.querySelector(".dice_one_f2");
  const diceOneThree = document.querySelector(".dice_one_f3");
  const diceOneFour = document.querySelector(".dice_one_f4");
  const diceOneFive = document.querySelector(".dice_one_f5");
  const diceOneSix = document.querySelector(".dice_one_f6");

  const diceOne = Math.floor(Math.random() * 6 + 1);

  diceOne === 1
    ? (diceOneOne.style.zIndex = "1")
    : (diceOneOne.style.zIndex = "0");
  diceOne === 2
    ? (diceOneTwo.style.zIndex = "1")
    : (diceOneTwo.style.zIndex = "0");
  diceOne === 3
    ? (diceOneThree.style.zIndex = "1")
    : (diceOneThree.style.zIndex = "0");
  diceOne === 4
    ? (diceOneFour.style.zIndex = "1")
    : (diceOneFour.style.zIndex = "0");
  diceOne === 5
    ? (diceOneFive.style.zIndex = "1")
    : (diceOneFive.style.zIndex = "0");
  diceOne === 6
    ? (diceOneSix.style.zIndex = "1")
    : (diceOneSix.style.zIndex = "0");

  document.getElementsByClassName("spinner")[0].style.display = "block";
  document.getElementById("result").innerHTML = "";
  document.getElementById("result").style.border = "none";
  setTimeout(() => {
    document.getElementsByClassName("spinner")[0].style.display = "none";
    document.getElementById("result").innerHTML = `<h2 class="result">${diceResults[diceOne - 1]
      }</h2>`;
    document.getElementById("result").style.border = "2px solid white";
  }, 1500);
}

btnDice.addEventListener("click", diceAction);
