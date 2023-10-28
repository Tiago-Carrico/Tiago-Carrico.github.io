

document.addEventListener('DOMContentLoaded', () => {
  var checkboxTheme = document.querySelector('.container_toggle');
  document.documentElement.setAttribute('data-theme', 'light');
  checkboxTheme.addEventListener('change', function() {

    //console.log(document.documentElement.getAttribute('data-theme')); //working but starts at null??
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
      console.log("changing from dark to light");
      trans()
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      console.log("changing from light to dark");
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
})