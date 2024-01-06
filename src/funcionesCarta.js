export function elegirUnaCarta(listaCartas){
     for (let i = 0; i < listaCartas.length; i++) {

                const carta = listaCartas[i]
                const fechaEmision = new Date(carta.set.releaseDate)

                if (Number(fechaEmision.getFullYear()) > 2015) {
                    console.log(carta)

                    return carta
                    
                    break
                }

            }
    return listaCartas[0]
}


 