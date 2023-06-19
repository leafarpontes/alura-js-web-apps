window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang="pt-Br";
recognition.start();
recognition.addEventListener('result', onSpeak);
const guessElement = document.getElementById('chute');

function onSpeak(e) {
  const speech = e.results[0][0].transcript;
  console.log(speech)
  showGuess(speech);
  validateGuess(speech);
}

function showGuess(guess) {
  guessElement.innerHTML = `
    <div>Você disse</div>
    <span class="box">${guess}</span>
  `
}

recognition.addEventListener("end", () => recognition.start());