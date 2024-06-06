describe('Página de Cadastro', () => {
  it('Preencher os campos do formulário de cadastro com dados válidos', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();  
    cy.get('[data-test="input-name"]').type('Bruno Magalhães');
    cy.get('[data-test="input-email"]').type('bm.goncalves@gmail.com');
    cy.get('[data-test="input-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  })
})
