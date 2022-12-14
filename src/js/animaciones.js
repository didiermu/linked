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
// objParallaxMultipleDos();

// objParallax(".about", "#rosas-about img");

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

// const contentSections = gsap.utils.toArray("li");
// contentSections.forEach((target) => {
//     ScrollTrigger.create({
//         trigger: target,
//         start: "top 80%",
//         end: "bottom 50%",
//         markers: true,
//         toggleClass: "active",
//     });
// });

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

objParallaxArrayOk(".projects-home .col-lg-4");

//////////// EVENTS LISTENERS ////////////

const btnMobileHoverHero = document.querySelector(".btnHover");

btnMobileHoverHero.onclick = () => {
    document.querySelector(".hero--wrap--hover").classList.toggle("active");
    btnMobileHoverHero.classList.toggle("active");
};