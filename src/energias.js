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
        if (tipoEnergia==="Dragon") {
            $imagenCostoEnergia.src="imagenes/dragon.png"
            ataque.appendChild($imagenCostoEnergia)
            console.log($imagenCostoEnergia)
        }
        if (tipoEnergia==="Darkness") {
            $imagenCostoEnergia.src="imagenes/siniestro.png"
            ataque.appendChild($imagenCostoEnergia)
            console.log($imagenCostoEnergia)
        }
        

    });
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
    if (tipo==="Dragon") {
        imagen.src="imagenes/dragon.png"
        //imagen.width="91px"
        //imagen.height="92px"
        tdElementTipo.appendChild(imagen)
        document.querySelectorAll("tr")[1].appendChild(tdElementTipo)
    }
    if (tipo==="Darkness") {
        imagen.src="imagenes/siniestro.png"
        //imagen.width="91px"
        //imagen.height="92px"
        tdElementTipo.appendChild(imagen)
        document.querySelectorAll("tr")[1].appendChild(tdElementTipo)
    }
    
    
    
    
}