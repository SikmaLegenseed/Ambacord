const toggleThemeButton = document.querySelector('.toggle-theme');
const body = document.body;

const tema = localStorage.getItem('tema');
if (tema === 'dark-mode') {
  body.classList.add('dark-mode');
}

toggleThemeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggleThemeButton.textContent = body.classList.contains('dark-mode') ? 'Active!' : 'Toggle Theme';
  localStorage.setItem('tema', body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
});