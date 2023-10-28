

//Checks current selected theme
document.addEventListener('DOMContentLoaded', () => {
  // Deteck theme preference
  if (localStorage.getItem('theme')) document.body.dataset.theme = localStorage.getItem('theme');
  else {
    let themePreference = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    localStorage.setItem('theme', themePreference);
    document.body.dataset.theme = themePreference;
  }
})
