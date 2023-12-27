

const URLAPI = "https://pokeapi.co/api/v2/pokemon"
const offsetPagina=20

let paginaActual=1;
let paginaAnterior=0;
let paginaSiguiente=2;
///https://pokeapi.co/api/v2/pokemon?limit=20&offset=0

pedirPagina(0)


function pedirPagina(pagina) {
$(".row").html('')
fetch(`${URLAPI}?limit=20&offset=${pagina}`)
  .then(respuesta => respuesta.json())
  .then(respuestaJSON => {
    

    
    for (let i = 0; i < respuestaJSON.results.length; i++) {
 
      fetch(`${respuestaJSON.results[i].url}`).then(pokemon => pokemon.json())
        .then(pokemonJSON => {

          const imagenPokemon = pokemonJSON.sprites.front_default
          const idPokemon = pokemonJSON.id
          const nombrePokemon= pokemonJSON.species.name

          console.log(pokemonJSON)
          const card = $(`
              <div class="col">
              <div class="card main__card" style=" display:inline-block" >
                <img src="${imagenPokemon}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">#${idPokemon}</h5>
                    
                </div>
              </div>
              </div>
            `);
          card.on("click",function() {
            mostrarCartaPokemon(nombrePokemon)
          })
          
          $(".row").append(card);
      })
    }

  })
  .catch(error => console.error("FALLÓ", error));

}

 


  
