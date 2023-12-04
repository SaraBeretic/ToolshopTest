describe ('Registration, shopping cart and checkout', () => {
    it ('Checkout flow', () => {
        cy.visit('https://practicesoftwaretesting.com/#/')

        //Registration
        cy.get('.navbar-toggler-icon').click({force: true})
        cy.get(".nav-link[data-test='nav-sign-in']").click()
        cy.get("a[data-test='register-link']").click()
        cy.get("#first_name").type('abc')
        cy.get("#last_name").type('def')
        cy.get("#dob").type('2000-12-12')
        cy.get("#address").type('address')
        cy.get("#postcode").type('78910')
        cy.get("#city").type('city')
        cy.get("#state").type('state')
        cy.get("#country").select('CO')
        cy.get("#phone").type('12345')

        const randomEmail = `testuser${Math.floor(Math.random() * 100000)}@example.com`;

        cy.get("#email").type(randomEmail)
        cy.get("#password").type('demo123')
        cy.get("button[type='submit']").click()


        // wait for the registration response (has to be equal 201)
        cy.intercept('POST', 'https://api.practicesoftwaretesting.com/users/register', (req) => {
            req.alias = 'postRegistration'
          })
        
        cy.wait('@postRegistration').its('response.statusCode').should('eq', 201)
          
        cy.wait(2000)
        // Login
        cy.get("#email").type(randomEmail)
        cy.get("#password").type("demo123")
        cy.get(".btnSubmit").click()
        

        cy.intercept('POST', 'https://api.practicesoftwaretesting.com/users/login', (req) => {
            req.alias = 'postLogin'
          })
        
        cy.wait('@postLogin').its('response.statusCode').should('eq', 200)
          
        cy.wait(2000)



        // Add item to the cart
        cy.get(".dropdown-item[data-test='nav-hand-tools']").click({force:true})
        cy.get('body > app-root:nth-child(1) > div:nth-child(2) > app-category:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > a:nth-child(1) > div:nth-child(2) > h5:nth-child(1').click()

        cy.get("h1[data-test='product-name']").should('have.text', 'Claw Hammer with Shock Reduction Grip');
        cy.get("#btn-increase-quantity").click()
        cy.get("#btn-add-to-cart").click()
        cy.get("a[class='nav-link'] i[class='fa fa-shopping-cart px-1']").click()
        cy.get("aw-wizard-step[steptitle='Cart'] button[type='button']").click()
        cy.get("[data-test='proceed-2']").click()
        // billing addres page
        cy.get("#address").type("aaaaaa")
        cy.get("#city").type("bbbbb")
        cy.get("#state").type("cccccc")
        cy.get("#country").type("dddddd")
        cy.get("#postcode").type("11111")
        cy.get("aw-wizard-step[steptitle='Address'] button[type='button']").click()
        //payment page
        cy.get("aw-wizard-completion-step[steptitle='Payment'] h3").should('have.text', "Payment");
        cy.get("#payment-method").select('1: Bank Transfer', {force:true})
        cy.get("#account-name").type("abcdef", {force:true})
        cy.get("#account-number").type("1234567", {force:true})
        cy.get("aw-wizard-completion-step[steptitle='Payment'] div[class='float-end']").click({force:true})

        



        
    })

})
