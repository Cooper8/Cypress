import { ceil } from "cypress/types/lodash";

describe('Accordian', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/accordian`); 
     });
    it('Accordian validation', () => {
        cy.get('#section2Heading').click();
        //checking if first desc is hidden
        cy.get('#section1Heading').next().should('have.css', "display", "none");
        // checking if the second desc is displayed
        cy.get('#section2Heading').next().should('have.css', "display", "block").and('have.class', "show");
    });
});