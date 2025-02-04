import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function initAnimations() {
  // animating real time and city name along with country name

  gsap.from('.place-box', {
    x: -300,
    opacity: 0,
    duration: 1.5,
    ease: 'back.out(1.7)',
  });

  gsap.from('.time-text', {
    x: 300,
    opacity: 0,
    duration: 1.5,
    ease: 'back.out(1.7)',
  });

  // animating weather temperature and weather description section

  gsap.from('.temp-weather-section *', {
    y: 300,
    opacity: 0,
    duration: 1.5,
    ease: 'back.out(1.7)',
    stagger: 0.1,
  });

  // animating sunrise and sunset div

  gsap.from('.sun-rise-box', {
    y: 300,
    opacity: 0,
    duration: 1.5,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.sun-rise-box',
      start: 'top 105%',
    },
  });

  gsap.from('.sun-set-box', {
    y: 300,
    opacity: 0,
    duration: 1.5,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.sun-set-box',
      start: 'top 105%',
    },
  });

  // animating other info section's divs

  gsap.from('.pressure-box', {
    scale: 0,
    opacity: 0,
    duration: 1.5,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.pressure-box',
      start: 'top 100%',
    },
  });
  gsap.from('.humidity-box', {
    scale: 0,
    opacity: 0,
    duration: 1.5,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.humidity-box',
      start: 'top 100%',
    },
  });

  gsap.from('.visibility-box', {
    scale: 0,
    opacity: 0,
    duration: 1.5,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.visibility-box',
      start: 'top 130%',
    },
  });

  gsap.from('.wind-speed-box', {
    scale: 0,
    opacity: 0,
    duration: 1.5,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.wind-speed-box',
      start: 'top 130%',
    },
  });
}

export default initAnimations;
