"use strict";

gsap.registerPlugin(ScrollTrigger);

var objParallax = function objParallax(trigger, elem) {
  gsap.from(elem, {
    yPercent: 0
  });
  gsap.to(elem, {
    yPercent: -80,
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

var objParallaxMultiple = function objParallaxMultiple() {
  var boletosArr = gsap.utils.toArray(".hero--wrap picture");
  boletosArr.forEach(function () {
    gsap.fromTo(boletosArr, {
      opacity: 0,
      xPercent: -100
    }, {
      duration: 0.6,
      opacity: 1,
      xPercent: 0,
      stagger: 0.1,
      ease: "power2.out" // scrollTrigger: {
      //     trigger: "body",
      //     pinSpacing: false,
      //     scrub: true,
      //     start: "top top",
      //     end: "+=300",
      //     immediateRender: true,
      //     markers: true,
      // },

    });
  });
};

var objParallaxMultipleDos = function objParallaxMultipleDos() {
  var boletosArr = gsap.utils.toArray(".sidenav a");
  boletosArr.forEach(function () {
    gsap.fromTo(boletosArr, {
      opacity: 0,
      xPercent: 100
    }, {
      duration: 0.6,
      opacity: 1,
      xPercent: 0,
      stagger: 0.1,
      ease: "power2.out"
    });
  });
};

objParallaxMultiple(); // objParallaxMultipleDos();
// objParallax(".about", "#rosas-about img");

var objElements = function objElements(trigger, elem) {
  gsap.from(elem, {
    yPercent: 10,
    opacity: 0
  });
  gsap.to(elem, {
    yPercent: 0,
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: trigger,
      start: "top center",
      end: "+=300",
      scrub: 1,
      toggleActions: "restart pause reverse pause" // markers: true,

    }
  });
};

var animContenido = function animContenido(trigger, elem) {
  var controller = new ScrollMagic.Controller();
  var info = new ScrollMagic.Scene({
    triggerElement: trigger,
    triggerHook: "onEnter"
  }).setTween(TweenMax.fromTo(elem, 1, {
    opacity: 0,
    yPercent: 10
  }, {
    opacity: 1,
    yPercent: 0,
    delay: 0.5
  })).addTo(controller);
};

animContenido(".cita-home", ".cita-home *");

var objTitles = function objTitles(trigger, elem) {
  // gsap.from(elem, {
  //     yPercent: 10,
  //     opacity: 0,
  // });
  gsap.to(elem, {
    yPercent: 0,
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: trigger,
      start: "-=100 center",
      end: "+=100",
      scrub: 1,
      toggleActions: "restart pause reverse pause" // markers: true,

    }
  });
};

var animTitulos = function animTitulos(trigger, elem) {
  var controller = new ScrollMagic.Controller();
  var info = new ScrollMagic.Scene({
    triggerElement: trigger,
    triggerHook: 0
  }).setTween(TweenMax.fromTo(elem, 0.5, {
    opacity: 0,
    yPercent: 10
  }, {
    opacity: 1,
    yPercent: 0,
    delay: 0.4
  })).addTo(controller);
};

var animElem = function animElem(trigger, elem) {
  var controller = new ScrollMagic.Controller();
  var info = new ScrollMagic.Scene({
    triggerElement: trigger,
    triggerHook: "onEnter"
  }).setTween(TweenMax.fromTo(elem, 0.5, {
    opacity: 0,
    yPercent: 10
  }, {
    opacity: 1,
    yPercent: 0,
    delay: 0.3
  })).addTo(controller);
}; // const contentSections = gsap.utils.toArray("li");
// contentSections.forEach((target) => {
//     ScrollTrigger.create({
//         trigger: target,
//         start: "top 80%",
//         end: "bottom 50%",
//         markers: true,
//         toggleClass: "active",
//     });
// });


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
      // ease: "power1.out",
      ease: "ease",
      delay: 1,
      scrollTrigger: {
        trigger: trigger,
        scrub: 1,
        start: "-=100 center",
        // end: "bottom 50%",
        toggleActions: "restart pause reverse pause",
        immediateRender: false // markers: true,

      }
    });
  });
};

gsap.fromTo(".header--logo", {
  yPercent: -100
}, {
  yPercent: 0,
  stagger: 0.1,
  delay: 0.5,
  ease: "power2.out"
});

var objParallaxArrayOk = function objParallaxArrayOk(elem) {
  gsap.utils.toArray(elem).forEach(function (e) {
    gsap.from(e, {
      duration: 0.6,
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

objParallaxArrayOk(".projects-home .col-lg-4"); //////////// EVENTS LISTENERS ////////////

var btnMobileHoverHero = document.querySelector(".btnHover");

btnMobileHoverHero.onclick = function () {
  document.querySelector(".hero--wrap--hover").classList.toggle("active");
  btnMobileHoverHero.classList.toggle("active");
};

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
  } // for (const btnMobileHoverGridElem of btnMobileHoverGrid) {
  //     btnMobileHoverGridElem.onclick = () => {
  //         let parentBtn = btnMobileHoverGridElem.closest(".col-lg-4");
  //         parentBtn
  //             .querySelector(".projects-home__card__hover__projects")
  //             .classList.toggle("active");
  //         btnMobileHoverGridElem.classList.toggle("active");
  //         parentBtn.querySelector(".btnHoverGridInt").classList.toggle("active");
  //     };
  // }
  // for (const btnMobileHoverGridIntElem of btnMobileHoverGridInt) {
  //     let parentBtn = btnMobileHoverGridIntElem.closest(".col-lg-4");
  //     btnMobileHoverGridIntElem.onclick = () => {
  //         parentBtn
  //             .querySelector(".projects-home__card__hover__projects")
  //             .classList.toggle("active");
  //         parentBtn.querySelector(".btnHoverGrid").classList.toggle("active");
  //         btnMobileHoverGridInt.classList.toggle("active");
  //     };
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

var cardsHome = document.querySelectorAll(".projects-home .col-lg-4:not(.projects-home__acceso");
var cardProject = document.querySelector(".projects-home__acceso--projects");
var cardAbout = document.querySelector(".projects-home__acceso--about");

for (var index = 0; index < cardsHome.length; index++) {
  cardsHome[4].insertAdjacentElement("afterend", cardProject);
  cardsHome[7].insertAdjacentElement("afterend", cardAbout);
}
//# sourceMappingURL=animaciones.dev.js.map
