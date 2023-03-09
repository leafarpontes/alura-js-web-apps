const buttons = document.querySelectorAll('.tecla');
const sounds = document.querySelectorAll("[id^='som_']");

buttons.forEach(button => {
  const className = button.classList[1];
  sounds.forEach(sound => {
    const id = sound.id.substring(sound.id.indexOf('_') + 1);
    if (className === id) {
      button.addEventListener('click', (e) => sound.play());
      button.addEventListener('keydown', (e) => e.code === "Space" || e.code === "Enter" ? button.classList.add('ativa') : null);
      button.addEventListener('keyup', (e) => button.classList.remove('ativa'));
    }
  })
})