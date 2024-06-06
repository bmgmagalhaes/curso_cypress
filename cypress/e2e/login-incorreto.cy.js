/// <reference types="cypress" />

describe("Página de Login", () => {

    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    
    });

    it('Falha no login do sistema por preenchimento com valores inválidos', () => {

        // PREENCHIMENTO DO FORMULÁRIO
        cy.get('[data-test="input-loginEmail"]').type("anaemail.com");
        cy.get('[data-test="input-loginPassword"]').type("senha");
        cy.get('[data-test="submit-button"]').click();

        //RESPOSTAS ESPERADAS
        cy.contains("Por favor, verifique o email digitado").should('be.visible');
        cy.contains("A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres").should('be.visible');

    });

})