Cypress.session.clearAllSavedSessions();

describe('Login preserve', () => {
    beforeEach(() => {
        cy.session('mySession', ()=>{
            cy.visit(`${Cypress.env("demoQA")}/login`); 
        cy.get("#userName").type("test");
        cy.get('#password').type('Test1234*');
        cy.get("#login").click();
        cy.url().should("contain","profile");
        });
     });
    it('Login', () => {
        cy.visit(`${Cypress.env("demoQA")}/login`); 
    });
    it('Login', () => {
        cy.visit(`${Cypress.env("demoQA")}/login`); 
    }); 
});