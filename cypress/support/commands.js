Cypress.Commands.add('filMandatoryFieldsAndSubmit',function(){
    cy.get('#firstName').type('Cristiano')
    cy.get('#lastName').type('Marques')
    cy.get('#email').type('Cristiano.duro97@gmail.com')
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})

Cypress.Commands.add('autoLogin', function(){
    cy.get('#Login').type('cypress')
    cy.get('#Senha').type('n0v3y')
    cy.get('#entrar').click()
})