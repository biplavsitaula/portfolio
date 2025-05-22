window.addEventListener("DOMContentLoaded", () => {
  AOS.init({ once: true });

  window.addEventListener("load", () => {
    const startTime = sessionStorage.getItem("startTime", Date.now());
    if (!startTime) {
      sessionStorage.setItem("startTime", Date.now());
    }
  });

  const theme = localStorage.getItem("theme");
  document.body.classList.toggle(theme);
  const toggleBtn = document.getElementById("theme-toggle");

  const url = window.location;

  if (url.pathname == "/" || url.pathname == "/index.html") {
    new Typewriter("#typewriter", {
      strings: ["Developer", "Engineer"],
      autoStart: true,
      loop: true,
    });
  }

  theme == "dark"
    ? (toggleBtn.style.backgroundImage = "url('./sun-solid.svg')")
    : (toggleBtn.style.backgroundImage = "url('./moon-solid.svg')");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    // Save preference
    const newTheme = document.body.classList.contains("dark")
      ? "dark"
      : "light";
    localStorage.setItem("theme", newTheme);

    Toastify({
      text: `${
        newTheme[0].toLocaleUpperCase() + newTheme.slice(1)
      } theme activated.`,
      duration: 3000,
      destination: "https://github.com/biplavsitaula",
      gravity: "top", // `top` or `bottom`
      position: "right",
      stopOnFocus: true,
      style: {
        background:
          "linear-gradient(to right,rgb(83, 83, 83),rgb(161, 161, 161))",
      },
      onClick: function () {}, // Callback after click
    }).showToast();

    toggleBtn.style.transform =
      newTheme == "dark" ? "rotate(180deg)" : "rotate(0deg)";
    toggleBtn.style.backgroundImage =
      newTheme == "dark" ? "url('./sun-solid.svg')" : "url('./moon-solid.svg')";
  });
});
