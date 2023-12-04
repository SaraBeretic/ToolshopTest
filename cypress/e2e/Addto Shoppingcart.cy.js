describe ('Shopping cart functionality', () => {
    it ('Add to cart test', () => {
        cy.visit('https://practicesoftwaretesting.com/#/')
        
        cy.get('.navbar-toggler-icon').click({force: true})
        cy.get(".nav-link[data-test='nav-sign-in']").click()

        cy.get(".dropdown-item[data-test='nav-hand-tools']").click({force:true})
        cy.get('body > app-root:nth-child(1) > div:nth-child(2) > app-category:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > a:nth-child(1) > div:nth-child(2) > h5:nth-child(1').click()

        cy.get("h1[data-test='product-name']").should('have.text', 'Claw Hammer with Shock Reduction Grip');
        cy.get(".fa.fa-plus").click()
        cy.get("#btn-add-to-cart").click()
        cy.get("a[class='nav-link'] i[class='fa fa-shopping-cart px-1']").click()
        cy.get("aw-wizard-step[steptitle='Cart'] button[type='button']").click()
       


        

        


      



        
    })

})
