/// <reference types="cypress" />

import {usuarios} from '../fixtures/usuarios.json'


describe('Página de Cadastro', () => {
    
    // ABRIR A PÁGINA DO CADASTRO
    beforeEach(() => {
        cy.botaoCadastrarUsuario();
    })


    usuarios.forEach(usuario => {

        it('Preencher os campos do formulário de cadastro com dados válidos', () => {
        
            //PREENCHENDO FORMULÁRIOS
            cy.get('[data-test="input-name"]').clear().type(usuario.name);
            cy.get('[data-test="input-email"]').clear().type(usuario.email);
            cy.get('[data-test="input-password"]').clear().type(usuario.password);
            cy.get('[data-test="input-confirm-password"]').clear().type(usuario.password);
            
            //CLICANDO NO BOTÃO PRA SALVAR
            cy.get('[data-test="submit-button"]').click();
          })

    })


});
