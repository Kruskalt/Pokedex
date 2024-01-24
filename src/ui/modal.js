
import { AgregarTipoEnLaTabla, agregarCostoEnergiaDeUnAtaque } from "./energias.js";
import * as service from "../servicios.js";
import * as funcionesCarta from "../funcionesCarta.js";

const $modal = document.querySelector("#ventanaModal")
const $cerrarModal = document.querySelector(".close")

let terminoDeCargarElModal = false

$cerrarModal.onclick = function () {
    if (terminoDeCargarElModal) {
        $modal.style.display = "none"
        terminoDeCargarElModal = false
    }

}
window.onclick = function (e) {
    if (e.target === $modal && terminoDeCargarElModal) {
        $modal.style.display = "none"
        terminoDeCargarElModal = false
    }
}


export async function mostrarModalConInfoDelPokemon(nombrePokemon) {
    if (nombrePokemon === "farfetchd") {
        nombrePokemon = "farfetch'd"
    }

    try {
        const $tituloModal = document.querySelector("#nombre-pokemon")
        $tituloModal.textContent = `${nombrePokemon}`.toUpperCase()

        mostrarCargandoCarta(); //mostrar a pikachu corriendo hasta que cargue la carta

        const listaCartas = await service.pedirCartasDelPokemon(nombrePokemon)

        if (listaCartas.length === 0) {//en caso de que el pokemon no tenga cartas
            mostrarMensajeError()

        } else {
            agregarInfoCartaAlModal(funcionesCarta.elegirUnaCarta(listaCartas))

        }

        terminoDeCargarElModal = true



    } catch (error) {
        console.error("FALLÓ", error)
    }
}

function mostrarCargandoCarta() {
    let $imagenCartaCargando = document.querySelector("#imagen-modal");
    $imagenCartaCargando.src = "imagenes/pikachu.gif";
}

function mostrarMensajeError() {
    let $imagenCartaDelModal = document.querySelector("#imagen-modal")
    $imagenCartaDelModal.src = "imagenes/ash-pikachu.jpg"

    ocultarTablaConInfoDeLaCarta();

    const $mensajeError = document.createElement("p")
    $mensajeError.textContent = "No hay cartas de este pokemon"
    $mensajeError.className = "mensaje-error"

    const $modalInfo = document.querySelector("#modal-info")
    $modalInfo.appendChild($mensajeError)


}

function ocultarTablaConInfoDeLaCarta() {
    const $table = document.querySelector("table");
    $table.style.display = "none";
}

function agregarInfoCartaAlModal(carta) {
    let $imagenCartaCargada = document.querySelector("#imagen-modal")
    $imagenCartaCargada.src = carta.getImagen()


    AgregarSubtypeEnLaTablaDelModal(carta.getSubtipo())
    AgregarPsEnLaTablaDelModal(carta.getvida())
    AgregarTipoEnLaTabla(carta.getTipo())
    AgregarAtaquesEnLaTablaDelModal(carta.getAtaques())

    if (carta.abilities != undefined) {
        AgregarHabilidadEnLaTabla(carta.getHabilidad())
    }

    AgregarIlustradorEnLaTabla(carta.getArtista())
}



function AgregarIlustradorEnLaTabla(ilustrador) {
    const $Ilustrador = document.createElement("td")


    $Ilustrador.textContent = ilustrador

    const $filaIlustradores = document.querySelectorAll("tr")[4]

    $filaIlustradores.appendChild($Ilustrador)

}

function AgregarPsEnLaTablaDelModal(hp) {
    const $Ps = document.createElement("td")
    $Ps.textContent = `PS${hp}`

    const $filaPs = document.querySelectorAll("tr")[1]

    $filaPs.appendChild($Ps)
}


function AgregarSubtypeEnLaTablaDelModal(subtype) {
    const $subtype = document.createElement("td")

    $subtype.textContent = `Pokemon ${subtype}`

    const $filaSubtypes = document.querySelectorAll("tr")[0]

    $filaSubtypes.appendChild($subtype)
}

