
import * as service from "./servicios.js";

const URLAPI = "https://pokeapi.co/api/v2/pokemon"



///https://pokeapi.co/api/v2/pokemon?limit=20&offset=0

pedirPagina(0)


async function pedirPagina(pagina) {



    try{

    const pokemons =  service.pedirPagina(pagina)
    for (let i = 0; i < pokemons.length; i++) {
      

      const infoPokemon= await service.pedirPokemon(`${respuestaJSON.results[i].url}`)  
      
     
          const imagenPokemon = infoPokemon.sprites.front_default
          const idPokemon = infoPokemon.id
          const nombrePokemon= infoPokemon.species.name

          
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
            modal.style.display = "block" //que se vea el modal mientras carga la info
            mostrarModalConInfoDelPokemon(nombrePokemon)
          })
          
          $(".row").append(card);
      
    }

    }catch(error){
      console.error("FALLÓ", error)
    }

    

}



  
