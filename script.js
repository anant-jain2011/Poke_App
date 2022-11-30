let pokemon = prompt("Enter Pokemon name:- ");

const prints = (param) => {
    console.log(param);
}

fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
    .then(res => res.json())
    .then((data) => {
        pname.innerHTML = data.name[0].toUpperCase() + data.name.slice(1);
        image.src = data.sprites.versions["generation-ii"].crystal.front_transparent;
    });

fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
    .then(res => res.json())
    .then(data => prints(data.sprites.versions["generation-ii"].crystal));

// document.body.appendChild(image);