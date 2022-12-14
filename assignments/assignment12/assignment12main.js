const yesButton = document
  .querySelector(".yes-button")
  .addEventListener("click", yesButtonClicked);
const noButton = document
  .querySelector(".no-button")
  .addEventListener("click", noButtonClicked);

function getNumber() {
  const randNum = () => Math.floor(Math.random() * 10);
  const getNumString = (n) =>
    new Array(n)
      .fill(0)
      .map(() => randNum())
      .join("");
  const generateNumber = () =>
    `${getNumString(3)}-${getNumString(3)}-${getNumString(4)}`;

  displayNumber(generateNumber());
}

function displayNumber(generateNumber) {
  document.querySelector(".number-text").textContent =
    "Is " + generateNumber + " your number?";
}

function yesButtonClicked() {
  document.querySelector(".number-text").textContent =
    "Thank you for entering your number!";
}

function noButtonClicked() {
  document.querySelector(".number-text").textContent =
    "Please refresh the page to see if your number is next!";
}

getNumber();