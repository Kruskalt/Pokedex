const modal= document.querySelector("#ventanaModal")
const span= document.querySelector(".close")


span.onclick = function() {
    modal.style.display="none"
}
window.onclick= function (e) {
    if (e.target ===modal) {
        modal.style.display="none"
    }
}

function mostrarCartaPokemon(nombrePokemon) {
    document.querySelector("#imagen-modal").src=""
    document.querySelector("h2").textContent=""
    document.querySelector("#imagen-modal").src="pikachu.gif"
   
    const requestOptions = {
        method: 'GET',
        headers: {
          'X-Api-Key': 'cff89d55-6a4a-49bd-82a4-caf5688ac947',
          'Content-Type': 'application/json'
          
        },
      };
      
      fetch(`https://api.pokemontcg.io/v2/cards?q=name:${nombrePokemon}`,requestOptions)
      .then(respuesta=>respuesta.json().then(data=>{
        console.log(data)
        console.log(data)
        document.querySelector("#nombre-pokemon").textContent=`${nombrePokemon}`.toUpperCase()
        //$("#imagen-modal").attr("src",data.data[1].images.small)    
        //para mostrar cartas relativamente nuevas
        data.data.forEach(cartas => {
            console.log(cartas)
            const fechaEmision= new Date(cartas.set.releaseDate)
            if ( Number(fechaEmision.getFullYear())>2015) {
                document.querySelector("#imagen-modal").src=cartas.images.small
                return
            }
        });  
        // for (let i = 0; i < data.data.length; i++) {
        //     const carta = data.data[i] 
        //     if (carta.name.toLowerCase() ===`${nombrePokemon}-ex`) {
                
        //         imagenModalEx.src=carta.images.small
                
                
        //         break
        //     }
            
        // }
        
        // data.data.forEach(cartas => {
        //     console.log(cartas)
            
        //     if (cartas.name.toLowerCase() ===`${nombrePokemon}-ex`) {
        //         let $imagenpokemonEx= document.createElement("img")
        //         $imagenpokemonEx.src=cartas.images.small
        //         document.querySelector(".modal-content").appendChild($imagenpokemonEx)
                
        //         return
        //     }
        // });
        // const fecha= new Date(data.data[1].set.releaseDate)
        // console.log(fecha.getFullYear())
        // console.log(data.data[1].set.releaseDate)
        // console.log(new Date(data.data[1].set.releaseDate))
       
      }))

      

    modal.style.display="block"

    

}


