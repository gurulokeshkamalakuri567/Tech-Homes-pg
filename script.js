// ========== NAVBAR SCROLL EFFECT ==========
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// ========== WHATSAPP BUTTON CLICK ==========
const whatsappBtn = document.getElementById("whatsappBtn");
if (whatsappBtn) {
  whatsappBtn.addEventListener("click", () => {
    // ✅ Updated WhatsApp direct chat
    const phoneNumber = "918639726218"; 
    const message = "Hello! I’d like to know more about Tech Homes PG.";
    const whatsappURL = `https://wa.me/${8639726218}?text=${encodeURIComponent(Welcome to Tech Homes Pg)}`;
    window.open(whatsappURL, "_blank");
  });
}

// ========== SCROLL REVEAL ANIMATION ==========
const reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-up");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  reveals.forEach((el) => {
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 100; // distance from bottom of viewport
    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
};

// Trigger on scroll and once on page load
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ===============================
// SUCCESS POPUP FOR CONTACT FORM
// ===============================
const form = document.querySelector(".contact-form form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page reload

    // Create popup element
    const popup = document.createElement("div");
    popup.classList.add("success-popup");
    popup.innerHTML = `
      <div class="popup-content">
        <h3>✅ Thank You!</h3>
        <p>Your message has been sent successfully.<br>We’ll get back to you soon.</p>
      </div>
    `;
    document.body.appendChild(popup);

    // Animate popup
    setTimeout(() => popup.classList.add("show"), 100);

    // Auto remove popup after 3 seconds
    setTimeout(() => {
      popup.classList.remove("show");
      setTimeout(() => popup.remove(), 600);
    }, 3000);

    // Reset form fields
    form.reset();
  });
}

