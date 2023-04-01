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

objParallaxMultiple();

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

var headerLogo = function headerLogo() {
  gsap.fromTo(".header--logo", {
    yPercent: -100
  }, {
    yPercent: 0,
    stagger: 0.1,
    delay: 0.5,
    ease: "power2.out"
  });
};

headerLogo();

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
}; //////////// EVENTS LISTENERS ////////////
// HOME


var btnHeroHover = document.querySelector(".hero--wrap");
var imagesHero = document.querySelectorAll(".hero--wrap img");
var btncloseHero = document.querySelector(".btnHover");
var heroHover = document.querySelector(".hero--wrap .hero--wrap--hover");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = imagesHero[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var imagesHeroEl = _step.value;

    imagesHeroEl.onclick = function () {
      btnHeroHover.classList.add("active");
      heroHover.classList.add("active");
    };
  } //  btnHeroHover.onclick = () => {
  //     btnHeroHover.classList.add("active");
  //     heroHover.classList.add("active");
  // };

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

btncloseHero.onclick = function () {
  btnHeroHover.classList.remove("active");
  heroHover.classList.remove("active");
  console.log("clo");
}; // PROJECTS


var btnMobileHoverGrid = document.querySelectorAll(".projects-grid--wrap");
var btnMobileHoverGridInt = document.querySelectorAll(".btnHoverGridInt");
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  var _loop = function _loop() {
    var btnMobileHoverGridElem = _step2.value;

    btnMobileHoverGridElem.onclick = function () {
      btnMobileHoverGridElem.closest(".col-lg-4").querySelector(".projects-home__card__hover__projects").classList.toggle("active");
      btnMobileHoverGridElem.closest(".col-lg-4").classList.toggle("active");
    };
  };

  for (var _iterator2 = btnMobileHoverGrid[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    _loop();
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

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  var _loop2 = function _loop2() {
    var btnMobileHoverGridIntElem = _step3.value;

    btnMobileHoverGridIntElem.onclick = function () {
      btnMobileHoverGridIntElem.closest(".projects-home__card__hover__projects").classList.toggle("active"); // btnMobileHoverGridIntElem.parentNode.classList.toggle("active");

      btnMobileHoverGridIntElem.closest(".col-lg-4").classList.remove("active");
    };
  };

  for (var _iterator3 = btnMobileHoverGridInt[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    _loop2();
  } ///// ORDER GRID

} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
      _iterator3["return"]();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}

var descansos = function descansos() {
  var cardsHome = document.querySelectorAll(".projects-home .col-lg-4:not(.projects-home__acceso)");
  var cardProject = document.querySelector(".projects-home__acceso--projects");
  var cardAbout = document.querySelector(".projects-home__acceso--about");
  var break1 = document.querySelector("#break1");
  var break2 = document.querySelector("#break2");
  var break3 = document.querySelector("#break3");
  var break4 = document.querySelector("#break4");
  var break5 = document.querySelector("#break5");

  for (var index = 0; index < cardsHome.length; index++) {
    if (cardsHome.length > 8) {
      cardsHome[4].insertAdjacentElement("afterend", cardProject);
      cardsHome[8].insertAdjacentElement("afterend", cardAbout);
    } ///// BREAKS


    if (cardsHome.length >= 8) {
      cardProject.insertAdjacentElement("afterend", break1); // cardsHome[5].insertAdjacentElement("afterend", break1);

      break1.classList.add("active");
    }

    if (cardsHome.length > 10) {
      cardsHome[9].insertAdjacentElement("afterend", break2);
      break2.classList.add("active");
    }

    if (cardsHome.length > 16) {
      cardsHome[15].insertAdjacentElement("afterend", break3);
      break3.classList.add("active");
    }

    if (cardsHome.length > 22) {
      cardsHome[21].insertAdjacentElement("afterend", break4);
      break4.classList.add("active");
    }

    if (cardsHome.length > 28) {
      cardsHome[27].insertAdjacentElement("afterend", break5);
      break5.classList.add("active");
    }

    console.log("12");
  }
};

descansos(); ///// SHOW FOOTER SCROLL

var posCitaHome = document.querySelector(".cita-home");
document.addEventListener("scroll", function (event) {
  if (window.scrollY > posCitaHome.offsetTop - 200) {
    document.querySelector(".footer").classList.add("show");
  } else {
    document.querySelector(".footer").classList.remove("show");
  }
}); ////////// PRIMERA CATEGORIA HERO

var heroCate = function heroCate() {
  var titleHero = document.querySelector(".hero--wrap--hover h3").id; // imagen

  var cadaveres = document.querySelectorAll(".hero--wrap picture:not(." + titleHero + ")");
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = cadaveres[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var cadaveresEl = _step4.value;
      // cadaveresEl.classList.add("valid");
      cadaveresEl.remove();
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
        _iterator4["return"]();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  var newImg = document.querySelectorAll(".hero--wrap picture." + titleHero);

  for (var index = 3; index < newImg.length; index++) {
    var element = newImg[index]; // element.classList.add("remove");

    element.remove();
  } // link


  var linkHover = document.querySelectorAll(".hero--wrap--hover a:not(#link-home, ." + titleHero + ")");
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = linkHover[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var linkHoverEl = _step5.value;
      // cadaveresEl.classList.add("valid");
      linkHoverEl.remove();
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
        _iterator5["return"]();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  var newLink = document.querySelectorAll(".hero--wrap--hover a." + titleHero);

  for (var _index = 3; _index < newLink.length; _index++) {
    var _element = newLink[_index]; // element.classList.add("remove");

    _element.remove();
  }
};

heroCate(); // cambio de link

var cambioLink = function cambioLink() {
  var idLinks = document.querySelectorAll(".hero--wrap--hover--project");
  var linkHero = document.querySelector("#link-home");
  var element1 = "";
  var element2 = "";
  var element3 = "";

  for (var index = 0; index < idLinks.length; index++) {
    element1 = idLinks[0].id;
    element2 = idLinks[1].id;
    element3 = idLinks[2].id;
  } // return console.log(element1, element2, element3);
  // return element1, element2, element3;


  linkHero.setAttribute("href", "https://linked-space.com/project-home?ids=" + element1 + "?" + element2 + "?" + element3);
};

cambioLink(); ////////// PRIMERA CATEGORIA

var primeraCate = function primeraCate() {
  var cadaveres = document.querySelectorAll(".projects-home .col-lg-4:not(.projects-home__acceso)");
  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = cadaveres[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var cadaveresEl = _step6.value;
      var hijos = cadaveresEl.querySelectorAll(".projects-home__card__images__img");

      for (var index = 0; index < hijos.length; index++) {
        var element = hijos[0].getAttribute("categoria");
        var padreCadaver = hijos[0].closest(".col-lg-4");
        padreCadaver.querySelector(".projects-home__card__title").innerText = element;
        padreCadaver.querySelector(".projects-home__card__hover__projects h4 span").innerText = element;
      }
    }
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
        _iterator6["return"]();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }
};

primeraCate();
//# sourceMappingURL=animaciones.dev.js.map
