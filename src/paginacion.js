const $pageItems= document.querySelectorAll(".page-item a")

$pageItems.forEach(elem=>{
  $(elem).on("click",function () {
    if (elem.textContent==="Previous" && paginaActual!=undefined && paginaActual!=1) {
      moverseApaginaAnterior();
    }

    if (elem.textContent==="Next") {
      moverseApaginaSiguiente(elem);
    }   
  })
})

function moverseApaginaSiguiente(elem) {
  
  
  paginaActual = paginaActual+1
  paginaAnterior = paginaActual-1;
  paginaSiguiente = paginaActual + 1;
  console.log(paginaActual);
  console.log(paginaAnterior);
  console.log(paginaSiguiente);
  pedirPagina((paginaActual - 1) * offsetPagina);
  document.querySelector("#numero-pagina").textContent=`${paginaActual}/65`
}

function moverseApaginaAnterior() {
  pedirPagina((paginaAnterior - 1) * offsetPagina);
  let aux = paginaActual;
  paginaActual = paginaAnterior;
  paginaSiguiente = aux;
  paginaAnterior = paginaActual - 1;
  document.querySelector("#numero-pagina").textContent=`${paginaActual}/65`
  console.log(paginaActual);
  console.log(paginaAnterior);
  console.log(paginaSiguiente);
}