

document.addEventListener('DOMContentLoaded', () => {
  getCatFact();
  getCatImg();
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

//https://codepen.io/tlcheung/pen/YzqGXPK
function getCatFact() {
  let catFact = "";
  let http = new XMLHttpRequest();
  http.open("GET", "https://catfact.ninja/fact", true);
  http.send();

  http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let response = this.responseText;
      let jsonResponse = JSON.parse(response);
      catFact = jsonResponse.fact;
      document.getElementById("cat-fact").innerHTML = catFact;
    }
  }
}

/*https://codepen.io/thebigdavec/pen/eYWNemj */
async function getCatImg(){
  const img = document.getElementById("random-cat");
  const catURL = await fetch("https://api.thecatapi.com/v1/images/search");
  const catData = await catURL.json();
  const catImg = catData[0].url;
  img.src = catImg;
}