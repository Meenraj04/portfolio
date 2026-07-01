contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
};
    emailjs.send(
        "service_ytdwza1",
        "template_0v4wtjn",
        data
    )
    .then(function () {

        const text = `New Portfolio Enquiry

Name: ${data.name}

Email: ${data.email}

Phone: ${data.phone}

Subject: ${data.subject}

Message:
${data.message}`;

        window.open(
            `https://wa.me/917358928026?text=${encodeURIComponent(text)}`,
            "_blank"
        );

        alert("Message sent successfully!");

        contactForm.reset();

    })
    .catch(function (error) {
        console.error("EmailJS Error:", error);
        alert("Failed to send message.");
    });

});