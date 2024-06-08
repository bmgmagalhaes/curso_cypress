describe('Imagens da Página Incial', () => {

    it('Testandos se imagens dos pets foram carregadas do rodapé da página inicial ', () => {
        
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('.footer__img').should('be.visible');

    });
});