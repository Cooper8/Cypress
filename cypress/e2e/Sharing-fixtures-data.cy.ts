import { testData} from "./model";
describe('Saring Fixtures', () => {
    beforeEach(() => {
        cy.fixture("jsonExample").as("testData");
    });
    it('Accesing shared fixture', function() {
        cy.get<testData>("@testData").then((testData)=>{
            cy.log('Accesing test data property1: ', testData.property1);
        });
    });
    it('Accesing shared fixture', function() {
        cy.get<testData>("@testData").then((testData)=>{
            cy.log('Accesing test data property1: ', testData.property1);
        });
    });
    it('Accesing shared fixture', function() {
        cy.get<testData>("@testData").then((testData)=>{
            cy.log('Accesing test data property1: ', testData.property1);
        });
    });
});