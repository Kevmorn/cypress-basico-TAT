/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(() => {
        cy.visit('/src/index.html')
    });
    
    
    it('verifica o título da aplicação', function() {
        const longText = 'Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, '
        cy.get('#firstName').type('Cristiano')
        cy.get('#lastName').type('Marques')
        cy.get('#email').type('Cristiano.duro97@gmail.com')
        cy.get('#open-text-area').type(longText, {delay: 0})
        cy.get('.button').click()
        cy.get('.success > strong').should('be.visible')
        });
        
        it('Exibe Mensagem de Erro ao submeter o formulario com um email com formatação invalida', () => {
        cy.get('#firstName').type('Cristiano')
        cy.get('#lastName').type('Marques')
        cy.get('#email').type('Cristiano.duro97@gmail,com')
        cy.get('#open-text-area').type('Teste')
        cy.get('.button').click()
        cy.get('.error > strong').should('be.visible')
        });
        
        it('Campo telefone continua quando preenchido com valor não-numérico', function() {
            cy.get('#phone')
            .type('ABCDE')
            .should('have.value', '')
            
        });

        it.only('Exibe mensagem de erro quando o telefone se torna obrigatório mas nã é preenchido antes do envio do formulario', function()  {
            cy.get('#firstName').type('Cristiano')
            cy.get('#lastName').type('Marques')
            cy.get('#email').type('Cristiano.duro97@gmail.com')
            cy.get('#phone-checkbox').click()
            cy.get('#open-text-area').type('Teste')
            cy.get('.button').click()
            cy.get('.error > strong').should('be.visible')
        });
    })
