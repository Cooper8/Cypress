describe('basics', () => {
    it('visit', () => {
      cy.visit("/wiki/Talk:Hello");
    });
    it("xPath by class", () => {
        cy.xpath(`//*[@class='mw-ui-button']`).should('contain.value','archives');
            });
            it("xPath by text", () => {
                cy.xpath(`//*[text()='From Wikipedia, the free encyclopedia']`).should('contain.text','free');
                    });
                    it("xPath by class middle and spaces + asserts + click", () => {
                    cy.xpath(`//li[contains(concat(' ', normalize-space(@class), ' '), 'istalk vector-tab-noicon')]`
                    ).should('contain.text', 'Edit').and('have.css', 'display', 'block').click();
                });
                });