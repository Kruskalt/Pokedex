import {CartaPokemon} from "../src/clases/cartaPokemon.js";

export function elegirUnaCarta(listaCartas){


     for (let i = 0; i < listaCartas.length; i++) {

                const carta = listaCartas[i]
                const fechaEmision = new Date(carta.set.releaseDate)
                let cartaPokemonObj=null;
                if (carta.abilities != undefined) {
                     cartaPokemonObj= new CartaPokemon(carta.hp,fechaEmision,carta.images.small,
                        carta.types[0],carta.subtypes[0],carta.attacks,carta.abilities[0],
                        carta.artist);
                }else{
                     cartaPokemonObj= new CartaPokemon(carta.hp,fechaEmision,carta.images.small,
                        carta.types[0],carta.subtypes[0],carta.attacks,"",
                        carta.artist);
                }

                

                if (Number(cartaPokemonObj.getFechaSalida().getFullYear()) > 2015) {
                    

                    return cartaPokemonObj
                    
                    
                }

            }
            
    return new CartaPokemon(listaCartas[0].hp,listaCartas[0].set.releaseDate,listaCartas[0].images.small,
        listaCartas[0].types[0],listaCartas[0].subtypes[0],listaCartas[0].attacks,listaCartas[0].abilities[0],
        listaCartas[0].artist);
}


 