"use strict";

var objParallaxArray = function objParallaxArray(elem) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(elem).forEach(function (e) {
    gsap.from(e, {
      duration: 0.1,
      ease: "power1.out",
      opacity: 0,
      yPercent: 0,
      scrollTrigger: {
        trigger: e,
        scrub: 0.3,
        start: "-=600",
        end: "top bottom",
        toggleActions: "restart pause reverse pause",
        immediateRender: false // markers: true,

      }
    });
  });
};

objParallaxArray(".papers__item"); //////////////// LIMIT CHAR

var limitChar = function limitChar() {
  var parrafos = document.querySelectorAll(".papers__item .parrafo");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = parrafos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var parrafosElem = _step.value;
      parrafosElem.textContent = parrafosElem.textContent.slice(0, 120);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

limitChar();
//# sourceMappingURL=animaciones-writing.dev.js.map
