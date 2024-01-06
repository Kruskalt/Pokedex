const URLAPI = "https://pokeapi.co/api/v2/pokemon"

export async function pedirPokemon(url) {
    const respuesta = await fetch(url);
    const respuestaJson = await respuesta.json();

    return respuestaJson

}

export async function pedirPagina(pagina = 0) {
    
    const respuestaPagina = await fetch(`${URLAPI}?limit=20&offset=${pagina}`)
    const respuestaJSON =  await respuestaPagina.json()
    
    return respuestaJSON.results  
}

export async function pedirCartasDelPokemon(pokemon){
    

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
