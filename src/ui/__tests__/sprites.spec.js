import {agregarSpritePokemonAlMain} from "../sprites.js"

test('agrega un sprite pokemon al main', () => {
    document.body.innerHTML = '<div class="row"></div><span class="close ">&times;</span>';
    agregarSpritePokemonAlMain("imagenCharmander", "4", "charmander");
    expect(document.querySelector(".card-img-top").getAttribute("src")).toBe("imagenCharmander")
    expect(document.querySelector(".card-title").textContent).toBe("#4")
  });
