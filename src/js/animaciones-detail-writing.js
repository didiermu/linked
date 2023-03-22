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

const limitChar = () => {
    const parrafos = document.querySelector(".writing-detail--paragraph .p p");
    const resume = document.querySelector(".writing-detail--resume");
    resume.textContent = resume.textContent.slice(0, 100) + "...";
    parrafos.textContent = parrafos.textContent.slice(0, 1100) + "[...]";

    const firstLetter = parrafos.textContent.charAt(0);
    document.querySelector(".writing-detail--paragraph--let").innerHTML =
        firstLetter;

    parrafos.innerHTML = parrafos.textContent.slice(1);
};

limitChar();

objLoad(".writing-detail--wrap-info *");
objLoadVertical(".writing-detail--images *");

/////////// EVENTS LISTENERS ////////////

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
