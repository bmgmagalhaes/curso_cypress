/// <reference types="cypress" />

describe("Página de Login", () => {

    beforeEach(() => {
        cy.linkFazerLogin();
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login' , 
            {statusCode:400}).as('stubPost')
    
    });

    it('Falha no login do sistema por preenchimento com valores inválidos', () => {

        // PREENCHIMENTO DO FORMULÁRIO
        cy.login('anaemail.com', 'senha');
        
        //RESPOSTAS ESPERADAS
        cy.contains("Por favor, verifique o email digitado").should('be.visible');
        cy.contains("A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres").should('be.visible');

    });

    it('Falha no login do sistema por preenchimento com valores VÁLIDOS', () => {

        // PREENCHIMENTO DO FORMULÁRIO
        cy.login('asdqweasd@gmail.com', 'Senha1234');
        
        //AGUARDANDO RESPOSTA DO SERVIDOR ANTES DE VERIFICAR MENSAGEM
        cy.wait('@stubPost')

        //RESPOSTAS ESPERADAS
        cy.contains("Falha no login. Consulte suas credenciais.").should('be.visible');

    });
    

})