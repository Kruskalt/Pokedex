const modal = document.querySelector("#ventanaModal")
const span = document.querySelector(".close")
let bandera= false

span.onclick =  function () {
    if (bandera) {
        modal.style.display = "none"
        bandera=false
    }
    
}
window.onclick = function (e) {
    if (e.target === modal && bandera) {
        modal.style.display = "none"
        bandera=false
    }
}   
    

 function mostrarCartaPokemon(nombrePokemon) {
    renovarModal()

    if (nombrePokemon==="farfetchd") {
        nombrePokemon="farfetch'd"
    }

    document.querySelector("#imagen-modal").src = "imagenes/pikachu.gif"

  

    const requestOptions = {
        method: 'GET',
        headers: {
            'X-Api-Key': 'cff89d55-6a4a-49bd-82a4-caf5688ac947',
            'Content-Type': 'application/json'

        },
    };

       
   fetch(`https://api.pokemontcg.io/v2/cards?q=name:${nombrePokemon}`, requestOptions)
        .then(respuesta => respuesta.json().then(respuestaJson => {
            console.log(respuestaJson)
            console.log(respuestaJson)
            document.querySelector("#nombre-pokemon").textContent = `${nombrePokemon}`.toUpperCase()

            //para mostrar cartas relativamente nuevas
            const listaCartas = respuestaJson.data
            for (let i = 0; i < listaCartas.length; i++) {

                const carta = listaCartas[i]
                const fechaEmision = new Date(carta.set.releaseDate)

                if (Number(fechaEmision.getFullYear()) > 2015) {
                    console.log(carta)
                    document.querySelector("#imagen-modal").src = carta.images.small


                    AgregarSubtypeEnLaTabla(carta.subtypes[0])
                    AgregarPsEnLaTabla(carta.hp)
                    AgregarTipoEnLaTabla(carta.types[0])
                    AgregarAtaquesEnLaTabla(carta.attacks)

                    if (carta.abilities!=undefined) {
                         AgregarHabilidadEnLaTabla(carta.abilities[0])
                    }

                    AgregarIlustradorEnLaTabla(carta.artist)
                    
                    break
                }

            }

            bandera=true


        }))



    modal.style.display = "block"


    

}

function AgregarIlustradorEnLaTabla(ilustrador) {
    const $tdIlustrador = document.createElement("td")
    

    $tdIlustrador.textContent=ilustrador
    $tdIlustrador.style.fontSize="20px"

    document.querySelectorAll("tr")[4].appendChild($tdIlustrador)
    
}

function AgregarPsEnLaTabla(hp) {
    const tdElementPS = document.createElement("td")
    tdElementPS.textContent = `PS${hp}`
    tdElementPS.style.fontSize= "50px"
    document.querySelectorAll("tr")[1].appendChild(tdElementPS)
}


function AgregarSubtypeEnLaTabla(subtype) {
    const tdElementPS = document.createElement("td")
    tdElementPS.textContent = `Pokemon ${subtype}`
    
    document.querySelectorAll("tr")[0].appendChild(tdElementPS)
}

function AgregarHabilidadEnLaTabla(habilidad) {
    
    const $tdHabilidad = document.createElement("td")
    const $habilidadTexto = document.createElement("p")
    const $trHabilidad=document.querySelectorAll("tr")[3]
    

    $habilidadTexto.textContent=habilidad.text
    $habilidadTexto.style.fontSize="10px"
    
    $tdHabilidad.style.fontSize="20px"
    $tdHabilidad.textContent= habilidad.name 

    $tdHabilidad.appendChild($habilidadTexto)

    $trHabilidad.appendChild($tdHabilidad)
}
function AgregarAtaquesEnLaTabla(arrayAtaques) {
    
    
    const $trAtaques=document.querySelectorAll("tr")[2]
    //$trAtaques.style.display="block"
    arrayAtaques.forEach(ataque => {
        const $tdAtaque = document.createElement("td")
        const $ataqueTexto = document.createElement("p")

        

        $ataqueTexto.textContent=ataque.text
        $ataqueTexto.style.fontSize="10px"
        
        $tdAtaque.style.fontSize="20px"
        $tdAtaque.textContent= ataque.name + " " + ataque.damage

        $tdAtaque.appendChild($ataqueTexto)

        agregarCostoEnergiaDeUnAtaque($tdAtaque,ataque.cost)

        $trAtaques.appendChild($tdAtaque)
    });

    
   
}




function renovarModal() {
    document.querySelector("#imagen-modal").src = ""
    document.querySelector("h2").textContent = ""

    document.querySelectorAll("tr")[0].lastChild.remove()

    const $trTipoPs= document.querySelectorAll("tr")[1].querySelectorAll("td")
     $trTipoPs.forEach(element => {
        element.remove()
     });

     const $trAtaques= document.querySelectorAll("tr")[2].querySelectorAll("td")

     $trAtaques.forEach(element => {
        element.remove()
     });
    

    if (document.querySelectorAll("tr")[3].lastChild!=document.querySelector("#habilidad")) {
        
        document.querySelectorAll("tr")[3].lastChild.remove()
    }

    if (document.querySelectorAll("tr")[4].lastChild!=document.querySelector("#ilustrador")) {
        
        document.querySelectorAll("tr")[4].lastChild.remove()
    }
    

    

    

     
    
    

     
    
}