const swiperPromos = new Swiper(".slider-detail", {
    direction: "vertical",
    // loop: false,
    autoplay: false,
    slidesPerView: 6,
    slidesPerGroup: 6,
    // slidesPerGroupSkip: 1,
    grabCursor: false,
    freeMode: false,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

window.onresize = () => {};

// swiperPromos.on("slideChange", function () {
//     animContenidoScale(".swiper-slide", ".swiper-slide img");
// });

const animContenidoScale = (trigger, elem) => {
    const controller = new ScrollMagic.Controller();
    const info = new ScrollMagic.Scene({
        triggerElement: trigger,
        triggerHook: "Enter",
    })
        .setTween(
            TweenMax.fromTo(
                elem,
                0.8,
                {
                    opacity: 0,
                    scale: 0,
                },
                {
                    opacity: 1,
                    scale: 1,
                    delay: 0.1,
                }
            )
        )
        .addTo(controller);
};

animContenidoScale(".swiper-slide", ".swiper-slide img");
