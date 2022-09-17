import Controls from "./controls.js";
import Sounds from "./sounds.js";
import {
  buttonForest,
  iconForest,
  sliderForest,
  buttonRain,
  iconRain,
  sliderRain,
  buttonCoffeShop,
  iconCoffeShop,
  sliderCoffeeShop,
  buttonFire,
  iconFire,
  sliderFire,
  setMinutes, 
  setSeconds, 
  buttonPause, 
  buttonPlay, 
  buttonDarkMode, 
  buttonLightMode} from "./elements.js";
import Events from "./events.js";
import Utils from "./utils.js";
import Timer from "./timer.js";

const utils = Utils({
  buttonPause,
  buttonPlay,
  buttonDarkMode,
  buttonLightMode
});

const timer = Timer({
  setMinutes,
  setSeconds,
  utils
});

const controls = Controls({
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

});

Sounds();


Events({utils, controls, timer});




