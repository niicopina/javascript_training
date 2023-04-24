const keyMappings = {
    "a": "65",
    "s": "83",
    "d": "68",
    "f": "70",
    "g": "71",
    "h": "72",
    "j": "74",
    "k": "75",
    "l": "76"
  };
window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${keyMappings[e.key]}"]`)
    const key = document.querySelector(`.key[data-key="${e.key}"]`)
    if(audio) {
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing')
        setTimeout(() => {
            key.classList.remove('playing');
          }, 1000);
    } else {
        console.log('no se encuentra')
    }
})