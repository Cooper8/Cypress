describe('API testing', () => {
    it('GET', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').then((response)=>{
            cy.log('response' , response);
        });
    });
    it('POST', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
            title: "title #101",
            body: "post #101",
            userId: 101,
        }).then((response)=>{
            cy.log('response', response);        
        })
        });
        it('PUT', () => {
            cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
                title: "title #1 updated",
                body: "post #1 updated",
                userId: 1,
            }).then((response)=>{
                cy.log('response', response);        
            })
            });
            it('DELETE', () => {
                cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1').then((response)=>{
                    cy.log('response', response);        
                })
                });
    });
