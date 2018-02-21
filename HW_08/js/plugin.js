const buttons = document.querySelectorAll('[data-time]');
const form = document.forms['custom'];
const input = form.elements['minutes'];
const stopBtn = document.querySelector('[data-stop]');

const timer = (function () {
  let countdown,
      timerDisplay,
      endTime,
      alarmSound;

  function init(settings) {
    timerDisplay = document.querySelector(settings.timeLeftSelector);
    endTime = document.querySelector(settings.timeEndSelector);
    if (settings.alarmSound) {
      alarmSound = new Audio(settings.alarmSound);
    }
    return this;
  }

  function start(seconds) {
    if (!timerDisplay || !endTime) {
      return console.log('Please init module first');
    if (!seconds || typeof(seconds) !== 'number') return console.log('Please provide seconds');
    }

    clearInterval(countdown);
    alarmSound.pause();
    alarmSound.currentTime = 0;

    const now = Date.now();
    const then = now + seconds * 1000;

    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(  () => {
      const secondsLeft = Math.round((then - Date.now())/1000);
      if (secondsLeft < 0) {
        playSound();
        clearInterval(countdown);
        return;
      }
      displayTimeLeft(secondsLeft);
    }, 1000);
  }

  function displayTimeLeft(seconds) {
    if (seconds < 3601) {
      const minutes = Math.floor(seconds / 60);
      const reminedSeconds = seconds % 60;
      const display = `${minutes}:${reminedSeconds < 10 ? '0' : ''}${reminedSeconds}`;
      document.title = display;
      timerDisplay.textContent = display;
    }
      else if (seconds > 3601 && seconds < 86401) {
        const hours = Math.floor(seconds / 3600)
        const minutes = Math.floor(seconds % 3600 / 60);
        const reminedSeconds = seconds % 60;
        const display = `${hours}:${minutes}:${reminedSeconds < 10 ? '0' : ''}${reminedSeconds}`;
        document.title = display;
        timerDisplay.textContent = display;
    }
        else if (seconds > 86400) {
          const days = Math.floor(seconds / 86400)
          const hours = Math.floor(seconds % 86400 / 3600)
          const minutes = Math.floor(seconds % 3600 / 60);
          const reminedSeconds = seconds % 60;
          const display = `${days}d. ${hours}:${minutes}:${reminedSeconds < 10 ? '0' : ''}${reminedSeconds}`;
          document.title = display;
          timerDisplay.textContent = display;
    }

  }

  function displayEndTime(timestamp) {
    const now = new Date(Date.now());
    const end = new Date(timestamp);
    const locale = "en-us";
    const month = end.toLocaleString(locale, { month: "long" });
    const day = end.getDate();
    const hour = end.getHours(end);
    const minutes = end.getMinutes(end);

    if (now.getDate() === day) {
      endTime.textContent = `Be back at ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
    }
      else {
        endTime.textContent = `Be back on ${month}, ${day} at ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
      }
  }

  function stop() {
    clearInterval(countdown);
    endTime.textContent = "";
    timerDisplay.textContent = "";
    document.title = "timer stopped"
  }

  function playSound() {
    alarmSound.play();
  }
  return {
    init,
    start,
    stop
  }
})()
// init timer
timer.init({
  timeLeftSelector: '.display__time-left',
  timeEndSelector: '.display__end-time',
  alarmSound: 'audio/bell.mp3'
});
// start timer by click
 function startTimer(e) {
   const seconds = parseInt(this.dataset.time);
   timer.start(seconds);

 }
 buttons.forEach(btn => btn.addEventListener('click', startTimer));

 // start timer by submit
 function startTimerSubmit(e) {
   e.preventDefault();
   if (!input.value) {
     form.reset();
   } else {
      const seconds = parseInt(input.value) * 60;
      timer.start(seconds);
      form.reset();
       }
 }
 form.addEventListener('submit', startTimerSubmit);

 // stop timer
 stopBtn.addEventListener('click', timer.stop);
