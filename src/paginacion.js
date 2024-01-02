const $pageItems = document.querySelectorAll(".page-item a")
const paginasMaximo = 50
const offsetPagina = 20

let paginaActual = 1;
let paginaAnterior = 0;
let paginaSiguiente = 2;

$pageItems.forEach(elem => {
  $(elem).on("click", function () {
    if (elem.textContent === "Previous") {
      moverseApaginaAnterior();
    }

    if (elem.textContent === "Next") {
      moverseApaginaSiguiente(elem);
    }
    if (elem.textContent === "+5") {
      moverse5paginasAdelante(elem)
    }

    if (elem.textContent === "-5") {
      moverse5paginasAtras(elem)
    }
  })
})

function moverseApaginaSiguiente(elem) {
  const $pokemons = document.querySelectorAll(".col")

  if (paginaSiguiente <= paginasMaximo && paginaSiguiente != undefined && $pokemons.length === 20) {

    paginaActual = paginaActual + 1
    paginaAnterior = paginaActual - 1;
    paginaSiguiente = paginaActual + 1;

    pedirPagina((paginaActual - 1) * offsetPagina);
    document.querySelector("#numero-pagina").textContent = `${paginaActual}/50`
  }

}

function moverseApaginaAnterior() {
  const $pokemons = document.querySelectorAll(".col")
  if (paginaActual != undefined && paginaActual != 1 && $pokemons.length === 20) {
    pedirPagina((paginaAnterior - 1) * offsetPagina);
    let aux = paginaActual;
    paginaActual = paginaAnterior;
    paginaSiguiente = aux;
    paginaAnterior = paginaActual - 1;
    document.querySelector("#numero-pagina").textContent = `${paginaActual}/50`

  }
}
function moverse5paginasAdelante() {

  const $pokemons = document.querySelectorAll(".col")
  if (paginaSiguiente + 5 <= paginasMaximo && paginaSiguiente + 5 != undefined && $pokemons.length === 20) {

    paginaActual = paginaActual + 5
    paginaAnterior = paginaActual - 1;
    paginaSiguiente = paginaActual + 1;

    pedirPagina((paginaActual - 1) * offsetPagina);
    document.querySelector("#numero-pagina").textContent = `${paginaActual}/50`
  }
}


function moverse5paginasAtras() {
  const $pokemons = document.querySelectorAll(".col")
  if (paginaAnterior - 5 > 0  && $pokemons.length === 20) {

    paginaActual = paginaActual - 5
    paginaAnterior = paginaActual - 1;
    paginaSiguiente = paginaActual + 1;

    pedirPagina((paginaActual - 1) * offsetPagina);
    document.querySelector("#numero-pagina").textContent = `${paginaActual}/65`
  }
}


