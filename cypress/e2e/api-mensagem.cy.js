/// <reference types="cypress" />

describe('Api Adopet', () => {
    
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTY0M2NkNi03MTEyLTQxNWItOTVkMi0wNzkwNGIwZDFhMWMiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTcxNzg2NTE5MCwiZXhwIjoxNzE4MTI0MzkwfQ.OXd69Iq_RkU_ISPf6BOQvQNl3JPkYDJTpq7AJYw3t0o`

    it('Mensagens da API', () => {
        cy.request({
            headers: {authorization},
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c'
        }).then( (res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')

        })
    });
});


