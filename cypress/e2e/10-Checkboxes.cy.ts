describe('Demo qa', () => {
    beforeEach(() => {
       cy.visit(`${Cypress.env("demoQA")}/checkbox`); 
    });
    it('Checkbox scenario', () => {
        cy.get('input[type="checkbox"]').click({force: true});
        cy.get('#result').should("have.text", 'You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile');
    });
});
describe('Internet app', () => {
    beforeEach(() => {
       cy.visit(`${Cypress.env("theInternetApp")}/checkboxes`); 
    });
    it('Checkbox scenario', () => {
        cy.get('form#checkboxes input').eq(0).click().should('be.checked');
    });
    });
