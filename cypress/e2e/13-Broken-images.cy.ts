let img: HTMLImageElement;
describe('Broken Images', () => {
    beforeEach(() => {
       cy.visit(`${Cypress.env("demoQA")}/broken`); 
    });
    it('Not broken asssertion', () => {
        cy.get('div > img[src="/images/Toolsqa.jpg"]').should('be.visible').and(($img) => {
            img = $img[0] as unknown as HTMLImageElement;
            expect(img.naturalWidth).to.be.greaterThan(0);
        });
     });
     it('Broken image asssertion', () => {
        cy.get('div > img[src="/images/Toolsqa_1.jpg"]').should('be.visible').and(($img) => {
            img = $img[0] as unknown as HTMLImageElement;
            expect(img.naturalWidth).to.be.greaterThan(0);
     });
    });
});