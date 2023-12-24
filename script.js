document.addEventListener('DOMContentLoaded', function () {
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    const currentTheme = localStorage.getItem('theme') || 'light'; // Default to light mode
  
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    function toggleDarkMode() {
      const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
  
      if (isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        darkModeSwitch.textContent = 'Dark';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkModeSwitch.textContent = 'Light';
      }
    }
  
    darkModeSwitch.addEventListener('click', toggleDarkMode);
  });
  