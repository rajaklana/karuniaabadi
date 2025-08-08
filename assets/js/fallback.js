// Fallback script untuk menangani library yang tidak dimuat
(function() {
  'use strict';
  
  // Fallback untuk GSAP
  if (typeof gsap === 'undefined') {
    console.warn('GSAP not loaded, creating fallback');
    window.gsap = {
      utils: {
        toArray: function(selector) {
          return Array.from(document.querySelectorAll(selector));
        }
      },
      set: function(elements, properties) {
        // Simple fallback
        if (Array.isArray(elements)) {
          elements.forEach(el => {
            if (properties.xPercent !== undefined) {
              el.style.transform = `translateX(${properties.xPercent}%)`;
            }
          });
        }
      },
      timeline: function() {
        return {
          to: function() { return this; },
          fromTo: function() { return this; },
          add: function() { return this; },
          time: function() { return 0; },
          duration: function() { return 0; }
        };
      }
    };
  }
  
  // Fallback untuk Swiper
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper not loaded, creating fallback');
    window.Swiper = function(selector, options) {
      console.log('Swiper fallback initialized for:', selector);
      return {
        on: function() { return this; },
        update: function() { return this; }
      };
    };
  }
  
  // Fallback untuk GLightbox
  if (typeof GLightbox === 'undefined') {
    console.warn('GLightbox not loaded, creating fallback');
    window.GLightbox = function(options) {
      console.log('GLightbox fallback initialized');
      return {
        open: function() {},
        close: function() {}
      };
    };
  }
  
  // Fallback untuk AOS
  if (typeof AOS === 'undefined') {
    console.warn('AOS not loaded, creating fallback');
    window.AOS = {
      init: function(options) {
        console.log('AOS fallback initialized');
        // Simple animation fallback
        const elements = document.querySelectorAll('[data-aos]');
        elements.forEach(el => {
          el.style.opacity = '1';
          el.style.transform = 'none';
        });
      }
    };
  }
  
  // Fallback untuk PureCounter
  if (typeof PureCounter === 'undefined') {
    console.warn('PureCounter not loaded, creating fallback');
    window.PureCounter = function(options) {
      console.log('PureCounter fallback initialized');
      const elements = document.querySelectorAll(options.selector || '.purecounter');
      elements.forEach(el => {
        const target = parseInt(el.getAttribute('data-purecounter-duration') || '0');
        el.textContent = target;
      });
    };
  }
  
})(); 