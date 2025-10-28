document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.theme-toggle');
  const body = document.body;
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '☀️';
    toggleButton.setAttribute('aria-label', 'Switch to light mode');
  } else {
    body.classList.remove('dark-mode');
    toggleButton.textContent = '🌙';
    toggleButton.setAttribute('aria-label', 'Switch to dark mode');
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      toggleButton.textContent = '☀️';
      toggleButton.setAttribute('aria-label', 'Switch to light mode');
    } else {
      localStorage.setItem('theme', 'light');
      toggleButton.textContent = '🌙';
      toggleButton.setAttribute('aria-label', 'Switch to dark mode');
    }
  });

  console.log('Theme on load:', savedTheme || 'none', 'System prefers dark:', prefersDark);
});