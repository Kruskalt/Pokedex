import { pedirPagina } from "../servicios.js";
import { mostrarSprites } from "./sprites.js";

const $pageItems = document.querySelectorAll(".page-item a")

const paginasMaximo = 50
const offsetPagina = 20

let paginaActual = 1;
let paginaAnterior = 0;
let paginaSiguiente = 2;

export async function captarMovimientoDePagina() {
  
 
  $pageItems.forEach(elem => {
    
   $(elem).on("click", async function () {

    const $pokemons =await document.querySelectorAll(".card")

  

      await analizarADondeSeQuiereMover(elem, $pokemons);
    })
  })
}

async function analizarADondeSeQuiereMover(elem, $pokemons) {
  const cargaronTodosLosPkEnPantalla= $pokemons.length === 20

  if (elem.textContent === "Previous" && cargaronTodosLosPkEnPantalla) {

    mostrarSprites(await pedirPagina(moverseApaginaAnterior()));

  }

  if (elem.textContent === "Next" && cargaronTodosLosPkEnPantalla) {

    mostrarSprites(await pedirPagina(moverseApaginaSiguiente()));
  }

  if (elem.textContent === "+5" && cargaronTodosLosPkEnPantalla) {

    mostrarSprites(await pedirPagina(moverse5paginasAdelante()));
  }

  if (elem.textContent === "-5" && cargaronTodosLosPkEnPantalla) {

    mostrarSprites(await pedirPagina(moverse5paginasAtras()));
  }
}

 function moverseApaginaSiguiente() {
  

  if (paginaSiguiente <= paginasMaximo && paginaSiguiente != undefined ) {

    paginaActual = paginaActual + 1
    paginaAnterior = paginaActual - 1;
    paginaSiguiente = paginaActual + 1;

    
    document.querySelector("#numero-pagina").textContent = `${paginaActual}/50`

    return (paginaActual - 1) * offsetPagina
  }

}

 function moverseApaginaAnterior() {
  
  if (paginaActual != undefined && paginaActual != 1 ) {
    let aux = paginaActual;
    paginaActual = paginaAnterior;
    paginaSiguiente = aux;
    paginaAnterior = paginaActual - 1;
    document.querySelector("#numero-pagina").textContent = `${paginaActual}/50`
    return (paginaAnterior - 1) * offsetPagina
  }
}
function moverse5paginasAdelante() {

  
  if (paginaSiguiente + 5 <= paginasMaximo && paginaSiguiente + 5 != undefined ) {

    paginaActual = paginaActual + 5
    paginaAnterior = paginaActual - 1;
    paginaSiguiente = paginaActual + 1;

    
    document.querySelector("#numero-pagina").textContent = `${paginaActual}/50`

    return (paginaActual - 1) * offsetPagina
  }
}


function moverse5paginasAtras() {
  
  if (paginaAnterior - 5 > 0  && $pokemons.length === 20) {

    paginaActual = paginaActual - 5
    paginaAnterior = paginaActual - 1;
    paginaSiguiente = paginaActual + 1;

    
    document.querySelector("#numero-pagina").textContent = `${paginaActual}/65`

    return (paginaActual - 1) * offsetPagina
  }
}


