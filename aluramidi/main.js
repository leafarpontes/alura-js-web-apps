const buttons = document.querySelectorAll('.tecla');
const sounds = document.querySelectorAll("[id^='som_']");

buttons.forEach(button => {
  const className = button.classList[1];
  sounds.forEach(sound => {
    const id = sound.id.substring(sound.id.indexOf('_') + 1);
    className === id ? button.addEventListener('click', () => sound.play()) : null
  })
})