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

// objParallaxMultiple();

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

// const btnMobileHoverGrid = document.querySelectorAll(".projects-grid--wrap");
// const btnMobileHoverGridInt = document.querySelectorAll(".btnHoverGridInt");

// for (const btnMobileHoverGridElem of btnMobileHoverGrid) {
//     btnMobileHoverGridElem.onclick = () => {
//         btnMobileHoverGridElem
//             .closest(".col-lg-4")
//             .querySelector(".projects-home__card__hover__projects")
//             .classList.toggle("active");

//         btnMobileHoverGridElem.closest(".col-lg-4").classList.toggle("active");
//     };
// }

// for (const btnMobileHoverGridIntElem of btnMobileHoverGridInt) {
//     btnMobileHoverGridIntElem.onclick = () => {
//         btnMobileHoverGridIntElem
//             .closest(".projects-home__card__hover__projects")
//             .classList.toggle("active");
//         // btnMobileHoverGridIntElem.parentNode.classList.toggle("active");

//         btnMobileHoverGridIntElem
//             .closest(".col-lg-4")
//             .classList.remove("active");
//     };
// }

///// SHOW FOOTER SCROLL

const posCitaHome = document.querySelector(".cita-home");
document.addEventListener("scroll", (event) => {
    if (window.scrollY > posCitaHome.offsetTop - 200) {
        document.querySelector(".footer").classList.add("show");
    } else {
        document.querySelector(".footer").classList.remove("show");
    }
});

////////// PRIMERA CATEGORIA HERO

const heroCate = () => {
    const titleHero = document.querySelector(".hero--wrap--hover h3").id;

    // imagen

    const cadaveres = document.querySelectorAll(
        ".hero--wrap picture:not(." + titleHero + ")"
    );

    for (const cadaveresEl of cadaveres) {
        cadaveresEl.remove();
    }

    const newImg = document.querySelectorAll(
        ".hero--wrap picture." + titleHero
    );

    for (let index = 3; index < newImg.length; index++) {
        const element = newImg[index];
        // element.classList.add("remove");
        element.remove();
    }

    for (const newImgElm of newImg) {
        newImgElm.classList.add("show");
    }

    // link

    const linkHover = document.querySelectorAll(
        ".hero--wrap--hover a:not(#link-home, ." + titleHero + ")"
    );

    for (const linkHoverEl of linkHover) {
        // cadaveresEl.classList.add("valid");
        linkHoverEl.remove();
    }

    const newLink = document.querySelectorAll(
        ".hero--wrap--hover a." + titleHero
    );

    for (let index = 3; index < newLink.length; index++) {
        const element = newLink[index];
        // element.classList.add("remove");
        element.remove();
    }
};

heroCate();

// cambio de link

const cambioLink = () => {
    const idLinks = document.querySelectorAll(".hero--wrap--hover--project");
    const linkHero = document.querySelector("#link-home");

    let element1 = "";
    let element2 = "";
    let element3 = "";

    for (let index = 0; index < idLinks.length; index++) {
        element1 = idLinks[0].id;
        element2 = idLinks[1].id;
        element3 = idLinks[2].id;
    }
    // return console.log(element1, element2, element3);
    // return element1, element2, element3;

    linkHero.setAttribute(
        "href",
        "https://linked-space.com/project-home?ids=" +
            element1 +
            "?" +
            element2 +
            "?" +
            element3
    );
};

cambioLink();
