/*==========================================
        DOM ELEMENTS
==========================================*/

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");
const overlay = document.getElementById("overlay");
const header = document.querySelector(".header");
const backToTop = document.getElementById("backToTop");
const navLinks = document.querySelectorAll(".navbar a");

/*==========================================
        MOBILE MENU
==========================================*/

function openMenu() {
    navbar.classList.add("active");
    menuBtn.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    navbar.classList.remove("active");
    menuBtn.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
}

menuBtn.addEventListener("click", () => {

    if (navbar.classList.contains("active")) {
        closeMenu();
    } else {
        openMenu();
    }

});

overlay.addEventListener("click", closeMenu);

navLinks.forEach(link => {

    link.addEventListener("click", closeMenu);

});

/*==========================================
        STICKY HEADER
==========================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});

/*==========================================
      ACTIVE NAVIGATION
==========================================*/

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

/*==========================================
      SMOOTH SCROLL
==========================================*/

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*==========================================
      BACK TO TOP
==========================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*==========================================
      SCROLL REVEAL
==========================================*/

const revealItems = document.querySelectorAll(
    ".about, .skills, .services, .projects, .contact"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

revealItems.forEach(item => {

    item.classList.add("fade-up");

    observer.observe(item);

});

/*==========================================
      TYPING EFFECT
==========================================*/

const typing = document.querySelector(".typing");

if (typing) {

    const words = [
        "Full Stack Developer",
        "Frontend Developer",
        "PHP Developer",
        "Web Designer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typing.textContent = currentWord.substring(0, charIndex++);

            if (charIndex > currentWord.length) {

                deleting = true;

                setTimeout(type, 1500);

                return;

            }

        } else {

            typing.textContent = currentWord.substring(0, charIndex--);

            if (charIndex === 0) {

                deleting = false;

                wordIndex = (wordIndex + 1) % words.length;

            }

        }

        setTimeout(type, deleting ? 50 : 100);

    }

    type();

}

/*==========================================
      CURRENT YEAR
==========================================*/

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}



