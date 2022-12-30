"use strict";

var objLoad = function objLoad(elem) {
  var boletosArr = gsap.utils.toArray(elem);
  boletosArr.forEach(function () {
    gsap.fromTo(boletosArr, {
      opacity: 0,
      xPercent: -100
    }, {
      duration: 0.6,
      opacity: 1,
      xPercent: 0,
      stagger: 0.1,
      ease: "power2.out"
    });
  });
};

var objLoadVertical = function objLoadVertical(elem) {
  var boletosArr = gsap.utils.toArray(elem);
  boletosArr.forEach(function () {
    gsap.fromTo(boletosArr, {
      opacity: 0,
      yPercent: 100
    }, {
      duration: 1.2,
      opacity: 1,
      yPercent: 0,
      stagger: 0.1,
      ease: "power2.out"
    });
  });
};

var animContenido = function animContenido(trigger, elem) {
  var controller = new ScrollMagic.Controller();
  var info = new ScrollMagic.Scene({
    triggerElement: trigger,
    triggerHook: 0.7
  }).setTween(TweenMax.fromTo(elem, 1, {
    opacity: 0,
    yPercent: 10
  }, {
    opacity: 1,
    yPercent: 0,
    delay: 0.5
  })).addTo(controller);
};

var objParallaxArray = function objParallaxArray(trigger, elem) {
  var boletosArr = gsap.utils.toArray(elem);
  boletosArr.forEach(function (target) {
    gsap.fromTo(boletosArr, {
      opacity: 0,
      yPercent: 10
    }, {
      duration: 2,
      opacity: 1,
      yPercent: 0,
      stagger: 0.3,
      ease: "ease",
      delay: 1,
      scrollTrigger: {
        trigger: trigger,
        scrub: 1,
        start: "-=200 center",
        end: "top",
        toggleActions: "restart pause reverse pause",
        immediateRender: false // markers: true,

      }
    });
  });
};

objParallaxArray(".related", ".related .projects-home__card");
objLoad(".project__item .project__item--info *");
objLoadVertical(".project__item .project__item--image *");
animContenido(".projects__quotes", ".projects__quotes");

var modalGaleria = function modalGaleria() {
  lightbox.option({
    albumLabel: "",
    fadeDuration: 300,
    imageFadeDuration: 300,
    resizeDuration: 300,
    disableScrolling: true,
    fitImagesInViewport: true,
    wrapAround: true,
    maxWidth: 700,
    maxHeight: 700
  });
};

modalGaleria(); //// REMOVE RELATED

var cardsRelated = document.querySelectorAll(".related .col-lg-4");

for (var index = 3; index < cardsRelated.length; index++) {
  cardsRelated[index].remove();
} //////////// EVENTS LISTENERS ////////////


var btnMobileHoverGrid = document.querySelectorAll(".btnHoverGrid");
var btnMobileHoverGridInt = document.querySelectorAll(".btnHoverGridInt");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var btnMobileHoverGridElem = _step.value;

    btnMobileHoverGridElem.onclick = function () {
      btnMobileHoverGridElem.parentNode.nextElementSibling.classList.toggle("active");
    };
  };

  for (var _iterator = btnMobileHoverGrid[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
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

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  var _loop2 = function _loop2() {
    var btnMobileHoverGridIntElem = _step2.value;

    btnMobileHoverGridIntElem.onclick = function () {
      btnMobileHoverGridIntElem.parentNode.parentNode.classList.toggle("active");
    };
  };

  for (var _iterator2 = btnMobileHoverGridInt[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    _loop2();
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}
//# sourceMappingURL=animaciones-detail-project.dev.js.map
