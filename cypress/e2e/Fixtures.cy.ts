import { testData} from "./model";
describe('Fixtures', () => {
    it('Basics', () => {
        cy.fixture('jsonExample').then ((testData: testData)=>{
            cy.log("Printing", testData.property1);
            cy.log("Printing", testData.property2);
        })
    });
});