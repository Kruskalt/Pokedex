
import * as service from "./servicios.js";
import { mostrarSprites } from "./ui/sprites.js";
import * as paginacion from "./ui/paginacion.js";





///https://pokeapi.co/api/v2/pokemon?limit=20&offset=0




async function inicializar() {
   
    await mostrarSprites(await service.pedirPagina())
    
    paginacion.captarMovimientoDePagina()
}



inicializar()
