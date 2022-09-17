  export default function Utils({buttonPause, buttonPlay, buttonDarkMode, buttonLightMode}){
  
  function zeroToLeft(num) {
    return num >=10 ? num : `0${num}`; 
  }

  function toggleButtonPlayAndPause(){
    buttonPlay.classList.toggle('hide');
    buttonPause.classList.toggle('hide');
  }

  function toggleButtonDarkAndLight(){
    buttonLightMode.classList.toggle('hide');
    buttonDarkMode.classList.toggle('hide');
  }

  return {
    zeroToLeft,
    toggleButtonPlayAndPause,
    toggleButtonDarkAndLight
  }
}
