/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/active.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/active.js":
/*!****************************************!*\
  !*** ./app/javascript/packs/active.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  'use strict';

  var browserWindow = $(window); // :: 1.0 Preloader Active Code

  browserWindow.on('load', function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  }); // :: 2.0 Nav Active Code

  if ($.fn.classyNav) {
    $('#vcardNav').classyNav();
  } // :: 3.0 Masonary Gallery Active Code


  if ($.fn.imagesLoaded) {
    $('.vcard-portfolio').imagesLoaded(function () {
      // filter items on button click
      $('.portfolio-menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
          filter: filterValue
        });
      }); // init Isotope

      var $grid = $('.vcard-portfolio').isotope({
        itemSelector: '.single-portfolio-area',
        percentPosition: true,
        masonry: {
          columnWidth: '.single-portfolio-area'
        }
      });
    });
  } // :: 4.0 Gallery Menu Style Active Code


  $('.portfolio-menu button.btn').on('click', function () {
    $('.portfolio-menu button.btn').removeClass('active');
    $(this).addClass('active');
  }); // :: 5.0 Mobile Menu Active Code

  $('.nav-toggle').on('click', function () {
    $('.vcard-nav').toggleClass('on');
  });
  $('.vcard-nav').on('click', function () {
    $(this).removeClass('on');
  }); // :: 6.0 Image Popup Active Code

  if ($.fn.magnificPopup) {
    $('.img-url').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  } // :: 7.0 ScrollUp Active Code


  if ($.fn.scrollUp) {
    browserWindow.scrollUp({
      scrollSpeed: 1500,
      scrollText: '<i class="fa fa-angle-up"></i>'
    });
  } // :: 8.0 CouterUp Active Code


  if ($.fn.counterUp) {
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
  } // :: 9.0 Testimonials Slides Active Code


  if ($.fn.owlCarousel) {
    $(".testimonial-slides").owlCarousel({
      items: 3,
      loop: true,
      center: true,
      autoplay: true,
      smartSpeed: 1500,
      margin: 30,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
        320: {
          items: 1
        },
        576: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });
  } // :: 10.0 Sticky Active Code


  browserWindow.on('scroll', function () {
    if (browserWindow.scrollTop() > 0) {
      $('.header-area').addClass('sticky');
    } else {
      $('.header-area').removeClass('sticky');
    }
  }); // :: 11.0 wow Active Code

  if (browserWindow.width() > 767) {
    new WOW().init();
  } // :: 12.0 Progress Bar Active Code


  if ($.fn.circleProgress) {
    $('#circle').circleProgress({
      size: 180,
      emptyFill: "rgba(0, 0, 0, .0)",
      fill: '#ffb016',
      thickness: '16',
      reverse: true
    });
    $('#circle2').circleProgress({
      size: 180,
      emptyFill: "rgba(0, 0, 0, .0)",
      fill: '#ffb016',
      thickness: '16',
      reverse: true
    });
    $('#circle3').circleProgress({
      size: 180,
      emptyFill: "rgba(0, 0, 0, .0)",
      fill: '#ffb016',
      thickness: '16',
      reverse: true
    });
    $('#circle4').circleProgress({
      size: 180,
      emptyFill: "rgba(0, 0, 0, .0)",
      fill: '#ffb016',
      thickness: '16',
      reverse: true
    });
  } // :: 13.0 onePageNav Active Code


  if ($.fn.onePageNav) {
    $('#vcardMenu').onePageNav({
      currentClass: 'active',
      scrollSpeed: 2000,
      easing: 'easeOutQuad'
    });
  } // :: 14.0 Nice Scroll Active Code


  if ($.fn.niceScroll) {
    $(".page-content").niceScroll({
      cursorborder: "0 solid transparent"
    });
  } // :: 15.0 Tooltip Active Code


  if ($.fn.tooltip) {
    $('[data-toggle="tooltip"]').tooltip();
  } // :: 16.0 prevent default a click


  $('a[href="#"]').on('click', function ($) {
    $.preventDefault();
  });
})(jQuery);

/***/ })

/******/ });
//# sourceMappingURL=active-a7232067500457b12de3.js.map