/// <reference types="cypress" />

describe('Página do Perfil', () => {
    
    it('Verificar se o nome do usuário é exibido na página do perfil', () => {

        cy.request({
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/11643cd6-7112-415b-95d2-07904b0d1a1c',
            headers: Cypress.env(),
            method: 'GET'
        }).then ( (res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body.perfil.nome).is.not.empty

        })
        
    });
    
});
