

export default function Timer({setMinutes, setSeconds, utils}){

  let timerTimeOut;

  function coutdown() {
    timerTimeOut = setInterval(function() {
    let minutes = Number(setMinutes.innerText);
    let seconds = Number(setSeconds.innerText);

    if (seconds === 0 && minutes >= 1){
      setSeconds.innerText = seconds = 60;
      setMinutes.innerText = minutes -= 1;
      setMinutes.innerText = utils.zeroToLeft(minutes);
    }

    if (seconds > 0 || minutes >= 1) {
      setSeconds.innerText = seconds -= 1;
      setSeconds.innerText = utils.zeroToLeft(seconds);
    }

    if (minutes <= 0){
      return;
    }
    
  }, 1000);
  }

  function hold(){
    clearInterval(timerTimeOut);
  }

  return {
    coutdown,
    hold
  }
}