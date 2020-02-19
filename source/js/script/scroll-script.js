/* eslint-disable func-names */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-loop-func */
/* eslint-disable arrow-parens */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable wrap-iife */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
export default function ScrollFunction() {
  const scroll = {
    init: () => {
      scroll.dom();
      scroll.scroll();
    },
    dom: () => {
      scroll.navLinks = document.querySelectorAll('a');
      scroll.sections = document.querySelectorAll('href');
    },
    scroll: () => {
      const makeNavLinksSmooth = () => {
        for (const n in scroll.navLinks) {
          if (scroll.navLinks.hasOwnProperty(n)) {
            scroll.navLinks[n].addEventListener('click', e => {
              e.preventDefault();
              document.querySelector(scroll.navLinks[n].hash).scrollIntoView({
                behavior: 'smooth',
              });
            });
          }
        }
      };
      makeNavLinksSmooth();

      scroll.navLinks.forEach(link => {
        link.addEventListener('click', function () {
          if (this.classList.contains('is-active')) {
            this.classList.remove('is-active');
          } else {
            this.classList.add('active');
            scroll.navLinks.forEach(l => {
              if (l !== this) {
                l.classList.remove('active');
              }
            });
          }
        });
      });
    },
  };
  scroll.init();
}
