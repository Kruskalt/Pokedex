const modal = document.querySelector("#ventanaModal")
const span = document.querySelector(".close")


span.onclick =  function () {
    modal.style.display = "none"
}
window.onclick = function (e) {
    if (e.target === modal) {
        modal.style.display = "none"
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

                    break
                }

            }




        }))



    modal.style.display = "block"


    

}
function AgregarTipoEnLaTabla(tipo) {
    const tdElementTipo = document.createElement("td")
    const imagen = document.createElement("img")
    if (tipo==="Grass") {
        
        imagen.src="imagenes/planta.png"
        tdElementTipo.appendChild(imagen)
        document.querySelectorAll("tr")[1].appendChild(tdElementTipo)
    }
    if (tipo==="Fire") {
        imagen.src="imagenes/fuego_chico.png"
        //imagen.width="91px"
        //imagen.height="92px"
        tdElementTipo.appendChild(imagen)
        document.querySelectorAll("tr")[1].appendChild(tdElementTipo)
    }
    if (tipo==="Colorless") {
        imagen.src="imagenes/basica.png"
        //imagen.width="91px"
        //imagen.height="92px"
        tdElementTipo.appendChild(imagen)
        document.querySelectorAll("tr")[1].appendChild(tdElementTipo)
    }
    if (tipo==="Psychic") {
        imagen.src="imagenes/psiquico.png"
        //imagen.width="91px"
        //imagen.height="92px"
        tdElementTipo.appendChild(imagen)
        document.querySelectorAll("tr")[1].appendChild(tdElementTipo)
    }
    if (tipo==="Fairy") {
        imagen.src="imagenes/hada.png"
        //imagen.width="91px"
        //imagen.height="92px"
        tdElementTipo.appendChild(imagen)
        document.querySelectorAll("tr")[1].appendChild(tdElementTipo)
    }
    if (tipo==="Lightning") {
        imagen.src="imagenes/electrico.png"
        //imagen.width="91px"
        //imagen.height="92px"
        tdElementTipo.appendChild(imagen)
        document.querySelectorAll("tr")[1].appendChild(tdElementTipo)
    }
    if (tipo==="Water") {
        imagen.src="imagenes/agua.png"
        //imagen.width="91px"
        //imagen.height="92px"
        tdElementTipo.appendChild(imagen)
        document.querySelectorAll("tr")[1].appendChild(tdElementTipo)
    }
    if (tipo==="Fighting") {
        imagen.src="imagenes/lucha.png"
        //imagen.width="91px"
        //imagen.height="92px"
        tdElementTipo.appendChild(imagen)
        document.querySelectorAll("tr")[1].appendChild(tdElementTipo)
    }
    if (tipo==="Metal") {
        imagen.src="imagenes/metal.png"
        //imagen.width="91px"
        //imagen.height="92px"
        tdElementTipo.appendChild(imagen)
        document.querySelectorAll("tr")[1].appendChild(tdElementTipo)
    }
    
    
    
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


function agregarCostoEnergiaDeUnAtaque(ataque,arrayEnergia) {
    arrayEnergia.forEach(tipoEnergia => {
        console.log(tipoEnergia)
        const $imagenCostoEnergia= document.createElement("img")
        if (tipoEnergia==="Fire") {
            $imagenCostoEnergia.src="imagenes/fuego_chico.png"
            ataque.appendChild($imagenCostoEnergia)
            console.log($imagenCostoEnergia)
        }
        if (tipoEnergia==="Colorless") {
            $imagenCostoEnergia.src="imagenes/basica.png"
            ataque.appendChild($imagenCostoEnergia)
            console.log($imagenCostoEnergia)
        }
        if (tipoEnergia==="Grass") {
            $imagenCostoEnergia.src="imagenes/planta.png"
            ataque.appendChild($imagenCostoEnergia)
            console.log($imagenCostoEnergia)
        }
        if (tipoEnergia==="Psychic") {
            $imagenCostoEnergia.src="imagenes/psiquico.png"
            ataque.appendChild($imagenCostoEnergia)
            console.log($imagenCostoEnergia)
        }
        if (tipoEnergia==="Fairy") {
            $imagenCostoEnergia.src="imagenes/hada.png"
            ataque.appendChild($imagenCostoEnergia)
            console.log($imagenCostoEnergia)
        }
        if (tipoEnergia==="Lightning") {
            $imagenCostoEnergia.src="imagenes/electrico.png"
            ataque.appendChild($imagenCostoEnergia)
            console.log($imagenCostoEnergia)
        }
        if (tipoEnergia==="Water") {
            $imagenCostoEnergia.src="imagenes/agua.png"
            ataque.appendChild($imagenCostoEnergia)
            console.log($imagenCostoEnergia)
        }
        if (tipoEnergia==="Fighting") {
            $imagenCostoEnergia.src="imagenes/lucha.png"
            ataque.appendChild($imagenCostoEnergia)
            console.log($imagenCostoEnergia)
        }
        if (tipoEnergia==="Metal") {
            $imagenCostoEnergia.src="imagenes/metal.png"
            ataque.appendChild($imagenCostoEnergia)
            console.log($imagenCostoEnergia)
        }
    });
}

function renovarModal() {
    document.querySelectorAll("tr")[0].lastChild.remove()

    document.querySelector("#imagen-modal").src = ""
    document.querySelector("h2").textContent = ""

     const $trAtaques= document.querySelectorAll("tr")[2].querySelectorAll("td")
    
     $trAtaques.forEach(element => {
        element.remove()
     });

     const $trTipoPs= document.querySelectorAll("tr")[1].querySelectorAll("td")
     $trTipoPs.forEach(element => {
        element.remove()
     });
    
}