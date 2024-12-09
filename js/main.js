let dropDivs = document.querySelectorAll(".large-screen .drop-down");
let downLinks = document.querySelectorAll(".down-links");
dropDivs.forEach((dropDiv, index) => {
  let icon = dropDiv.querySelector(".fa-caret-down");
  dropDiv.addEventListener("mouseover", () => {
    downLinks[index].classList.add("hover-down");
    icon.classList.add("rotate");
  });

  dropDiv.addEventListener("mouseout", () => {
    downLinks[index].classList.remove("hover-down");
    icon.classList.remove("rotate");
  });
});
// Select all dropdowns
const dropdownItems = document.querySelectorAll(".small-screen .Nav-item .drop-down");

// Loop through each dropdown to add click event
dropdownItems.forEach((dropdown) => {
  const trigger = dropdown.querySelector(".drop-element");
  const downLinks = dropdown.querySelector(".down-links-small");

  trigger.addEventListener("click", () => {
    // Toggle the 'expanded' class to open/close the dropdown
    trigger.querySelector(".fa-caret-down").classList.toggle("rotate");
    downLinks.classList.toggle("expanded");
  });
});

const menuIcon = document.querySelector(".menu-icon");
const NavMenu = document.querySelector(".small-screen .Nav-menu");

menuIcon.addEventListener("click", () => {
  NavMenu.classList.toggle("expanded");
});

document.querySelectorAll('li.Nav-item a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // e.preventDefault();

    const targetId = this.getAttribute('href'); // Get the target ID from the href
    const target = document.querySelector(targetId); // Find the target element

    if (target) { // Check if the target exists
      const offset = 100; // Adjust this value based on your header's height
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
window.addEventListener('scroll', function() {
  const scrollToTopButton = document.getElementById('scrollToTop');
  if (window.scrollY > 300) { // Show the button when scrolled down 300px
    scrollToTopButton.style.opacity = 1;
  } else {
    scrollToTopButton.style.opacity = 0;
  }
});

// Smooth scroll to the top when the button is clicked
document.getElementById('scrollToTop').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});