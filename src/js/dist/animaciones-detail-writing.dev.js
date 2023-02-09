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

var limitChar = function limitChar() {
  var parrafos = document.querySelector(".writing-detail--paragraph .p p");
  var resume = document.querySelector(".writing-detail--resume");
  resume.textContent = resume.textContent.slice(0, 100) + "...";
  parrafos.textContent = parrafos.textContent.slice(0, 1100) + "[...]";
  var firstLetter = parrafos.textContent.charAt(0);
  document.querySelector(".writing-detail--paragraph--let").innerHTML = firstLetter;
  parrafos.innerHTML = parrafos.textContent.slice(1);
};

limitChar();
objLoad(".writing-detail--wrap-info *");
objLoadVertical(".writing-detail--images *"); /////////// EVENTS LISTENERS ////////////

var btnMobileHoverGrid = document.querySelectorAll(".btnHoverGrid");
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
      btnMobileHoverGridIntElem.parentNode.parentNode.classList.toggle("active");
      btnMobileHoverGridIntElem.closest(".col-lg-4").classList.remove("active");
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
//# sourceMappingURL=animaciones-detail-writing.dev.js.map
