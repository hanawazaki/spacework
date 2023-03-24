import { addClass, removeClass } from '../js/utility-class.js';

const centerCard = document.getElementById('card__testi2')
const leftCard = document.getElementById('card__testi1')
const rightCard = document.getElementById('card__testi3')

leftCard.addEventListener('mouseover', function () {
  if (leftCard.className.indexOf('scale-95') > -1) {
    addClass(centerCard, 'scale-95')
    addClass(rightCard, 'scale-95')
    addClass(leftCard, 'scale-110')
    removeClass(centerCard, 'scale-110')
    removeClass(rightCard, 'scale-110')
    removeClass(leftCard, 'scale-95')
  } else {
    addClass(leftCard, 'scale-95')
    removeClass(leftCard, 'scale-110')
  }
})

leftCard.addEventListener('mouseout', function () {
  if (leftCard.className.indexOf('scale-110') > -1) {
    addClass(leftCard, 'scale-95')
    removeClass(leftCard, 'scale-110')
    removeClass(centerCard, 'scale-95')
    addClass(centerCard, 'scale-110')
  }
})

rightCard.addEventListener('mouseover', function () {
  if (rightCard.className.indexOf('scale-95') > -1) {
    addClass(centerCard, 'scale-95')
    addClass(leftCard, 'scale-95')
    addClass(rightCard, 'scale-110')
    removeClass(centerCard, 'scale-110')
    removeClass(leftCard, 'scale-110')
    removeClass(rightCard, 'scale-95')
  } else {
    addClass(rightCard, 'scale-95')
    removeClass(rightCard, 'scale-110')
  }
})

rightCard.addEventListener('mouseout', function () {
  if (rightCard.className.indexOf('scale-110') > -1) {
    addClass(rightCard, 'scale-95')
    removeClass(rightCard, 'scale-110')
    removeClass(centerCard, 'scale-95')
    addClass(centerCard, 'scale-110')
  }
})