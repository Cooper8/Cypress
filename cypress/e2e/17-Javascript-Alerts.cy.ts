describe('Demo qa', () => {
    beforeEach(() => {
       cy.visit(`${Cypress.env("theInternetApp")}/javascript_alerts`); 
    });
    it('Alert', () => {
        cy.contains("button", "Click for JS Alert").click();
        cy.on("window:alert", (message) => {
            expect(message).to.be.equal("I am a JS Alert");
        });
        cy.on('window:confirm', ()=> true);
        cy.get('#result').should('contain', 'You successfully clicked an alert');
        /*cy.xpath('//button[@onclick="jsAlert()"]').click();
        cy.get('#result').should('contain', 'You successfully clicked an alert').and('have.css', 'color', 'rgb(0, 128, 0)');*/
});
it('Confirm (accept)', () => {
    cy.contains("button", "Click for JS Confirm").click();
        cy.on("window:confirm", (message) => {
            expect(message).to.be.equal("I am a JS Confirm");
        });
        cy.on('window:confirm', ()=> true);
        cy.get('#result').should('contain', 'You clicked: Ok');
    /*cy.xpath('//button[@onclick="jsConfirm()"]').click();
    cy.get('#result').should('contain', 'You clicked').and('have.css', 'color', 'rgb(0, 128, 0)');*/
});
it('Confirm (cancel)', () => {
    cy.contains("button", "Click for JS Confirm").click();
        cy.on("window:confirm", (message) => {
            expect(message).to.be.equal("I am a JS Confirm");
        });
        cy.on('window:confirm', ()=> false);
        cy.get('#result').should('contain', 'You clicked: Cancel');
    /*cy.xpath('//button[@onclick="jsConfirm()"]').click();
    cy.get('#result').should('contain', 'You clicked').and('have.css', 'color', 'rgb(0, 128, 0)');*/
});
let input = 'Text that i input';
it('Prompt', () => {
    cy.window().then(function(p){
        cy.stub(p, "prompt").returns(input);
    cy.xpath('//button[@onclick="jsPrompt()"]').click();
    cy.get('#result').should('contain', 'You entered: Text').and('have.css', 'color', 'rgb(0, 128, 0)');
});
});
});