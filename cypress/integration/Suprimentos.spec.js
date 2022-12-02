/// <reference types="Cypress" />




describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(() => {
        cy.visit('http://localhost:81/')
        cy.get('#Login').type('cypress')
        cy.get('#Senha').type('n0v3y')
        cy.get('#entrar').click()
        //criar função para acessar os botoes da pagina click
    });
    after(() => {
        //clickar depois de 3 segundos 
        cy.get('.dropdown-toggle').click({delay: 100})
        cy.get('.dropdown-menu > li > a').click()
    });
    
    
    it('Logar E abrir os Suprimentos e digitar valores validos na Funcionalidade Valor do item e deslogar com sucesso', () => {
        cy.get(':nth-child(3) > [href="javascript:void(0)"]').click()
        cy.get(':nth-child(3) > .sub-menu > :nth-child(4) > a > .title').click()
        cy.get('[item-id="819641269"] > :nth-child(2)').click()
        cy.get('#aItensRequisicao').click()
        cy.get('.dataTables_scrollBody').click()
        cy.get('#aValorItem').click() //criar função
        cy.get('#PrecoUnitarioB')
        .clear()
        .type('100')
        .should('have.value', '100')
        cy.get('#PercentualDesconto')
        .click()
        .clear()
        .type('10')
        .should('have.value', '10')
        cy.get('#ValorIPIE')
        .click()
        .clear()
        .type('100')
        cy.get('#btnGravar > .tile-object')
        .click()
        cy.get('.alert')
        .should('be.visible')
        cy.get('.dropdown-toggle').click({delay: 100})
        cy.get('.dropdown-menu > li > a').click()
    });

    //
    it('Deve Logar Entrar Na Funcionalidade Valor do Item e Digitar Valores Negativos e Verificar se salva', () => {
        cy.get(':nth-child(3) > [href="javascript:void(0)"]').click()
        cy.get(':nth-child(3) > .sub-menu > :nth-child(4) > a > .title').click()
        cy.get('[item-id="819641269"] > :nth-child(2)').click()
        cy.get('#aItensRequisicao').click()
        cy.get('.dataTables_scrollBody').click()
        cy.get('#aValorItem').click()
        cy.get('#PrecoUnitarioB')
        .clear()
        .type('-100')
        .should('have.value', '100')
        cy.get('#PercentualDesconto')
        .click()
        .clear()
        .type('-99')
        .should('have.value', '99')
        cy.get('#ValorIPIE')
        .click()
        .clear()
        .type('-70')
        .should('have.value', '70')
        cy.get('#btnGravar > .tile-object')
        .click()
        cy.get('.alert')
        .should('be.visible')
    });

    })