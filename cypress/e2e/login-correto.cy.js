describe ("Página de Login", () => {

    beforeEach(() => {
        cy.linkFazerLogin();
    })

    it("Preenchidos os campos com valores válidos para login", () => {
        cy.login('ana@email.com', 'Senha123');

    })

})