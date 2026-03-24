const jsIcon = document.querySelector(".js");
const cssIcon = document.querySelector(".css");

window.addEventListener("mousemove", (e) => {
  const iconRect = jsIcon.getBoundingClientRect();
  const iconCenterX = iconRect.left + iconRect.width / 2;
  const iconCenterY = iconRect.top + iconRect.height / 2;

  const jsX = -(e.clientY - iconCenterY) / 10; // Adjust for sensitivity
  const jsY = (e.clientX - iconCenterX) / 10;

  jsIcon.style.transform = `rotateX(${jsX}deg) rotateY(${jsY}deg)`;

  const cssX = -(e.clientX - iconCenterY) / 10; // Adjust for sensitivity
  const cssY = (e.clientY - iconCenterX) / 10;

  cssIcon.style.transform = `rotateX(${cssY}deg) rotateY(${cssX}deg)`;
});

const scrollToExperienceButton = document.querySelector(
  ".scroll-to-experience"
);

scrollToExperienceButton.addEventListener("click", function (event) {
  event.preventDefault();

  var experienceSection = document.querySelector(".experience-container");
  var offsetTop = experienceSection.offsetTop;

  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  });
});

const scrollToProjectsButton = document.querySelector(".scroll-to-projects");

scrollToProjectsButton.addEventListener("click", function (event) {
  event.preventDefault();

  var projectsSection = document.querySelector(".projects-container");
  var offsetTop = projectsSection.offsetTop;

  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  });
});
const homeButton = document.querySelector(".logo");

homeButton.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "/";
  // var projectsSection = document.querySelector(".hero-section");
  // var offsetTop = projectsSection.offsetTop;

  // window.scrollTo({
  //   top: offsetTop,
  //   behavior: "smooth"
  // });
});
const scrollToAboutButton = document.querySelector(".scroll-to-about");

scrollToAboutButton.addEventListener("click", function (event) {
  event.preventDefault();

  var aboutSection = document.querySelector(".about-container");
  var offsetTop = aboutSection.offsetTop;

  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  });
});
