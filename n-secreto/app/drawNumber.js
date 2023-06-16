const minNumber = 1;
const maxNumber = 100;
const secretNumber = generateRandomNumber();

function generateRandomNumber() {
  return parseInt(Math.random() * 100);
}

console.log(secretNumber)