function AgregarHabilidadEnLaTabla(habilidad) {

    const $Habilidad = document.createElement("td")
    const $habilidadTexto = document.createElement("p")

    const $filaHabilidad = document.querySelectorAll("tr")[3]


    $habilidadTexto.textContent = habilidad.text
    $habilidadTexto.style.fontSize = "10px"


    $Habilidad.textContent = habilidad.name
    $Habilidad.appendChild($habilidadTexto)

    $filaHabilidad.appendChild($Habilidad)
}


function AgregarAtaquesEnLaTablaDelModal(arrayAtaques) {
    if (arrayAtaques  === undefined) {
        return
    }
    const $filaAtaquesEnLaTabla = document.querySelectorAll("tr")[2]

    arrayAtaques.forEach(ataque => {

        const $ataque = crearElementoAtaque(ataque.name, ataque.damage)

        $ataque.appendChild(crearElementoDescripcionDelAtaque(ataque.text))

        agregarCostoEnergiaDeUnAtaque($ataque, ataque.cost)

        $filaAtaquesEnLaTabla.appendChild($ataque)
    });
}

function crearElementoDescripcionDelAtaque(descripcion) {
    const $ataqueTexto = document.createElement("p")

    $ataqueTexto.textContent = descripcion
    $ataqueTexto.style.fontSize = "10px"

    return $ataqueTexto
}

function crearElementoAtaque(nombreAtaque, dañoAtaque) {
    const $ataque = document.createElement("td")
    $ataque.style.fontSize = "20px"
    $ataque.textContent = nombreAtaque + " " + dañoAtaque

    return $ataque
}




export function renovarModal() {
    quitarMensajeError()

    mostrarTablaDelModal()

    quitarImagenDeCarta()

    quitarNombrePokemon()

    quitarSubtypDeCarta()

    quitarPsYElementoDeCarta()

    quitarAtaquesCarta()

    quitarHabilidadCarta()

    quitarIlustradorCarta()

}



function quitarIlustradorCarta() {
    const $filaIlustrador = document.querySelectorAll("tr")[4]
    if ($filaIlustrador.lastChild != document.querySelector("#ilustrador")) {

        $filaIlustrador.lastChild.remove()
    }
}

function quitarHabilidadCarta() {
    const $filaHabilidad = document.querySelectorAll("tr")[3]

    if ($filaHabilidad.lastChild != document.querySelector("#habilidad")) {

        $filaHabilidad.lastChild.remove()
    }
}

function quitarAtaquesCarta() {
    const $filaAtaquesCeldas = document.querySelectorAll("tr")[2].querySelectorAll("td")

    $filaAtaquesCeldas.forEach(element => {
        element.remove()
    })
}

function quitarPsYElementoDeCarta() {
    const $filaTipoPsCeldas = document.querySelectorAll("tr")[1].querySelectorAll("td")
    $filaTipoPsCeldas.forEach(element => {
        element.remove()
    })
}

function quitarSubtypDeCarta() {
    const $filaSubtype = document.querySelectorAll("tr")[0]
    const subtype = $filaSubtype.lastChild
    if (subtype != null) {
        subtype.remove()
    }
}

function quitarNombrePokemon() {
    const $nombrePokemon = document.querySelector("#nombre-pokemon")
    $nombrePokemon.textContent = ""
}

function quitarImagenDeCarta() {
    const $imagenCarta = document.querySelector("#imagen-modal")
    $imagenCarta.src = ""
}

function mostrarTablaDelModal() {
    const $table = document.querySelector("table")
    $table.style.display = "table"
}

function quitarMensajeError() {
    const $mensajeError = document.querySelector(".mensaje-error")
    if ($mensajeError != null) {
        $mensajeError.remove()
    }
}

