/// <reference types="cypress" />

describe('Página do Perfil', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTY0M2NkNi03MTEyLTQxNWItOTVkMi0wNzkwNGIwZDFhMWMiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTcxNzg2OTIzMSwiZXhwIjoxNzE4MTI4NDMxfQ._mSV2EzpqZ0hnrc-M3c5jIE8RANUd2nUrpzIIEXFfq4`
    
    it('Verificar se o nome do usuário é exibido na página do perfil', () => {

        cy.request({
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/11643cd6-7112-415b-95d2-07904b0d1a1c',
            headers: {authorization},
            method: 'GET'
        }).then ( (res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body.perfil.nome).is.not.empty

        })
        
    });
    
});
