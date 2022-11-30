let pokemon = "lapras"; //prompt("Enter Pokemon name:- ");

const prints = (param) => {
    console.log(param);
}

function filterFunction() {
    var input, filter, ul, li, a, i;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");

    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } 

      else {
        a[i].style.display = "none";
      }
    }
  }

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
    .then(res => res.json())
    .then((data) => {
        pname.innerHTML = data.name[0].toUpperCase() + data.name.slice(1);
        image.src = data.sprites.versions["generation-ii"].crystal.front_transparent;
    });

fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res => res.json())
    .then(data => {
        prints(data)
    });

// document.body.appendChild(image);