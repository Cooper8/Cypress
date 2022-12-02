describe('basics', () => {
    it('visit', () => {
      cy.visit("/wiki/Gmail");
    });
    it("subject", () => {
        cy.url().then((url) =>{
            cy.log(`Printing the URL: ${url}`);
        });
      });
      it("input", () => {
        cy.get('input#searchInput').type('Hello');
        cy.get("input#searchButton").click();
        cy.get(".mw-page-title-main").should('have.text','Hello');
      })
});