describe('exel', () => {
    it('read data from exel', () => {
        cy.parseXlsx("cypress/fixtures/Leave_Form.xlsx").then((jsonData) =>{
            cy.log(jsonData);
        })
    });
});