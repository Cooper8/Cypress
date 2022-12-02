let externalVar: string = "test";
describe('Basics', () => {
    beforeEach(() => {
        cy.visit(`http://uitestingplayground.com/dynamicid`);
    });
    it('Find by text', () => {
       cy.contains("button", "Button with Dynamic ID").invoke("text").then((text) =>{
        externalVar = text;
        cy.wrap(externalVar).as("textFromContains");
        cy.log(externalVar);
       });
       cy.get('@textFromContains').then((text)=>{
        cy.log("This is the contains text outside the closure" + text);
       })
    });
    it('Sharing by alias', () => {
        externalVar = this.textFromContains;
        cy.log(externalVar);
    });
});
