describe('Página de Cadastro', () => {

  // ABRIR A PÁGINA DO CADASTRO
  beforeEach(() => {
    cy.botaoCadastrarUsuario();
  })

  it('Preencher os campos do formulário de cadastro com dados em branco', () => {
    
    //CLICANDO NO BOTÃO DE SALVAR COM OS DADOS EM BRANCO
    cy.get('[data-test="submit-button"]').click();
    
    //MENSAGENS ESPERADAS
    cy.contains("É necessário informar um endereço de email").should('be.visible');
    cy.contains("Crie uma senha").should('be.visible');;
    cy.contains("Repita a senha criada acima").should('be.visible');;
    
  })
})