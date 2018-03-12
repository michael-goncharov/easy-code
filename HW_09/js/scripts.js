class VideoPlayer {
  constructor() {
    this.player = document.querySelector('.player');
    this.video  = this.player.querySelector('.viewer');
    this.progress = document.querySelector('.progress');
    this.progressBar = this.progress.querySelector('.progress__filled');
    this.toggle = this.player.querySelector('.toggle');
    this.skipButtons = this.player.querySelectorAll('[data-skip]');
    this.ranges = this.player.querySelectorAll('.player__slider');
  }

  init() {
    // start plugin
    this.events();
    this.saveToLocalStorage();
    this.progressAnimation();
    this.getLocalStatus();
  };
  events() {
    // all events
    this.video.addEventListener('click', e => this.togglePlay());
    this.toggle.addEventListener('click', e => this.togglePlay());
    this.ranges.forEach(range => range.addEventListener('change', e => this.handleRangeUpdate(e)));
    this.ranges.forEach(range => range.addEventListener('mousemove', e => this.handleRangeUpdate(e)));
    this.skipButtons.forEach(btn => btn.addEventListener('click', e => this.skip(e)));
    this.progress.addEventListener('click', e => this.progressPosition(e));
  };
  togglePlay() {
    // play/pause video
      const method = this.video.paused ? 'play' : 'pause';
      this.toggle.textContent = this.video.paused ? '❚ ❚' : '►';
      this.video[method]();
  };
  handleRangeUpdate(e) {
    this.video[e.target.name] = e.target.value;
  };
  skip(e) {
    // time skip
    this.video.currentTime += parseFloat(e.target.dataset.skip);
  };
  progressPosition(e) {
    this.progressBar.style.flexBasis = `${e.offsetX / 320 * 100}%`;
    this.video.currentTime = (e.offsetX / 320 * this.video.duration);
  }
  progressAnimation() {
    setInterval(() => this.progressBar.style.flexBasis =
      `${this.video.currentTime / this.video.duration * 100}%`, 10);
  }
  saveToLocalStorage() {
    setInterval(() => {
      let dataObj = {};
      dataObj.volume = this.video.volume;
      dataObj.playbackRate = this.video.playbackRate;
      dataObj.position = this.video.currentTime;
      localStorage.setItem('dataObj', JSON.stringify(dataObj));
    }, 10);
  }
  getLocalStatus() {
    let localObj = JSON.parse(localStorage.getItem('dataObj')) || [];
    this.video.volume = localObj.volume;
    this.video.playbackRate = localObj.playbackRate;
    this.video.currentTime = localObj.position;
    this.ranges[0].value = localObj.volume;
    this.ranges[1].value = localObj.playbackRate;
  }

}
const video = new VideoPlayer();
video.init();
