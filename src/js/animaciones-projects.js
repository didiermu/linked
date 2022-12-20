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

objLoad(".grid--head .project__info *");
objLoad(".project__item__place *");
objLoadVertical(".project__item picture");
objLoadVertical(".grid__description");

const animContenido = (trigger, elem, triggerHook) => {
    const controller = new ScrollMagic.Controller();
    const info = new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook: triggerHook,
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

animContenido("#quotes-one", "#quotes-one .project-home__quotes", 0.9);
animContenido("#quotes-two", "#quotes-two .project-home__quotes", 1);

const objParallax = (trigger, elem, posicion) => {
    gsap.from(elem, {
        yPercent: 0,
    });

    gsap.to(elem, {
        yPercent: posicion,
        ease: "none",
        scrollTrigger: {
            trigger: trigger,
            start: "-=200 center",
            end: "+=800",
            scrub: 1,
            toggleActions: "restart pause reverse pause",
            // markers: true,
        },
    });
};

objParallax("#grid--wrap-one", "#grid--wrap-one .project__info", -10);
objParallax("#grid--wrap-one", "#grid--wrap-one .project__item picture", -5);
objParallax("#grid--wrap-one", "#grid--wrap-one .project__item__place", -120);

objParallax("#grid--wrap-two", "#grid--wrap-two .project__info", -10);
objParallax("#grid--wrap-two", "#grid--wrap-two .project__item picture", -5);
objParallax("#grid--wrap-two", "#grid--wrap-two .project__item__place", -120);

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

objParallaxArray("#grid--wrap-one", "#grid--wrap-one .project__item");
objParallaxArray("#grid--wrap-two", "#grid--wrap-two .project__item");

//////////// EVENTS LISTENERS ////////////

const btnMobileHoverGrid = document.querySelectorAll(".btnHoverGrid");
const btnMobileHoverGridInt = document.querySelectorAll(".btnHoverGridInt");

for (const btnMobileHoverGridElem of btnMobileHoverGrid) {
    btnMobileHoverGridElem.onclick = () => {
        btnMobileHoverGridElem.parentNode.nextElementSibling.classList.toggle(
            "active"
        );
    };
}

for (const btnMobileHoverGridIntElem of btnMobileHoverGridInt) {
    btnMobileHoverGridIntElem.onclick = () => {
        btnMobileHoverGridIntElem.parentNode.parentNode.classList.toggle(
            "active"
        );
    };
}

/// RANDOM COLUMNS

let numero = Math.floor(Math.random() * 100);
const row1 = document.querySelector(".grid--head .row");
const row2 = document.querySelector(".grid--wrap");

if (numero % 2 == 0) {
    row1.classList.add("par");
    row2.classList.add("par");
}
