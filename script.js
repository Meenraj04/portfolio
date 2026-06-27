// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Header Shadow
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";
    } else {
        header.style.boxShadow = "none";
    }

});

// Active Navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Typing Effect
const text = [
    "Full Stack Developer",
    
];

let index = 0;
let charIndex = 0;

const typing = document.querySelector(".hero h2");

function type() {

    if (charIndex < text[index].length) {

        typing.textContent += text[index].charAt(charIndex);

        charIndex++;

        setTimeout(type, 100);

    } else {

        setTimeout(erase, 1500);

    }

}

function erase() {

    if (charIndex > 0) {

        typing.textContent = text[index].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(erase, 50);

    } else {

        index++;

        if (index >= text.length) index = 0;

        setTimeout(type, 300);

    }

}

typing.textContent = "";
type();

// Fade Animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


document.addEventListener("DOMContentLoaded", function () {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        let target = +counter.getAttribute("data-target");
        let count = 0;

        let interval = setInterval(() => {

            count++;

            counter.innerText = count;

            if (count >= target) {
                clearInterval(interval);

                // Add + or %
                if (target === 100) {
                    counter.innerText = target + "%";
                } else {
                    counter.innerText = target + "+";
                }
            }

        }, 50);

    });

});




document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let phone = "917358928026"; // Replace with your WhatsApp number

    let whatsappMessage =
`*New Portfolio Contact*

👤 Name: ${name}

📧 Email: ${email}

📝 Subject: ${subject}

💬 Message:
${message}`;

    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(whatsappMessage);

    window.open(url, "_blank");

    document.getElementById("contactForm").reset();

});