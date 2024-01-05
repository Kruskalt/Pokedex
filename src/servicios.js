const URLAPI = "https://pokeapi.co/api/v2/pokemon"

export async function pedirPokemon(url) {
    const respuesta = fetch(url);
    const respuestaJson = await respuesta.json();

    return respuestaJson

}

export async function pedirPagina(pagina = 0) {
    $(".row").html('')
    const respuestaPagina = fetch(`${URLAPI}?limit=20&offset=${pagina}`)
    const respuestaJSON = await respuestaPagina.json()

    return respuestaJSON.results  
}