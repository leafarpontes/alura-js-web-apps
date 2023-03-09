const buttons = document.querySelectorAll('.tecla');
const sounds = document.querySelectorAll("[id^='som_']");

const playSound = (sound) => {
  sound.play();
}

buttons.forEach(button => {
  const className = button.classList[1];
  sounds.forEach(sound => {
    let [first, ...id] = sound.id.split('_');
    id = id.join('_');
    if (className === id) {
      button.addEventListener('click', () => playSound(sound));
    }
  })
})