import * as service from "../servicios.js";
import * as funcionesModal from "./modal.js";


export async function mostrarSprites(paginaConPokemons){
  borrarSpritesAnteriores();
    for (let i = 0; i < paginaConPokemons.length; i++) {
      

        const infoPokemon= await service.pedirPokemon(`${paginaConPokemons[i].url}`)  
        
       
            const imagenPokemon = infoPokemon.sprites.front_default
            const idPokemon = infoPokemon.id
            const nombrePokemon= infoPokemon.species.name
  
            agregarSpritePokemonAlMain(imagenPokemon,idPokemon,nombrePokemon)
          
      }
  
}


function borrarSpritesAnteriores() {
  $(".row").html('');
}

function agregarSpritePokemonAlMain(imagenPokemon,idPokemon,nombrePokemon) {
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
              document.querySelector("#ventanaModal").style.display = "block" //que se vea el modal mientras carga la info
              funcionesModal.renovarModal()
              funcionesModal.mostrarModalConInfoDelPokemon(nombrePokemon)
            })
            
            $(".row").append(card);
}