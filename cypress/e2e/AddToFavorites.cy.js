describe ('Favorites functionality', () => {
    it ('Add to favorites', () => {
        cy.visit('https://practicesoftwaretesting.com/#/')
        
        cy.get("a:nth-child(1) div:nth-child(3)").click()
        cy.get("#btn-add-to-favorites").click()


        

        


      



        
    })

})
