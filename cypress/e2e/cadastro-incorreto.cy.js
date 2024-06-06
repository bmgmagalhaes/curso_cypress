describe('Página de Cadastro', () => {
  it('Preencher os campos do formulário de cadastro com dados válidos', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="submit-button"]').click();
    // cy.contains("É necessário informar um nome");
    cy.contains("É necessário informar um endereço de email");
    cy.contains("Crie uma senha");
    cy.contains("Repita a senha criada acima");
    
  })
})