
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray("form *").forEach(function (e) {
    gsap.from(e, {
        duration: 0.1,
        ease: "power1.out",
        opacity: 0,
        yPercent: 0,
        scrollTrigger: {
            trigger: e,
            scrub: 0.3,
            start: "-=400",
            end: "top bottom",
            toggleActions: "restart pause reverse pause",
            immediateRender: false,
            // markers: true,
        },
    });
});



