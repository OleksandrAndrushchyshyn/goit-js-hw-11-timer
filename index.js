class CountdownTimer {
  constructor(params) {
    const intervalId = setInterval(() => {
      const refs = {
        daysText: document.querySelector(
          params.selector + " [data-value='days']"
        ),
        hoursText: document.querySelector(
          params.selector + " [data-value='hours']"
        ),
        minsText: document.querySelector(
          params.selector + " [data-value='mins']"
        ),
        secsText: document.querySelector(
          params.selector + " [data-value='secs']"
        ),
      };
      const time = params.targetDate.getTime() - Date.now();
      if (time < 1000) {
        clearInterval(intervalId);
      }
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);
      refs.daysText.textContent = this.formatNumber(days);
      refs.hoursText.textContent = this.formatNumber(hours);
      refs.minsText.textContent = this.formatNumber(mins);
      refs.secsText.textContent = this.formatNumber(secs);
    }, 1000);
  }
  formatNumber(number) {
    if (number < 0) {
      return "00";
    }
    if (number < 10) {
      return "0" + number;
    }
    return number;
  }
}
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Aug 12, 2021 22:06:20"),
});
