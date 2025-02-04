import Clear from './assets/clear-sky.png';
import Clouds from './assets/cloud.png';
import Haze from './assets/haze.png';
import Mist from './assets/mist.png';
import Rain from './assets/rainy-day.png';
import Snow from './assets/snowfall.png';
import Thunderstorm from './assets/thunderstorm.png';

const weatherDescriptions = {
  Haze: {
    src: Haze,
    alt: 'Hazy weather',
  },
  Clear: {
    src: Clear,
    alt: 'Clear sky',
  },
  Clouds: {
    src: Clouds,
    alt: 'Cloudy conditions',
  },
  Rain: {
    src: Rain,
    alt: 'Rainy weather',
  },
  Thunderstorm: {
    src: Thunderstorm,
    alt: 'Thunderstorm',
  },
  Snow: {
    src: Snow,
    alt: 'Snowy conditions',
  },
  Mist: {
    src: Mist,
    alt: 'Misty weather',
  },
};

export default weatherDescriptions;
