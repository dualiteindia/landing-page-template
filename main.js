// Mobile menu toggle functionality
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMobileMenuBtn = document.getElementById("close-mobile-menu");
let menuOpen = false;

function openMobileMenu() {
  mobileMenu.style.opacity = "1";
  mobileMenu.style.pointerEvents = "auto";
}
function closeMobileMenu() {
  mobileMenu.style.opacity = "0";
  mobileMenu.style.pointerEvents = "none";
}

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    openMobileMenu();
  });
}
if (closeMobileMenuBtn && mobileMenu) {
  closeMobileMenuBtn.addEventListener("click", () => {
    closeMobileMenu();
  });
}
// Also close menu when clicking outside nav
if (mobileMenu) {
  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) {
      closeMobileMenu();
    }
  });
}

// Fade-in animation for sections
document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".fade-in");
  fadeEls.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, 200 + i * 120);
  });
  // Animate company logos
  const logoEls = document.querySelectorAll(".logo-animate");
  logoEls.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, 600 + i * 100);
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add hover effects to service cards
const serviceCards = document.querySelectorAll('[id^="1:15"]');
serviceCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// NoCodeAPI contact form submission
const form = document.forms["contact-form"];

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form["your-name"].value;
    const email = form["your-mail"].value;
    const company = form["company-name"].value;
    const contact = form["contact"].value;
    const note = form["note"].value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "post",
      headers: myHeaders,
      redirect: "follow",
      body: JSON.stringify([[name, email, company, contact, note]]),
    };

    const SHEET_ID = import.meta.env.VITE_SHEET_ID;
    const tabId = import.meta.env.VITE_TAB_ID;
    const userName = import.meta.env.VITE_USERNAME;

    fetch(`https://v1.nocodeapi.com/${userName}/google_sheets/${SHEET_ID}?tabId=${tabId}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          alert("Thank you! Your request has been submitted successfully.");
          form.reset();
        } else {
          alert("There was an error submitting your request. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error!", error.message);
        alert("There was an error submitting your request. Please try again.");
      });
  });
}
