const objLoad = (elem) => {
    let boletosArr = gsap.utils.toArray(elem);

    boletosArr.forEach(function () {
        gsap.fromTo(
            boletosArr,
            {
                opacity: 0,
                xPercent: -100,
            },
            {
                duration: 0.6,
                opacity: 1,
                xPercent: 0,
                stagger: 0.1,
                ease: "power2.out",
            }
        );
    });
};

const objLoadVertical = (elem) => {
    let boletosArr = gsap.utils.toArray(elem);

    boletosArr.forEach(function () {
        gsap.fromTo(
            boletosArr,
            {
                opacity: 0,
                yPercent: 100,
            },
            {
                duration: 1.2,
                opacity: 1,
                yPercent: 0,
                stagger: 0.1,
                ease: "power2.out",
            }
        );
    });
};

const animContenido = (trigger, elem) => {
    const controller = new ScrollMagic.Controller();
    const info = new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook: 0.7,
    })
        .setTween(
            TweenMax.fromTo(
                elem,
                1,
                {
                    opacity: 0,
                    yPercent: 10,
                },
                {
                    opacity: 1,
                    yPercent: 0,
                    delay: 0.5,
                }
            )
        )
        .addTo(controller);
};

const objParallaxArray = (trigger, elem) => {
    let boletosArr = gsap.utils.toArray(elem);

    boletosArr.forEach((target) => {
        gsap.fromTo(
            boletosArr,
            {
                opacity: 0,
                yPercent: 10,
            },
            {
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
                    immediateRender: false,
                    // markers: true,
                },
            }
        );
    });
};

objParallaxArray(".related", ".related .projects-home__card");

objLoad(".project__item .project__item--info *");
objLoadVertical(".project__item .project__item--image *");
animContenido(".projects__quotes", ".projects__quotes");

///// SLIDER GALERIA
// const slidesGaleria = document.querySelectorAll(".gallery img");
// for (const slidesGaleriaElem of slidesGaleria) {
//     console.log(slidesGaleriaElem);
// }

const modalGaleria = () => {
    lightbox.option({
        albumLabel: "",
        fadeDuration: 300,
        imageFadeDuration: 300,
        resizeDuration: 300,
        disableScrolling: true,
        fitImagesInViewport: true,
        wrapAround: true,
        // maxWidth: 700,
        // maxHeight: 700,
    });
};

modalGaleria();

//////////// EVENTS LISTENERS ////////////

const btnMobileHoverGrid = document.querySelectorAll(".btnHoverGrid");
const btnMobileHoverGridInt = document.querySelectorAll(".btnHoverGridInt");

for (const btnMobileHoverGridElem of btnMobileHoverGrid) {
    btnMobileHoverGridElem.onclick = () => {
        btnMobileHoverGridElem
            .closest(".col-lg-4")
            .querySelector(".projects-home__card__hover__projects")
            .classList.toggle("active");

        btnMobileHoverGridElem.closest(".col-lg-4").classList.toggle("active");
    };
}

for (const btnMobileHoverGridIntElem of btnMobileHoverGridInt) {
    btnMobileHoverGridIntElem.onclick = () => {
        btnMobileHoverGridIntElem.parentNode.parentNode.classList.toggle(
            "active"
        );

        btnMobileHoverGridIntElem
            .closest(".col-lg-4")
            .classList.remove("active");
    };
}

// var elem = document.querySelector(".swiper-wrapper");
// var iso = new Isotope(elem, {
//     // options
//     itemSelector: ".swiper-slide",
//     layoutMode: "fitRows",
// });

// // element argument can be a selector string
// //   for an individual element
// var iso = new Isotope(".grid", {
//     // options
// });
