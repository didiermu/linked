gsap.registerPlugin(ScrollTrigger);

const objParallax = (trigger, elem) => {
    gsap.from(elem, {
        yPercent: 0,
    });
    gsap.to(elem, {
        yPercent: -80,
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

const objParallaxMultiple = () => {
    let boletosArr = gsap.utils.toArray(".hero--wrap picture");

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
                // scrollTrigger: {
                //     trigger: "body",
                //     pinSpacing: false,
                //     scrub: true,
                //     start: "top top",
                //     end: "+=300",
                //     immediateRender: true,
                //     markers: true,
                // },
            }
        );
    });
};

const objParallaxMultipleDos = () => {
    let boletosArr = gsap.utils.toArray(".sidenav a");

    boletosArr.forEach(function () {
        gsap.fromTo(
            boletosArr,
            {
                opacity: 0,
                xPercent: 100,
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

objParallaxMultiple();

const objElements = (trigger, elem) => {
    gsap.from(elem, {
        yPercent: 10,
        opacity: 0,
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
            toggleActions: "restart pause reverse pause",
            // markers: true,
        },
    });
};

const animContenido = (trigger, elem) => {
    const controller = new ScrollMagic.Controller();
    const info = new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook: "onEnter",
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

animContenido(".cita-home", ".cita-home *");

const objTitles = (trigger, elem) => {
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
            toggleActions: "restart pause reverse pause",
            // markers: true,
        },
    });
};

const animTitulos = (trigger, elem) => {
    const controller = new ScrollMagic.Controller();
    const info = new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook: 0,
    })
        .setTween(
            TweenMax.fromTo(
                elem,
                0.5,
                {
                    opacity: 0,
                    yPercent: 10,
                },
                {
                    opacity: 1,
                    yPercent: 0,
                    delay: 0.4,
                }
            )
        )
        .addTo(controller);
};

const animElem = (trigger, elem) => {
    const controller = new ScrollMagic.Controller();
    const info = new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook: "onEnter",
    })
        .setTween(
            TweenMax.fromTo(
                elem,
                0.5,
                {
                    opacity: 0,
                    yPercent: 10,
                },
                {
                    opacity: 1,
                    yPercent: 0,
                    delay: 0.3,
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
                // ease: "power1.out",
                ease: "ease",
                delay: 1,
                scrollTrigger: {
                    trigger: trigger,
                    scrub: 1,
                    start: "-=100 center",
                    // end: "bottom 50%",
                    toggleActions: "restart pause reverse pause",
                    immediateRender: false,
                    // markers: true,
                },
            }
        );
    });
};

const headerLogo = () => {
    gsap.fromTo(
        ".header--logo",
        {
            yPercent: -100,
        },
        {
            yPercent: 0,
            stagger: 0.1,
            delay: 0.5,
            ease: "power2.out",
        }
    );
};

headerLogo();

const objParallaxArrayOk = (elem) => {
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
                immediateRender: false,
                // markers: true,
            },
        });
    });
};

//////////// EVENTS LISTENERS ////////////

// HOME
const btnHeroHover = document.querySelector(".hero--wrap");
const imagesHero = document.querySelectorAll(".hero--wrap img");
const btncloseHero = document.querySelector(".btnHover");
const heroHover = document.querySelector(".hero--wrap .hero--wrap--hover");

for (const imagesHeroEl of imagesHero) {
    imagesHeroEl.onclick = () => {
        btnHeroHover.classList.add("active");
        heroHover.classList.add("active");
    };
}

//  btnHeroHover.onclick = () => {
//     btnHeroHover.classList.add("active");
//     heroHover.classList.add("active");
// };

btncloseHero.onclick = () => {
    btnHeroHover.classList.remove("active");
    heroHover.classList.remove("active");
    console.log("clo");
};

// PROJECTS

const btnMobileHoverGrid = document.querySelectorAll(".projects-grid--wrap");
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
        btnMobileHoverGridIntElem
            .closest(".projects-home__card__hover__projects")
            .classList.toggle("active");
        // btnMobileHoverGridIntElem.parentNode.classList.toggle("active");

        btnMobileHoverGridIntElem
            .closest(".col-lg-4")
            .classList.remove("active");
    };
}

///// ORDER GRID
const descansos = () => {
    const cardsHome = document.querySelectorAll(
        ".projects-home .col-lg-4:not(.projects-home__acceso)"
    );
    const cardProject = document.querySelector(
        ".projects-home__acceso--projects"
    );
    const cardAbout = document.querySelector(".projects-home__acceso--about");

    const break1 = document.querySelector("#break1");
    const break2 = document.querySelector("#break2");
    const break3 = document.querySelector("#break3");
    const break4 = document.querySelector("#break4");
    const break5 = document.querySelector("#break5");

    for (let index = 0; index < cardsHome.length; index++) {
        if (cardsHome.length > 8) {
            cardsHome[4].insertAdjacentElement("afterend", cardProject);
            cardsHome[8].insertAdjacentElement("afterend", cardAbout);
        }

        ///// BREAKS
        if (cardsHome.length >= 8) {
            cardProject.insertAdjacentElement("afterend", break1);
            // cardsHome[5].insertAdjacentElement("afterend", break1);
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

descansos();

///// SHOW FOOTER SCROLL

const posCitaHome = document.querySelector(".cita-home");
document.addEventListener("scroll", (event) => {
    if (window.scrollY > posCitaHome.offsetTop - 200) {
        document.querySelector(".footer").classList.add("show");
    } else {
        document.querySelector(".footer").classList.remove("show");
    }
});

////////// PRIMERA CATEGORIA

const primeraCate = () => {
    const cadaveres = document.querySelectorAll(
        ".projects-home .col-lg-4:not(.projects-home__acceso)"
    );

    for (const cadaveresEl of cadaveres) {
        let hijos = cadaveresEl.querySelectorAll(
            ".projects-home__card__images__img"
        );

        for (let index = 0; index < hijos.length; index++) {
            const element = hijos[0].getAttribute("categoria");
            const padreCadaver = hijos[0].closest(".col-lg-4");
            padreCadaver.querySelector(
                ".projects-home__card__title"
            ).innerText = element;

            padreCadaver.querySelector(
                ".projects-home__card__hover__projects h4 span"
            ).innerText = element;
        }
    }
};

primeraCate();
