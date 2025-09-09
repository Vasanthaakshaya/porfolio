const roles = [
  "Cloud Enthusiast ☁",
  "DevOps Learner ⚡",
  "Front end Developer 💻",
];

let roleIndex = 0;
let charIndex = 0;
const typingSpeed = 100; 
const erasingSpeed = 50; 
const delayBetween = 1500; 

const roleElement = document.querySelector("header p");

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    roleElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, typingSpeed);
  } else {
    setTimeout(eraseRole, delayBetween);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, erasingSpeed);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeRole, delayBetween);
});