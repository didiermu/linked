function myFunction() {
  var input, filter, section, div, h1, h2, h6, i;
  input = document.querySelector("#key");
  // input = document.getElementById("input-search");
  // filter = input.value.toUpperCase();
  filter = input.innerHTML.toUpperCase();
  section = document.querySelector(".search--grid");
  div = section.querySelectorAll(".project-simple");
  // div = section.getElementsByTagName("a");

  console.log(filter);
  for (i = 0; i < div.length; i++) {
    // h1 = div[i].getElementsByTagName("h2")[0];
    h1 = div[i].querySelectorAll(".projects-home__card__hover__title")[0];
    h2 = div[i].querySelectorAll(".tituloCategoria")[0];
    h6 = div[i].querySelectorAll(".tags")[0];

    if (h1 || h2 || h6) {
      var palabrasEnFiltro = filter.split(' ');
      var hallado = 0;
      for (var filtro of palabrasEnFiltro) {
        if (h1.innerHTML.toUpperCase().indexOf(filtro) > -1) {
          hallado++;
        }
        else if (h2.innerHTML.toUpperCase().indexOf(filtro) > -1) {
          hallado++;
        }
        else if (h6.innerHTML.toUpperCase().indexOf(filtro) > -1) {
          hallado++;
        }
      }

      if (hallado === palabrasEnFiltro.length) {
      //   div[i].style.display = "block";
        div[i].classList.add("match");
      } else {
      //   div[i].style.display = "";
        div[i].classList.remove("match");
      }

    }
  
  }
  
}


myFunction();

