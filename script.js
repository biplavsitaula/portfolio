const theme = localStorage.getItem("theme");
document.body.classList.toggle(theme);
const toggleBtn = document.getElementById("theme-toggle");

theme == "dark"
  ? (toggleBtn.style.backgroundImage = "url('./sun-solid.svg')")
  : (toggleBtn.style.backgroundImage = "url('./moon-solid.svg')");


toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  // Save preference
  const newTheme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", newTheme);

  toggleBtn.style.transform = newTheme=='dark' ? "rotate(180deg)" : "rotate(0deg)";
  toggleBtn.style.backgroundImage =
    newTheme == "dark" ? "url('./sun-solid.svg')" : "url('./moon-solid.svg')";
});
