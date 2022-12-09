/// <reference types="Cypress" />



describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(() => {
        cy.visit('/src/index.html')
    });
    
    
    it('Preencher enviar e verificar se está aparecendo mensagem', function() {
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

        it('Exibe mensagem de erro quando o telefone se torna obrigatório mas nã é preenchido antes do envio do formulario', function()  {
            cy.get('#firstName').type('Cristiano')
            cy.get('#lastName').type('Marques')
            cy.get('#email').type('Cristiano.duro97@gmail.com')
            cy.get('#phone-checkbox').click()
            cy.get('#open-text-area').type('Teste')
            cy.get('.button').click()
            cy.get('.error > strong').should('be.visible')
        });
        it('Preenche e limpa os campos nome, sobrenome, emmail. e telefone', function()  {
            cy.get('#firstName')
            .type('Cristiano')
            .should('have.value', 'Cristiano')
            .clear()
            .should('have.value', '')
            cy.get('#lastName')
            .type('Marques')
            .should('have.value', 'Marques')
            .clear()
            .should('have.value', '')
            cy.get('#email')
            .type('Cristiano.duro97@gmail.com')
            .should('have.value', 'Cristiano.duro97@gmail.com')
            .clear()
            .should('have.value', '')
            cy.get('#open-text-area')
            .type('Teste')
            .should('have.value', 'Teste')
            .clear()
            .should('have.value', '')
        });
        it('Envia o Relatorio com sucesso  usando comando costumizado', function() {
            cy.filMandatoryFieldsAndSubmit()
            cy.get('.success > strong')
            .should('be.visible')
        });

        it('Selecione um produto (youtube) por seu texto',  function() {
            cy.get('#product').select('YouTube')
            .should('have.value', 'YouTube')
        });
        it('seleciona um produto (Mentoria) por seu valor (value)', function() {
            cy.get('#product')
            .select('mentoria')
            .should('have.value', 'mentoria')
        });

        it('Seleciona um produto (Blog) por seu índice', function() {
            cy.get('#product')
            .select(1)
            .should('have.value', 'blog')
        });

        it('marca o tipo de atendimento "Feedback" ',  function() {
            cy.get('input[type="radio"][value="feedback"]')
            .check()
            .should('have.value', 'feedback')
        });
        it('Marca cada tipo de atendimento', function() {
            cy.get('input[type="radio"]')
            .should('have.length', 3)
            .each(function($radio){
                cy.wrap($radio).check()
                cy.wrap($radio).should('be.checked')
            }) 

            it.only('Marca ambos checkboxes, depois desmarca o último', function() {
                cy.get('input[types="checkbox"]')
                .check()
                .last()
                .uncheck()
                .should('not.be.checked')
            });
        });
});
