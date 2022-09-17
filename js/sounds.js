export default function(){

  const bgAudioForest = new Audio('./assets/audios/Floresta.wav');
  const bgAudioRain = new Audio('./assets/audios/Chuva.wav');
  const bgAudioCoffeeShop = new Audio('./assets/audios/Cafeteria.wav');
  const bgAudioFirePlace = new Audio('./assets/audios/Lareira.wav');

  bgAudioForest.volume = 0.5;
  bgAudioRain.volume = 0.5;
  bgAudioCoffeeShop.volume = 0.5;
  bgAudioFirePlace.volume = 0.5;

  return {
    bgAudioForest,
    bgAudioRain,
    bgAudioCoffeeShop,
    bgAudioFirePlace
  }

}