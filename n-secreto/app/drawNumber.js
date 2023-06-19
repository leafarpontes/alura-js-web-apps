const minValue = 1;
const maxValue = 100;
const secretNumber = generateRandomNumber();
// console.log(secretNumber);

function generateRandomNumber() {
  return parseInt(Math.random() * maxValue + 1);
}

const minValueElement = document.getElementById('menor-valor');
const maxValueElement = document.getElementById('maior-valor');
minValueElement.innerHTML = minValue;
maxValueElement.innerHTML = maxValue;