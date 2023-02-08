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
objLoadVertical(".writing-detail--images *");
//# sourceMappingURL=animaciones-detail-writing.dev.js.map
