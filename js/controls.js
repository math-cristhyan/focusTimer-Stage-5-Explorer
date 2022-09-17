import Sounds from "./sounds.js";
const sounds = Sounds();
export default function controls({
  buttonForest,
  buttonRain,
  buttonCoffeShop,
  buttonFire,
  iconForest,
  iconRain,
  iconCoffeShop,
  iconFire,
  sliderForest,
  sliderRain,
  sliderCoffeeShop,
  sliderFire
}){

  function soundForestPlay(){
    buttonForest.classList.add('bbsecundary');
    iconForest.classList.add('svgsecundary');
    sounds.bgAudioForest.play();
  }


  function soundRainPlay(){
    buttonRain.classList.add('bbsecundary');
    iconRain.classList.add('svgsecundary');
    sounds.bgAudioRain.play();
  }

  function soundCoffeeShopPlay(){
    buttonCoffeShop.classList.add('bbsecundary');
    iconCoffeShop.classList.add('svgsecundary');
    sounds.bgAudioCoffeeShop.play();
  }

  function soundFirePlay(){
    buttonFire.classList.add('bbsecundary');
    iconFire.classList.add('svgsecundary');
    sounds.bgAudioFirePlace.play();
  }

  function soundForestStop(){
    buttonForest.classList.remove('bbsecundary');
    iconForest.classList.remove('svgsecundary');
    sounds.bgAudioForest.pause();
  }

  function soundRainStop(){
    buttonRain.classList.remove('bbsecundary');
    iconRain.classList.remove('svgsecundary');
    sounds.bgAudioRain.pause();
  }

  function soundCoffeeShopStop(){
    buttonCoffeShop.classList.remove('bbsecundary');
    iconCoffeShop.classList.remove('svgsecundary');
    sounds.bgAudioCoffeeShop.pause();
  }

  function soundFireStop(){
    buttonFire.classList.remove('bbsecundary');
    iconFire.classList.remove('svgsecundary');
    sounds.bgAudioFirePlace.pause();
  }

  function setVolumeForest(){
    let audio = sounds.bgAudioForest;
    let volume = sliderForest.value;
    audio.volume = volume / 100;
  }

  function setVolumeRain(){
    let audio = sounds.bgAudioRain;
    let volume = sliderRain.value;
    audio.volume = volume / 100;
  }

  function setVolumeCoffeeShop(){
    let audio = sounds.bgAudioCoffeeShop;
    let volume = sliderCoffeeShop.value;
    audio.volume = volume / 100;
  }

  function setVolumeFire(){
    let audio = sounds.bgAudioFirePlace;
    let volume = sliderFire.value;
    audio.volume = volume / 100;
  }





  return{
    soundForestPlay,
    soundForestStop,
    setVolumeForest,
    soundCoffeeShopPlay,
    soundCoffeeShopStop,
    setVolumeCoffeeShop,
    soundFirePlay,
    soundFireStop,
    setVolumeFire,
    soundRainPlay,
    soundRainStop,
    setVolumeRain
  }
}