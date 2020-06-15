/// <reference types="cypress"/>

const URL = "http://192.168.0.8:8080/"

context("Calendario semanal", () => {
    before(() => {
        cy.visit(URL)
    })

    describe("Verifica que componentes al cargar la pagina sean renderizados", () => {
        it("Titulo", () => {
            cy.get('#titulo').should("contain.text", "Calendario")
        })
        it("Boton crear evento", () => {
            cy.get('#crear-evento').should("exist")
        })
        it("Headers", () => {
            cy.get(".th-semanas").should("have.length", 8)
        })
        it("Horas por dia", () => {
            cy.get(".cuadro-Domingo").should("have.length", 24)
        })
        it("td's", () => {
            cy.get("td").should("have.length", 192)
        })

    })

    describe("Testea funcionamiento de crear evento", () => {
        it("Crea evento test1 y comprueba que existe", () => {
            cy.get("#crear-evento").as("Boton crear evento").click()
            cy.get('.modal-title').should("contain.text", "Crear evento")
            cy.get('#crear-evento-titulo').as("input nombre evento").type("test1")
            cy.get('#crear-evento-descripcion').as("input descripcion evento").type("descripcion test1")
            cy.get('#crear-evento-comienza-fecha').as("input comienza evento").type("17/06/2020")
            cy.get('#crear-evento-comienza-hora').as("input comienza hora").type("04:00")
            cy.get('#crear-evento-termina-fecha').as("input termina evento").type("17/06/2020")
            cy.get('#crear-evento-termina-hora').as("input termina hora").type("12:00")
            cy.get("#crear-evento-color").invoke("val", "#470EE5")
            cy.get("input[data-usuario='11']").as("checkbox usuario 11").check()
            cy.get("input[data-usuario='13']").as("checkbox usuario 13").check()
            cy.get("#crear").as("boton crear").click()

            cy.get("[data-id='1']").as("evento 1").should("have.length", 9)
            cy.get(".cuadro-evento-titulo[data-id='1']").as("cuadro 1 de evento 1").should("contain.text", "test1")
            cy.get("[data-id='1']").first().should("have.css", 'background-color', "rgb(71, 14, 229)")
        })
        it("Crea evento test2 superponiendose con test 1", () => {
            cy.get("#crear-evento").as("Boton crear evento").click()
            cy.get('#crear-evento-titulo').as("input nombre evento").type("test2")
            cy.get('#crear-evento-descripcion').as("input descripcion evento").type("descripcion test2")
            cy.get('#crear-evento-comienza-fecha').as("input comienza evento").type("17/06/2020")
            cy.get('#crear-evento-comienza-hora').as("input comienza hora").type("02:00")
            cy.get('#crear-evento-termina-fecha').as("input termina evento").type("17/06/2020")
            cy.get('#crear-evento-termina-hora').as("input termina hora").type("17:00")
            cy.get("#crear-evento-color").invoke("val", "#FF6347")
            cy.get("input[data-usuario='11']").as("checkbox usuario 11").check()
            cy.get("input[data-usuario='13']").as("checkbox usuario 13").check()
            cy.get("#crear").as("boton crear").click()

            cy.get("[data-id='2']").as("evento 2").should("have.length", 16)
            cy.get(".cuadro-evento-titulo[data-id='2']").as("cuadro 1 de evento 2").should("contain.text", "test2")
            cy.get("[data-id='2']").first().should("have.css", 'background-color', "rgb(255, 99, 71)")
        })
        it("Crea evento test3, comenzando un dia y terminando al siguiente", () => {
            cy.get("#crear-evento").as("Boton crear evento").click()
            cy.get('#crear-evento-titulo').as("input nombre evento").type("Test3")
            cy.get('#crear-evento-descripcion').as("input descripcion evento").type("descripcion test3")
            cy.get('#crear-evento-comienza-fecha').as("input comienza evento").type("14/06/2020")
            cy.get('#crear-evento-comienza-hora').as("input comienza hora").type("20:00")
            cy.get('#crear-evento-termina-fecha').as("input termina evento").type("15/06/2020")
            cy.get('#crear-evento-termina-hora').as("input termina hora").type("03:00")
            cy.get("#crear-evento-color").invoke("val", "#9AEC2F")
            cy.get("input[data-usuario='11']").as("checkbox usuario 11").check()
            cy.get("input[data-usuario='13']").as("checkbox usuario 13").check()
            cy.get("#crear").as("boton crear").click()

            cy.get("[data-id='3']").as("evento 3").should("have.length", 8)
            cy.get(".cuadro-evento-titulo[data-id='3']").as("cuadro 1 de evento 3").should("contain.text", "Test3")
            cy.get("[data-id='3']").first().should("have.css", 'background-color', "rgb(154, 236, 47)")
        })

    })
    describe("Verifica contenido de evento al clickear sobre celda con evento", () => {
        it("Clickea sobre cuadro con titulo", () => {
            cy.get(".cuadro-evento-titulo[data-id='1']").as("cuadro 1 de evento 1").click()
            cy.get("#mostrar-comienza").as("fecha que comienza el evento").should("contain.text", "Comienza: 17/06/2020 04:00")
            cy.get("#mostrar-termina").as("fecha que termina el evento").should("contain.text", "Termina: 17/06/2020 12:00")
            cy.get("#mostrar-titulo").as("titulo de evento").should("contain.text", "Nombre del evento: test1")
            // Clickea antes que el eventlistener se aplique
            cy.wait(500)
            cy.get("#boton-cerrar").click()
        })
        it("Clickea sobre cuadro sin titulo", () => {
            cy.get(".cuadro-evento[data-id='1']").eq(3).as("cuadro 3 de evento 1").click()
            cy.get("#mostrar-comienza").as("fecha que comienza el evento").should("contain.text", "Comienza: 17/06/2020 04:00")
            cy.get("#mostrar-termina").as("fecha que termina el evento").should("contain.text", "Termina: 17/06/2020 12:00")
            cy.get("#mostrar-titulo").as("titulo de evento").should("contain.text", "Nombre del evento: test1")
            cy.wait(500)
            cy.get("#boton-cerrar").click()
        })
        describe("Selecciona evento 2 y lo modifica", () => {
            it("Verifica que data ingresada anteriormente este en los inputs", () => {
                cy.get(".cuadro-evento-titulo[data-id='2']").as("cuadro 1 de evento 2").click()
                cy.wait(500)
                cy.get("#boton-modificar").click()

                cy.get("#crear-evento-titulo").as("titulo-evento").should("have.value", "test2")
                cy.get("#crear-evento-comienza-fecha").as("fecha de comienzo").should("have.value", "17/06/2020")
                cy.get("#crear-evento-comienza-hora").as("hora de comienzo").should("have.value", "02:00")
                cy.get("#crear-evento-termina-fecha").as("fecha que termina").should("have.value", "17/06/2020")
                cy.get("#crear-evento-termina-hora").as("hora que termina").should("have.value", "17:00")
                cy.get("#crear-evento-color").as("color de evento").should("have.value", "#ff6347")
                cy.get("#modificar-siguiente").should("exist")
            })
            it("Cambia los valores y verifica que sea correcto", () => {
                cy.get("#crear-evento-titulo").as("titulo-evento").clear().type("test2 modificado")
                cy.get("#crear-evento-comienza-fecha").as("fecha de comienzo").clear().type("18/06/2020")
                cy.get("#crear-evento-comienza-hora").as("hora de comienzo").clear().type("04:00")
                cy.get("#crear-evento-termina-fecha").as("fecha que termina").clear().type("19/06/2020")
                cy.get("#crear-evento-termina-hora").as("hora que termina").clear().type("12:00")
                cy.get("#crear-evento-color").as("color de evento").invoke("val", "#EC2FE6")
                cy.get("input[data-usuario='11']").as("checkbox usuario 11").check()
                cy.get("input[data-usuario='13']").as("checkbox usuario 13").check()
                cy.get("input[data-usuario='15']").as("checkbox usuario 15").check()
                cy.wait(2000)
                cy.get("#modificar-siguiente").click()

                cy.get("[data-id='2']").as("nodelist con cuadros de evento 2").should("have.length", 33)
                cy.get(".cuadro-evento-titulo[data-id='2']").as("cuadro 1 de evento 2").should("contain.text", "test2")
                cy.get(".cuadro-evento-titulo[data-id='2']").as("cuadro 1 de evento 2").click()
                cy.get("#mostrar-comienza").as("fecha que comienza el evento").should("contain.text", "Comienza: 18/06/2020 04:00")
                cy.get("#mostrar-termina").as("fecha que termina el evento").should("contain.text", "Termina: 19/06/2020 12:00")
                cy.get("#mostrar-titulo").as("titulo de evento").should("contain.text", "Nombre del evento: test2 modificado")
                cy.get("[data-id-usuario='11']").as("invitado con id 11").should("exist")
                cy.get("[data-id-usuario='13']").as("invitado con id 13").should("exist")
                cy.get("[data-id-usuario='15']").as("invitado con id 15").should("exist")
                cy.wait(1000)
                cy.get("#boton-cerrar").click()
            })
        })
       
    })
    describe("Prueba funcionalidad de eliminar evento", () => {
        it("elimina evento 1", () => {
            cy.get("[data-id='1']").first().as("primer elemento con id 1").click()
            //espera que se renderize el eventlistener de eliminar
            cy.wait(500)
            cy.get("#boton-eliminar").click()
            cy.wait(1000)
            cy.get("[data-id='1']").as("elementos con id 1").should("have.length", 0)
        })
    })
})