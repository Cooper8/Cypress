Cypress.config("defaultCommandTimeout", 16000);
describe('Retry ability', () => {
   /* it('Visit with delay', () => {
        cy.visit('/w/index.php?title=Talk:Hello&action=history');
    });*/
    /*it('Client delay', () => {
        cy.visit('/clientdelay');
        cy.get('#ajaxButton').click();
        cy.get('.bg-success').should('have.text', 'Data calculated on the client side.');
    });*/
    it('Progress bar', () => {
        cy.visit('/progressbar');
        cy.get('#startButton').click();
        cy.get('#progressBar', {timeout: 30000}).should('have.text', '100%');
    });
});