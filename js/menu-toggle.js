import { addClass, removeClass } from '../js/utility-class.js';

const toggler = document.getElementById("menu-toggler");

toggler.addEventListener("click", function () {
  const menu = document.getElementById("menu");

  if (menu.className.indexOf('opacity-0') > -1) {
    addClass(toggler, 'fixed top-50 right-50')
    removeClass(toggler, "relative")
    addClass(menu, "opacity-100 z-30")
    removeClass(menu, "opacity-0 invisible")
  } else {
    removeClass(toggler, 'fixed top-50 right-50')
    addClass(toggler, "relative")
    removeClass(menu, "opacity-100 z-30")
    addClass(menu, "opacity-0 invisible")
  }
})
