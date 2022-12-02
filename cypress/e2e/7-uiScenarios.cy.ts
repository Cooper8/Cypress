/*describe('Click challenge', () => {
    beforeEach(()=>{
        cy.visit("/click");
    });
    it('Checking class assertions', () => {
        cy.get('#badButton').click().should('have.class', 'btn btn-success');
    });
    it('background assertions', () => {
        cy.get('#badButton').click().should('have.css', 'background-color', 'rgb(40, 167, 69)');
    });
});*/
/*describe('Hover challenge', () => {
    beforeEach(()=>{
        cy.visit("/mouseover");
    });
    it('hover with cypress workaround', () => {
        cy.get('.text-primary').trigger('mouseover');
    });
    it('hover with real hover elements', () => {
        cy.get('.text-primary').realHover();
    });
});*/
describe('Dynamic table', () => {
    beforeEach(()=>{
        cy.visit("/dynamictable");
    });
    it('Chrome CPU test', () => {
        cy.get('div[role="row"] span').each(($cell) => {
            if($cell.text().includes("Chrome")){
                cy.log(`I have found the ${$cell.text()} row`);
                let chromeRowValues: string[] = [];
                chromeRowValues.push($cell.next().text());
                chromeRowValues.push($cell.next().next().text());
                chromeRowValues.push($cell.next().next().next().text());
                chromeRowValues.push($cell.next().next().next().next().text());
                cy.log('Chrome values', chromeRowValues);
                chromeRowValues.forEach((chromeValue)=>{
                    if(chromeValue.includes('%')){
                        cy.log(chromeValue);
                        cy.get('.bg-warning').should('have.text', `Chrome CPU: ${chromeValue}`);
                    }
                })
            }
        });
    });

});