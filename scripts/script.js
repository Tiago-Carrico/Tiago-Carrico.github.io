
var checkboxTheme = document.querySelector('.container_toggle');

checkboxTheme.addEventListener('change', function() {
  log("woohoo it listened");
  if (this.checked) {
    log("its checked");
    trans()
    document.documentElement.setAttribute('data-theme', 'light')
  } else {
    log("not checked");
    trans()
    document.documentElement.setAttribute('data-theme', 'dark')
  }
})

let trans = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition');
  }, 1000)
}
