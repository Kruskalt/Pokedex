const URL = '192.168.0.49:8080'


context("validarPokedex", () => {
  beforeEach(() => {
    cy.visit(URL)
  })

  describe("validacion grafica pokedex", () => {


    it("validar que aparezcan los sprites de los pokemons en pantalla", () => {
      cy.wait(12000)
      cy.get(".row .col").should("have.length",20)

    });
    it("validar que aparezca el modal al hacer click en un pokemon", () => {
      
      cy.wait(1000)
      cy.get(".row .col:first").click()

      cy.get(".modal").should("be.visible")

    });

    it("validar que borre los sprites actuales al cambiar  de pagina", () => {
      
      cy.wait(12000)
      cy.get(".next").click()


      cy.get(".row .col").should("have.length",0)
      

    });
    it("validar que cambie de la primer pagina a la segunda, los sprites", () => {
      
      cy.wait(5000)
      cy.get(".next").click()
      cy.wait(5000)

      let contador=21 //la segunda pagina va desde el pokemon 21 al 40
      let i=0 

      cy.get(".card-title").then((listaPokemons) => {
        const arrayPokemons = Array.from(listaPokemons);
      console.log("lista",arrayPokemons)

      while (i<20) {
        cy.get(arrayPokemons[i]).should("have.text", `#${contador}`)
        
        contador++
        i++
      }
      })
    
    });
    

    it("validar que cambie de numero en el dom que contiene el numero de pagina ", () => {
      
      cy.wait(5000)
      cy.get(".next").click()
      cy.wait(5000)
      
      cy.get("#numero-pagina").should("have.text","2/65")
      

    });

    

   

  })

});