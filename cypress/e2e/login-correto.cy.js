describe ("Página de Login", () => {

    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })

    it("Preenchidos os campos com valores válidos para login", () => {
        cy.login('ana@email.com', 'Senha123');


    })

})