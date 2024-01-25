import {CartaPokemon} from "../clases/cartaPokemon.js";
import { Movimiento } from "../clases/movimiento.js";


export function mapearCartaPokemon(datosApi){
    const{
        hp:vida,
        set:{releaseDate:fechaSalida},
        images:{small:imagen},
        types:tipo,
        subtypes:subtipos,
        attacks:ataques,
        abilities:habilidades,
        artist:artista,
    }=datosApi;
    
    let habilidad=null;
    if (habilidades!=null) {
        habilidad=habilidades[0];
    }

    return new CartaPokemon(vida,
        new Date(fechaSalida),
        imagen,
        tipo[0],
        subtipos[0],
        ataques.map((item)=> new Movimiento(item.name,item.damage,item.text,item.cost)
        ),habilidad,artista
        )
}