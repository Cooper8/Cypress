describe('Environment Variable', () => {
    it('', () => {
       cy.log(`Printing env variable: ${Cypress.env("demoVar")}`); 
    });
});