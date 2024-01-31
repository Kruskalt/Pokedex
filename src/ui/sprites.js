import * as service from "../servicios.js";
import * as funcionesModal from "./modal.js";
import { Pokemon } from "../clases/pokemon.js";

export async function mostrarSprites(paginaConPokemons) {
  borrarSpritesAnteriores();
  for (let i = 0; i < paginaConPokemons.length; i++) {


    const infoPokemon = await service.pedirPokemon(`${paginaConPokemons[i].url}`)
    const pokemonObj = new Pokemon(infoPokemon.species.name, infoPokemon.id,
      infoPokemon.sprites.front_default)



    agregarSpritePokemonAlMain(pokemonObj.getimagenPokemon(), pokemonObj.getid(), pokemonObj.getnombre())

  }

}


function borrarSpritesAnteriores() {
  $(".row").html('');
}

export function agregarSpritePokemonAlMain(imagenPokemon, idPokemon, nombrePokemon) {
  // Crear elementos y configurar sus atributos y contenido
  const colDiv = document.createElement('div');
  colDiv.classList.add('col');

  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card', 'main__card');
  cardDiv.style.display = 'inline-block';

  const img = document.createElement('img');
  img.src = imagenPokemon;
  img.classList.add('card-img-top');
  img.alt = '...';

  const cardBodyDiv = document.createElement('div');
  cardBodyDiv.classList.add('card-body');

  const title = document.createElement('h5');
  title.classList.add('card-title');
  title.textContent = `#${idPokemon}`;

  // Agregar elementos al árbol DOM
  cardBodyDiv.appendChild(title);
  cardDiv.appendChild(img);
  cardDiv.appendChild(cardBodyDiv);
  colDiv.appendChild(cardDiv);

  // Asignar evento click al elemento creado
  colDiv.addEventListener('click', function () {
    const ventanaModal = document.querySelector('#ventanaModal');
    ventanaModal.style.display = 'block';
    funcionesModal.renovarModal();
    funcionesModal.mostrarModalConInfoDelPokemon(nombrePokemon);
  });

  // Agregar el elemento creado al elemento con clase "row"
  const rowElement = document.querySelector('.row');
  rowElement.appendChild(colDiv);

}