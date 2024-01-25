import { mapearCartaPokemon } from "./mapeadores/cartaPokemon.js";

export function elegirUnaCarta(listaCartas){


     for (let i = 0; i < listaCartas.length; i++) {

                const carta = listaCartas[i]

                const fechaEmision = new Date(carta.set.releaseDate)
                let cartaPokemonObj=mapearCartaPokemon(carta);

                if (Number(cartaPokemonObj.getFechaSalida().getFullYear()) > 2015) {
                    

                    return cartaPokemonObj
                    
                    
                }

            }
            
    return mapearCartaPokemon(listaCartas[0])
}


 