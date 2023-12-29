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
    

 async function mostrarModalConInfoDelPokemon(nombrePokemon) {
    renovarModal()


    if (nombrePokemon==="farfetchd") {
        nombrePokemon="farfetch'd"
    }
    try{
            const $tituloModal = document.querySelector("#nombre-pokemon")
            $tituloModal.textContent = `${nombrePokemon}`.toUpperCase()

            const listaCartas = await pedirCartasDelPokemon(nombrePokemon)
            console.log(listaCartas)

            const carta= elegirUnaCarta(listaCartas)

            agregarInfoCartaAlModal(carta)
            

            bandera=true

            

            }catch(error){
      console.error("FALLÓ", error)
    }
        



    


    

}



function agregarInfoCartaAlModal(carta){
                    let $imagenCartaCargada=document.querySelector("#imagen-modal")
                    $imagenCartaCargada.src = carta.images.small


                    AgregarSubtypeEnLaTabla(carta.subtypes[0])
                    AgregarPsEnLaTabla(carta.hp)
                    AgregarTipoEnLaTabla(carta.types[0])
                    AgregarAtaquesEnLaTabla(carta.attacks)

                    if (carta.abilities!=undefined) {
                         AgregarHabilidadEnLaTabla(carta.abilities[0])
                    }

                    AgregarIlustradorEnLaTabla(carta.artist)
}



function AgregarIlustradorEnLaTabla(ilustrador) {
    const $Ilustrador = document.createElement("td")
    

    $Ilustrador.textContent=ilustrador
    
    const $filaIlustradores = document.querySelectorAll("tr")[4]

    $filaIlustradores.appendChild($Ilustrador)
    
}

function AgregarPsEnLaTabla(hp) {
    const $Ps = document.createElement("td")
    $Ps.textContent = `PS${hp}`
    
    const $filaPs = document.querySelectorAll("tr")[1]

    $filaPs.appendChild($Ps)
}


function AgregarSubtypeEnLaTabla(subtype) {
    const $subtype = document.createElement("td")

    $subtype.textContent = `Pokemon ${subtype}`

    const $filaSubtypes = document.querySelectorAll("tr")[0]
    
    $filaSubtypes.appendChild($subtype)
}

function AgregarHabilidadEnLaTabla(habilidad) {
    
    const $Habilidad = document.createElement("td")
    const $habilidadTexto = document.createElement("p")

    const $filaHabilidad=document.querySelectorAll("tr")[3]
    

    $habilidadTexto.textContent=habilidad.text
    $habilidadTexto.style.fontSize="10px"
    
    
    $Habilidad.textContent= habilidad.name 
    $Habilidad.appendChild($habilidadTexto)

    $filaHabilidad.appendChild($Habilidad)
}
function AgregarAtaquesEnLaTabla(arrayAtaques) {
    
    
    const $filaAtaques=document.querySelectorAll("tr")[2]
    //$trAtaques.style.display="block"
    arrayAtaques.forEach(ataque => {
        const $ataque = document.createElement("td")
        const $ataqueTexto = document.createElement("p")

        

        $ataqueTexto.textContent=ataque.text
        $ataqueTexto.style.fontSize="10px"
        
        $ataque.style.fontSize="20px"
        $ataque.textContent= ataque.name + " " + ataque.damage

        $ataque.appendChild($ataqueTexto)

        agregarCostoEnergiaDeUnAtaque($ataque,ataque.cost)

        $filaAtaques.appendChild($ataque)
    });

    
   
}




function renovarModal() {
    const $imagenCarta = document.querySelector("#imagen-modal")
    $imagenCarta.src = ""

    const $nombrePokemon= document.querySelector("#nombre-pokemon")
    $nombrePokemon.textContent = ""
    
    const $filaSubtype= document.querySelectorAll("tr")[0]
    $filaSubtype.lastChild.remove()

   

    const $filaTipoPsCeldas= document.querySelectorAll("tr")[1].querySelectorAll("td")
     $filaTipoPsCeldas.forEach(element => {
        element.remove()
     });

     const $filaAtaquesCeldas= document.querySelectorAll("tr")[2].querySelectorAll("td")

     $filaAtaquesCeldas.forEach(element => {
        element.remove()
     });
    

     const $filaHabilidad = document.querySelectorAll("tr")[3]

    if ($filaHabilidad.lastChild!=document.querySelector("#habilidad")) {
        
        $filaHabilidad.lastChild.remove()
    }

    const $filaIlustrador = document.querySelectorAll("tr")[4]
    if ($filaIlustrador.lastChild!=document.querySelector("#ilustrador")) {
        
        $filaIlustrador.lastChild.remove()
    }
    

    

    

     
    
    

     
    
}