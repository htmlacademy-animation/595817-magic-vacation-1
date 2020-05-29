// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

document.addEventListener(`DOMContentLoaded`, function () {
  document.querySelector(`body`).classList.add(`ready`);

  document.body.addEventListener(`click`, function (e) {
    if (e.target.dataset.href === `prizes` || e.target.dataset.href === `game`) {
      document.querySelector(`.intermediate-bg`).style.height = `100%`;
      setTimeout(() => document.querySelector(`.intermediate-bg`).style.height = `0`, 500);
    }
  });
  document.body.addEventListener(`wheel`, function () {
    if (document.querySelector(`#prizes`).classList.contains(`active`) || document.querySelector(`#game`).classList.contains(`active`)) {
      document.querySelector(`.intermediate-bg`).style.height = `100%`;
      setTimeout(() => document.querySelector(`.intermediate-bg`).style.height = `0`, 500);
    }
  });

});
