function elegirUnaCarta(listaCartas){
     for (let i = 0; i < listaCartas.length; i++) {

                const carta = listaCartas[i]
                const fechaEmision = new Date(carta.set.releaseDate)

                if (Number(fechaEmision.getFullYear()) > 2015) {
                    console.log(carta)

                    return carta
                    
                    break
                }

            }
}


 async function pedirCartasDelPokemon(pokemon){
    let $imagenCartaCargando=document.querySelector("#imagen-modal")
    $imagenCartaCargando.src="imagenes/pikachu.gif"

     const requestOptions = {
        method: 'GET',
        headers: {
            'X-Api-Key': 'cff89d55-6a4a-49bd-82a4-caf5688ac947',
            'Content-Type': 'application/json'

        },
    };

    const respuestaPagina= await  fetch(`https://api.pokemontcg.io/v2/cards?q=name:${pokemon}`, requestOptions)
    const respuestaJSON= await respuestaPagina.json()

    return respuestaJSON.data


}
