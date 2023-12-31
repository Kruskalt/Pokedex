const URL = '192.168.0.251:8080'


context("validarPokedex", () => {
  beforeEach(() => {
    cy.visit(URL)
  })

  describe("validacion grafica pokedex", () => {


    it("validar que aparezcan los sprites de los pokemons en pantalla", () => {
      cy.wait(20000)
      cy.get(".row .col").should("have.length",20)

    });
    it("validar que aparezca el modal al hacer click en un pokemon", () => {
      cy.wait(10000)
      console.log(cy.get(".row .col"))

    });
    // it("se asegura que aparecen los botones resetear y calcular", () => {

    //   cy.get("#cantFamiliares").type("4")
    //   cy.get("#enviarCantidad").click()
    //   cy.get("#calcular").should("be.visible")
    //   cy.get("#reset").should("be.visible")

    // })

    // it("se asegura que al apretar el boton resetear desaparezcan los inputs de cada integrante familiar", () => {

    //   cy.get("#cantFamiliares").type("4")
    //   cy.get("#enviarCantidad").click()
    //   cy.get("#reset").click()
    //   cy.get('.col').should("have.length", 0)

    // })


    // it("se asegura que desaparece el form al calcular los promedios de edad, el mas grande y el mas chico de los familiares", () => {

    //   cy.get("#cantFamiliares").type("2")
    //   cy.get("#enviarCantidad").click()
      
      
    //   cy.get(".row .form-control").each(($li, index, $lis) => {
    //     cy.wrap($li).type("3")
    //   })
     
    //   cy.get("#calcular").click()
    //   cy.get("form").should("not.be.visible")
      

    // })
    
    // it("se asegura que aparecen los promedio en la pantalla al calcular correctamente", () => {

    //   cy.get("#cantFamiliares").type("2")
    //   cy.get("#enviarCantidad").click()
      
    //   let contador=0
      
    //   cy.get(".row .form-control").each(($li, index, $lis) => {
    //     if (contador===0) {
    //       cy.wrap($li).type("3")
    //     }else{
    //       cy.wrap($li).type("5")
    //     }
    //     contador++      
    //   })
     
    //   cy.get("#calcular").click()
    //   cy.get("form").should("not.be.visible")
      
    //   cy.get("#edadPromedio").should("have.text","Edad promedio 4")
    //   cy.get("#masChico").should("have.text","El mas joven tiene 3")
    //   cy.get("#masGrande").should("have.text","El mas viejo tiene 5")

    // })
    
   

  })



  // describe("el usuario no ingreso valores correctos", () => {

  //   it("se asegura que no aparezcan inputs en caso de que el usuario no tipee y salte un mensaje de error", () => {

  //     cy.get("#cantFamiliares").type("{alt}")
      
  //     cy.get("#enviarCantidad").click()
      
  //     cy.get('.col').should("have.length", 0)

  //     cy.get("#errores li").should("have.text","Te falta ingresar la cantidad de familiares")
  //   })

  //   it("se asegura  que el usuario tipee un cero y salte un mensaje de error para que ingrese al menos un familiar", () => {

  //     cy.get("#cantFamiliares").type("0")
      
  //     cy.get("#enviarCantidad").click()

  //     cy.get("#errores li").should("have.text","Tenes que ingresar al menos un familiar")
  //   })
    
  //   it("se asegura que el usuario rellene todos los inputs al querer calcular o salte un mensaje de error por cada input no rellenado", () => {

  //     cy.get("#cantFamiliares").type("2")
      
  //     cy.get("#enviarCantidad").click()

  //     cy.get("#calcular").click()

  //     cy.get("#errores li").should("have.length",2)
  //   })


  //   it("se asegura  que el usuario tipee letras y salte un mensaje de error indicando que solo se aceptan numeros enteros", () => {

  //     cy.get("#cantFamiliares").type("1")
      
  //     cy.get("#enviarCantidad").click()

      
  //     cy.get('.row .col').type("auto")

  //     cy.get("#calcular").click()

  //     cy.get("#errores li").should("have.text","El formato solo acepta numeros y que sean enteros")
  //   })

  // })
});