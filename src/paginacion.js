const $pageItems= document.querySelectorAll(".page-item a")
const paginasMaximo=65
const offsetPagina=20

let paginaActual=1;
let paginaAnterior=0;
let paginaSiguiente=2;

$pageItems.forEach(elem=>{
  $(elem).on("click",function () {
    if (elem.textContent==="Previous" ) {
      moverseApaginaAnterior();
    }

    if (elem.textContent==="Next") {
      moverseApaginaSiguiente(elem);
    }   
  })
})

function moverseApaginaSiguiente(elem) {
  const $pokemons=document.querySelectorAll(".col") 
  
  if (paginaSiguiente<=paginasMaximo && paginaSiguiente!=undefined && $pokemons.length===20) {
    
  paginaActual = paginaActual+1
  paginaAnterior = paginaActual-1;
  paginaSiguiente = paginaActual + 1;
  console.log(paginaActual);
  console.log(paginaAnterior);
  console.log(paginaSiguiente);
  pedirPagina((paginaActual - 1) * offsetPagina);
  document.querySelector("#numero-pagina").textContent=`${paginaActual}/65`
  }
 
}

function moverseApaginaAnterior() {
  const $pokemons=document.querySelectorAll(".col")
  if ( paginaActual!=undefined && paginaActual!=1 && $pokemons.length===20)  {
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
  
}