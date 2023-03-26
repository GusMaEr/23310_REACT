const starters = [
  {
    id: 001,
    name: "Bulbasaur",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    type: "grass",
    gen: 1,
  },
  {
    id: 004,
    name: "Charmander",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    type: "fire",
    gen: 1,
  },
  {
    id: 007,
    name: "Squirtle",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    type: "water",
    gen: 1,
  },
  {
    id: 025,
    name: "Pikachu",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    type: "electric",
    gen: 1,
  },
  {
    id: 152,
    name: "Chikorita",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png",
    type: "grass",
    gen: 2,
  },
  {
    id: 155,
    name: "Cyndaquil",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png",
    type: "fire",
    gen: 2,
  },
  {
    id: 158,
    name: "Totodile",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png",
    type: "water",
    gen: 2,
  },
  {
    id: 252,
    name: "Treecko",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/252.png",
    type: "grass",
    gen: 3,
  },
  {
    id: 255,
    name: "Torchic",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png",
    type: "fire",
    gen: 3,
  },
  {
    id: 258,
    name: "Mudkip",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png",
    type: "water",
    gen: 3,
  },
];

function pokeCard() {
  let card = "";

  starters.forEach((pokemon) => {
    console.log(starters);
    card += `
          <div class="card-item">
            <div class="card-inner">
              <h2>Name: ${pokemon.name}</h2>
              <img src=${pokemon.img} alt="pokeamigo">
              <p>Pokedex Index: ${pokemon.id}</p>
              <p>Type: ${pokemon.type}</p>
              <p>Generation: ${pokemon.gen}</p>
            </div>
          </div>
            `;
    document.getElementById("pokedex").innerHTML = card;
  });
}

pokeCard();

// let pokedexContainer = document.getElementById("pokedex");

// const mappedPokemon = pokemones.map((pokemon, index) => {
//   return `<div class="pokemon-card" key=${index}>
//         <img src=${pokemon.img} alt="img pokemon" />
//         <div class="details">
//         <p>Name: ${pokemon.name}</p>
//         <p>Pokedex Index: ${pokemon.id}</p>
//         <p>Type: ${pokemon.type}</p>
//         <p>Generation: ${pokemon.gen}</p>
//         </div>
//     </div>`;
// });

// pokedexContainer.innerHTML = mappedPokemon;
