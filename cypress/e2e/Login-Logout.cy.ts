describe('Demo qa', () => {
    beforeEach(() => {
       cy.visit(`${Cypress.env("theInternetApp")}/login`); 
    });
    let userCorrect = 'tomsmith';
    let user = 'kostya';
        let pass = 'naugad';
        let passCorrect = 'SuperSecretPassword!';
    /*it('Diff staff', () => {
        cy.xpath(`//a[@href="http://elementalselenium.com/"]`).should("contain.text", 'Elemental Selenium').click();
      
    });*/
    /*it('Diff staff', () => {
        cy.xpath(`//*[text()='Option 2']`).should("contain.text", '2');
      
    });*/
    /*it('Diff staff', () => {
        cy.get('#autoGenerate').click();
        cy.get('#language-list').select(3);
        cy.get('.DICE').should('have.text', "Dice").click();
    /*cy.get('select#dropdown').should('contain', 'Please select an option').select(1);
        cy.get('select#dropdown').select(2).should('have.value', '2');
        cy.get('select#dropdown').should('have.text', 'Option 2');*/

    it('Login - username check', () => {
       cy.get('input#username').type('pкшмуе');
       cy.get('.radius').click();
       cy.get('#flash').should('contain', 'Your username is invalid!');
    });
    it('Login - password check', () => {
        cy.get('input#password').type('parol');
        cy.get('.radius').click();
        cy.get('#flash').should('contain', 'Your username is invalid!');
     });
     it('Login - incorrect pass and login', () => {
        cy.get('input#username').type(user);
        cy.get('input#password').type(pass);
        cy.get('.radius').click();
        cy.get('#flash').should('contain', 'Your username is invalid!');
     });
     it('Login - incorrect pass and correct login', () => {
        cy.get('input#username').type(userCorrect);
        cy.get('input#password').type(pass);
        cy.get('.radius').click();
        cy.get('#flash').should('contain', 'Your password is invalid!');
     });
     it('Login - incorrect login and correct pass', () => {
        cy.get('input#username').type(user);
        cy.get('input#password').type(passCorrect);
        cy.get('.radius').click();
        cy.get('#flash').should('contain', 'Your username is invalid!');
     });
     it('Login - empty pass and username', () => {
        cy.get('.radius').click();
        cy.get('#flash').should('contain', 'Your username is invalid!');
     });
     it('Login - Correct', () => {
        cy.get('input#username').type(userCorrect);
        cy.get('input#password').type(passCorrect);
        cy.get('.radius').click();
        cy.get('#flash').should('contain', 'You logged into a secure area!').and('have.css', 'background-color', 'rgb(93, 164, 35)');
});
it('Login - Logout', () => {
    cy.get('input#username').type(userCorrect);
    cy.get('input#password').type(passCorrect);
    cy.get('.radius').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!').and('have.css', 'background-color', 'rgb(93, 164, 35)');
    cy.xpath('//a[@href="/logout"]').click()
    cy.get('#flash').should('contain', 'You logged out of the secure area!').and('have.css', 'background-color', 'rgb(93, 164, 35)');
});
});
