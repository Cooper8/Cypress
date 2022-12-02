describe('Date Picker', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/date-picker`); 
     });
    it('Date Picker', () => {
        cy.get('input#datePickerMonthYearInput').click();
        cy.get('select.react-datepicker__month-select').select("0");
        cy.get('select.react-datepicker__year-select').select("1987");
        cy.findByText("13").click();
        cy.get('input#datePickerMonthYearInput').should('have.value', '01/13/1987');
    });
});