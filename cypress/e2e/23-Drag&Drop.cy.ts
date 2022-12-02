describe('Drag and Drop', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/droppable`); 
     });
    it('Drag', () => {
        cy.get('#draggable').drag('#droppable', {force: true});
    });
});