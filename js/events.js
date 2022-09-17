import 
{buttonPlay,
buttonPause,
buttonIncrement,
buttonDecrement,
buttonStop,
setMinutes,
setSeconds,
buttonForest,
buttonCoffeShop,
buttonFire,
buttonRain,
sliderForest,
buttonDarkMode,
buttonLightMode,
sliderCoffeeShop,
sliderFire,
sliderRain} from "./elements.js"

export default function ({utils, controls, timer}){
  buttonPlay.addEventListener('click', function() {
    timer.hold();
    if (setMinutes.innerText == '00'&& setSeconds.innerText == '00'){
      return;
    }
    utils.toggleButtonPlayAndPause();
    timer.coutdown();
  });

  buttonPause.addEventListener('click', function(){
    timer.hold();
    utils.toggleButtonPlayAndPause();

  })


  buttonDecrement.addEventListener('click', function() {
    let actuallyMinutes = Number(setMinutes.innerText);
    if (actuallyMinutes >= 5){
      setMinutes.innerText = actuallyMinutes -= 5;
      setMinutes.innerText = utils.zeroToLeft(actuallyMinutes);
    }

    else if(actuallyMinutes <= 5){
      setMinutes.innerText = '00';
    }
  })

  buttonIncrement.addEventListener('click', function() {
    
    let actuallyMinutes = Number(setMinutes.innerText);
      setMinutes.innerText = actuallyMinutes+=5;
      setMinutes.innerText = utils.zeroToLeft(actuallyMinutes);
  })

  buttonStop.addEventListener('click', function() {
    timer.hold();

    if (buttonPlay.classList.contains('hide')){
      utils.toggleButtonPlayAndPause();
    }

    setMinutes.innerText = '00';
    setSeconds.innerText = '00';
  })

  buttonForest.addEventListener('click', function(){
    controls.soundForestPlay();
    controls.soundRainStop();
    controls.soundCoffeeShopStop();
    controls.soundFireStop();
    
  })

  buttonCoffeShop.addEventListener('click', function(){
    controls.soundCoffeeShopPlay();
    controls.soundRainStop();
    controls.soundFireStop();
    controls.soundForestStop();
  })

  buttonFire.addEventListener('click', function(){
    controls.soundFirePlay();
    controls.soundCoffeeShopStop();
    controls.soundRainStop();
    controls.soundForestStop();
  })

  buttonRain.addEventListener('click', function(){
    controls.soundRainPlay();
    controls.soundCoffeeShopStop();
    controls.soundForestStop();
    controls.soundFireStop();
  })

  buttonLightMode.addEventListener('click', function(){
    utils.toggleButtonDarkAndLight();
    document.querySelector('body').classList.remove('light');
    document.querySelector('body').classList.add('dark');
  })

  buttonDarkMode.addEventListener('click', function(){
    utils.toggleButtonDarkAndLight();
    document.querySelector('body').classList.remove('dark');
    document.querySelector('body').classList.add('light');
  })

  sliderForest.addEventListener('input', function(){
    controls.setVolumeForest();
  })

  sliderCoffeeShop.addEventListener('input', function(){
    controls.setVolumeCoffeeShop();
  })

  sliderFire.addEventListener('input', function(){
    controls.setVolumeFire();
  })

  sliderRain.addEventListener('input', function(){
    controls.setVolumeRain();
  })

}
