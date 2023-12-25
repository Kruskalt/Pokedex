

const URLAPI = "https://pokeapi.co/api/v2/pokemon"
const offsetPagina=20
let paginaActual;
let paginaAnterior;
let paginaSiguiente;
///https://pokeapi.co/api/v2/pokemon?limit=20&offset=0

pedirPagina(0)

const $pageItems= document.querySelectorAll(".page-item a")

$pageItems.forEach(elem=>{
  $(elem).on("click",function () {
    if (elem.textContent==="Previous" && paginaActual!=undefined && paginaActual!=0) {
      pedirPagina((paginaAnterior-1)*offsetPagina)
      let aux=paginaActual  
      paginaActual=paginaAnterior
      paginaSiguiente=aux
      paginaAnterior=paginaActual-1
      console.log(paginaActual)
      console.log(paginaAnterior)
      console.log(paginaSiguiente)
    }

    if (elem.textContent!="Previous") {
      const numeroPagina= Number(elem.textContent)

      paginaActual=numeroPagina
      paginaAnterior=numeroPagina-1
      paginaSiguiente=numeroPagina+1
      console.log(paginaActual)
      console.log(paginaAnterior)
      console.log(paginaSiguiente)
      pedirPagina((numeroPagina-1)*offsetPagina)
    }
    
    

    // if (elem.textContent==="Previous" & elem) {
    //   numeroPagina=paginaActual
    // }
    
    
  })
})





 



function pedirPagina(pagina) {
$("main").html('')
fetch(`${URLAPI}?limit=20&offset=${pagina}`)
  .then(respuesta => respuesta.json())
  .then(respuestaJSON => {
    

    
    for (let i = 0; i < respuestaJSON.results.length; i++) {
 
      fetch(`${respuestaJSON.results[i].url}`).then(pokemon => pokemon.json())
        .then(pokemonJSON => {
          const imagenPokemon = pokemonJSON.sprites.front_default
          const idPokemon = pokemonJSON.id
          console.log(pokemonJSON)
          const card = $(`
              <div class="card main__card" style="width: 18rem; display:inline-block">
                <img src="${imagenPokemon}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">#${idPokemon}</h5>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            `);
          card.on("click",function() {
            click()
          })
         
          $("main").append(card);
      })
    }

  })
  .catch(error => console.error("FALLÓ", error));

}

 

function click() {
  console.log("funcionaaa")
}    
   
  
