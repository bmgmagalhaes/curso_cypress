describe ("Página de Login", () => {

    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })

    it("Preenchidos os campos com valores válidos para login", () => {
        cy.get('[data-test="input-loginEmail"]').type("ana@email.com");
        cy.get('[data-test="input-loginPassword"]').type("Senha123");
        cy.get('[data-test="submit-button"]').click();


    })

})