describe('basics', () => {
    it('visit', () => {
      cy.visit("/wiki/Talk:Hello");
    });
    it("Contains", () => {
    cy.contains("Search archives").should("have.value", "Search archives");
        });
    it("get+find by class", () => {
        cy.get ("div").find("input.mw-ui-button").should("have.value", "Search archives");
        });
});