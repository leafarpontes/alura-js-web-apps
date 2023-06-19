function validateGuess(speech) {
  const number = +speech;
  console.log("numero", number);

  if (Number.isNaN(number)) {
    guessElement.innerHTML = "<div>Valor Inválido</div>";
  }
  else if (numberOutOfRange(number)) {
    guessElement.innerHTML = `<div>Valor inválido: Fale um número entre ${minValue} e ${maxValue}</div>`;
  }
  else if (number === secretNumber) {
    document.body.innerHTML = `
      <h2>Você acertou!!!</h2>
      <h3>O número secreto era ${secretNumber}</h3>
    `
  }
  else if (number > secretNumber) {
    guessElement.innerHTML += "<div>O número secreto é menor <i class='fa-solid fa-down-long'></i></div>"
  }
  else {
    guessElement.innerHTML += "<div>O número secreto é maior <i class='fa-solid fa-up-long'></i></div>"
  }
}

function numberOutOfRange(number) {
  return number > maxValue || number < minValue
}