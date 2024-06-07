describe('Página de Cadastro', () => {

  // ABRIR A PÁGINA DO CADASTRO
  beforeEach(() => {
    cy.botaoCadastrarUsuario();
  })

  it('Preencher os campos do formulário de cadastro com dados válidos', () => {
    
    //PREENCHENDO FORMULÁRIOS
    cy.get('[data-test="input-name"]').type('Bruno Magalhães');
    cy.get('[data-test="input-email"]').type('bm.goncalves@gmail.com');
    cy.get('[data-test="input-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    
    //CLICANDO NO BOTÃO PRA SALVAR
    cy.get('[data-test="submit-button"]').click();
  })
})
