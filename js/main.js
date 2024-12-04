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