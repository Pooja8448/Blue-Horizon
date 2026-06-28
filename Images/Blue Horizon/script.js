const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");

  if (navbar.classList.contains("active")) {
    menuBtn.innerHTML = "×";
  } else {
    menuBtn.innerHTML = "☰";
  }
});

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuBtn.innerHTML = "☰";
  });
});

/* Contact form to WhatsApp */
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const requirement = document.getElementById("requirement").value;
  const message = document.getElementById("message").value;

  const whatsappNumber = "919818115797";

  const whatsappMessage =
    `Hello Blue Horizon,%0A%0A` +
    `I want to enquire about corporate stay.%0A%0A` +
    `Name: ${name}%0A` +
    `Phone: ${phone}%0A` +
    `Email: ${email}%0A` +
    `Requirement: ${requirement}%0A` +
    `Message: ${message}%0A%0A` +
    `Please share the details.`;

  window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
});