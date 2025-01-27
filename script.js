// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

const textThree = document.querySelector(".text-three");
const phrases = ["Data Analyst", "Web Developer", "System Analyst"];
let phraseIndex = 0; // Tracks the current phrase index
let charIndex = 0; // Tracks the current character being typed
let isDeleting = false; // Tracks whether we are typing or deleting

function typeAndDelete() {
  const currentPhrase = phrases[phraseIndex];

  // Adjust the text content based on typing or deleting
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  // Update the text content in the div
  textThree.textContent = currentPhrase.substring(0, charIndex);

  // Determine if we need to switch between typing and deleting
  if (!isDeleting && charIndex === currentPhrase.length) {
    // Pause before deleting
    isDeleting = true;
    setTimeout(typeAndDelete, 1000); // Pause for 1 second
  } else if (isDeleting && charIndex === 0) {
    // Move to the next phrase and start typing
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length; // Loop back to the first phrase
    setTimeout(typeAndDelete, 500); // Pause for 0.5 seconds before typing
  } else {
    // Continue typing or deleting
    setTimeout(typeAndDelete, isDeleting ? 100 : 150); // Adjust speed here
  }
}

// Start the animation
typeAndDelete();

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "auto";
};
cancelBtn.onclick = function () {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto"; // Restore scrolling on the page
    scrollBtn.style.pointerEvents = "auto"; // Make the scroll button available
  });
}
