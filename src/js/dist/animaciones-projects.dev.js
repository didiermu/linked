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

objLoad(".grid--head .project__info *");
objLoad(".project__item__place *");
objLoadVertical(".project__item picture");
objLoadVertical(".grid__description");

var animContenido = function animContenido(trigger, elem, triggerHook) {
  var controller = new ScrollMagic.Controller();
  var info = new ScrollMagic.Scene({
    triggerElement: trigger,
    triggerHook: triggerHook
  }).setTween(TweenMax.fromTo(elem, 1, {
    opacity: 0,
    yPercent: 10
  }, {
    opacity: 1,
    yPercent: 0,
    delay: 0.5
  })).addTo(controller);
};

animContenido("#quotes-one", "#quotes-one .project-home__quotes", 0.9);
animContenido("#quotes-two", "#quotes-two .project-home__quotes", 1);

var objParallax = function objParallax(trigger, elem, posicion) {
  gsap.from(elem, {
    yPercent: 0
  });
  gsap.to(elem, {
    yPercent: posicion,
    ease: "none",
    scrollTrigger: {
      trigger: trigger,
      start: "-=200 center",
      end: "+=800",
      scrub: 1,
      toggleActions: "restart pause reverse pause" // markers: true,

    }
  });
};

objParallax("#grid--wrap-one", "#grid--wrap-one .project__info", -10);
objParallax("#grid--wrap-one", "#grid--wrap-one .project__item picture", -5);
objParallax("#grid--wrap-one", "#grid--wrap-one .project__item__place", -120);
objParallax("#grid--wrap-two", "#grid--wrap-two .project__info", -10);
objParallax("#grid--wrap-two", "#grid--wrap-two .project__item picture", -5);
objParallax("#grid--wrap-two", "#grid--wrap-two .project__item__place", -120);

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

objParallaxArray("#grid--wrap-one", "#grid--wrap-one .project__item");
objParallaxArray("#grid--wrap-two", "#grid--wrap-two .project__item"); //////////// EVENTS LISTENERS ////////////

var btnMobileHoverGrid = document.querySelectorAll(".projects-grid--wrap");
var btnMobileHoverGridInt = document.querySelectorAll(".btnHoverGridInt");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var btnMobileHoverGridElem = _step.value;

    btnMobileHoverGridElem.onclick = function () {
      btnMobileHoverGridElem.closest(".col-lg-4").querySelector(".projects-home__card__hover__projects").classList.toggle("active");
      btnMobileHoverGridElem.closest(".col-lg-4").classList.toggle("active");
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
      btnMobileHoverGridIntElem.parentNode.classList.toggle("active");
      btnMobileHoverGridIntElem.closest(".col-lg-4").classList.remove("active");
    };
  };

  for (var _iterator2 = btnMobileHoverGridInt[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    _loop2();
  } /// RANDOM COLUMNS
  // let numero = Math.floor(Math.random() * 100);
  // const row1 = document.querySelector(".grid--head .row");
  // const row2 = document.querySelector(".grid--wrap");
  // if (numero % 2 == 0) {
  //     row1.classList.add("par");
  //     row2.classList.add("par");
  // }
  ///// ORDER GRID

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

var cardsHome = document.querySelectorAll(".projects-home .col-lg-4");
var break1 = document.querySelector("#break1");
var break2 = document.querySelector("#break2");
var break3 = document.querySelector("#break3");
var break4 = document.querySelector("#break4");
var break5 = document.querySelector("#break5"); ///// BREAKS

for (var index = 0; index < cardsHome.length; index++) {
  console.log("k");

  if (cardsHome.length > 6) {
    cardsHome[5].insertAdjacentElement("afterend", break1);
    break1.classList.add("active");
  }

  if (cardsHome.length > 12) {
    cardsHome[11].insertAdjacentElement("afterend", break2);
    break2.classList.add("active");
  }

  if (cardsHome.length > 18) {
    cardsHome[17].insertAdjacentElement("afterend", break3);
    break3.classList.add("active");
  }

  if (cardsHome.length > 21) {
    cardsHome[20].insertAdjacentElement("afterend", break4);
    break4.classList.add("active");
  }

  if (cardsHome.length > 27) {
    cardsHome[26].insertAdjacentElement("afterend", break5);
    break5.classList.add("active");
  }
}
//# sourceMappingURL=animaciones-projects.dev.js.map
