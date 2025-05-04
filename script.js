const theme = localStorage.getItem('theme')
document.body.classList.toggle(theme)
const toggleBtn = document.getElementById('theme-toggle');


// Add rotation angle tracking
let rotated = false;

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  
  // Save preference
  const newTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme);
  
  // Rotate the button
  rotated = !rotated;
  toggleBtn.style.transform = rotated ? 'rotate(180deg)' : 'rotate(0deg)';
  toggleBtn.style.backgroundImage = rotated?"url('./sun-solid.svg')" : "url('./moon-solid.svg')"
  toggleBtn.style.transition = 'transform 0.3s ease';
});
