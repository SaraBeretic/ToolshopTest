describe ('Registration functionality', () => {
  it ('Register new user', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      cy.get('#loginPanel > :nth-child(3) > a').click()
      cy.get(".input[id='customer.firstName']").type('abc')
      cy.get(".input[id='customer.lastName']").type('xyz')
      cy.get(".input[id='customer.address.street']").type('address')
      cy.get(".input[id='customer.address.city']").type('city')
      cy.get(".input[id='customer.address.state']").type('state')
      cy.get(".input[id='customer.address.zipCode']").type('123456')
      cy.get(".input[id='customer.phoneNumber']").type('78910')
      cy.get(".input[id='customer.ssn']").type('12345678910')
      cy.get(".input[id='customer.username']").type('test')
      cy.get(".input[id='customer.password']").type('test123*')
      cy.get(".input[name='repeatedPassword']").type('test123*')
      cy.get(".input[id='customer.password']").type('test123*')
      cy.get(".button[value=Register]").click()

      
    








    })

})
