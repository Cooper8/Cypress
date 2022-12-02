describe('Links', () => {
    beforeEach(() => {
       cy.visit(`${Cypress.env("demoQA")}/links`); 
    });
    it('Links - not click on the link', () => {
        cy.get('#simpleLink').should('have.attr', 'href', 'https://demoqa.com');
        cy.get('#simpleLink').should('have.attr', 'target', '_blank'); //attribute blank guarantee the opening of a new tab
     });
     it('Links - remove the target', () => {
        cy.get('#simpleLink').invoke('removeAttr', 'target').click(); //invoke by removing traget attr makes possible to open the link in the same tab
     });
    });
    describe.only('Links with API (spying) requests', () => {
        beforeEach(() => {
           cy.visit(`${Cypress.env("demoQA")}/links`);
           cy.intercept('GET', `${Cypress.env("demoQA")}/created`).as('linkStatus');
        });
        it('Links - remove the target', () => {
            cy.get('a#created').click();
            cy.wait('@linkStatus').then((request) =>{
                cy.log('This is the request intercepted', request);
                expect(request.response.statusCode).to.be.equal(201);
                expect(request.response.statusMessage).to.be.equal("Created");
            });
         });
    });