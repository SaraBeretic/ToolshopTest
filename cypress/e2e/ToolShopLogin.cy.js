describe ('Login functionality', () => {
    it ('LoginTest', () => {
        cy.visit('https://practicesoftwaretesting.com/#/')
        
        cy.get('.navbar-toggler-icon').click({force: true})
        cy.get(".nav-link[data-test='nav-sign-in']").click()

        cy.get("button[class='google-sign-in-button']").click()
        cy.get("#identifierId").click()
        

        


      



        
    })

})
