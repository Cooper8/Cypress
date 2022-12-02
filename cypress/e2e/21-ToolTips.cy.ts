describe('Tool Tips', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/tool-tips`); 
     });
    it('Tooltips', () => {
        cy.get('#toolTipButton').realHover();
        //cy.get(`div[role = "tooltip]`);
        cy.get(".tooltip-inner").should("have.text", "You hovered over the Button");
    });
    it.only('A tag tool tip', () =>{
        cy.contains("a", "Contrary").realHover();
        cy.get(".tooltip-inner").should("have.text", "You hovered over the Contrary");
    });
});