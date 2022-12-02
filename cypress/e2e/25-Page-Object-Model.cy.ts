import {LoginPage} from '../../cypress/pages/Login';
import {ProfilePage} from "../../cypress/pages/Profile";
describe('POM', () => {
    beforeEach(() => {
        LoginPage.visit()
    });
    it('Login success', () => {
       
      // LoginPage.submitLogin('test', 'Test1234*'); // using imported Page Object for login process

       LoginPage.usernameElement.type('test');
       LoginPage.passwordElement.type('Test1234*');
       LoginPage.loginElement.click();
        cy.url().should("contain","profile"); 
        LoginPage.userElement.should('have.text', 'test');
        ProfilePage.headerElement.should("have.text", "Profile");
    });

    it('Login wrong', () => {
       
       LoginPage.submitLogin('wrong', 'Wrong'); // using imported Page Object for login process
        cy.url().should("contain","login");
        LoginPage.headerElement.should("have.text", "login");
    }); 
});