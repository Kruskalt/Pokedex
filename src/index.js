

const URLAPI = "https://pokeapi.co/api/v2/pokemon"
const offsetPagina=20

let paginaActual=1;
let paginaAnterior=0;
let paginaSiguiente=2;
///https://pokeapi.co/api/v2/pokemon?limit=20&offset=0

pedirPagina(0)


async function pedirPagina(pagina) {
$(".row").html('')

 const respuestaPagina= await fetch(`${URLAPI}?limit=20&offset=${pagina}`)
 const respuestaJSON= await respuestaPagina.json()


    try{

      
    for (let i = 0; i < respuestaJSON.results.length; i++) {
      

      const infoPokemon= await pedirPokemon(`${respuestaJSON.results[i].url}`)  
      

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
            mostrarCartaPokemon(nombrePokemon)
          })
          
          $(".row").append(card);
      
    }

    }catch(error){
      console.error("FALLÓ", error)
    }

    

}

async function pedirPokemon(url) {
        const respuesta = await fetch(url);
        const respuestaJson = await respuesta.json();
        console.log(respuestaJson)
        return respuestaJson
  
 }


  
