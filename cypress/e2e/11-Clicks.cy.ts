describe('Clicks', () => {
    beforeEach(() => {
       cy.visit(`${Cypress.env("demoQA")}/buttons`); 
    });
    it('Double click', () => {
        cy.get('#doubleClickBtn').dblclick();
        cy.get('#doubleClickMessage').should('contain', 'You have done a double click');
     });
     it('Right click', () => {
        cy.get('#rightClickBtn').rightclick();
        cy.get('#rightClickMessage').should('contain', 'You have done a right click');
     });
});