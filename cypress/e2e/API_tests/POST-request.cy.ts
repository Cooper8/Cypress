const dataJson = require("../../fixtures/Post-create") //anothe way to use json file with body data

describe('POST', () => {
    let accessToken = "e5580dbfa4b34aa2e94e326e6e5f98bed07b2c5ceba16fe54bdb55614d63f0ed"
    let randomText = ""
    let testEmail = ""
    it('Create user', () => {

        var pattern = "ghjkjfhglafjglsefhgljahfglksdhglj"
        for (var i = 0; i<10; i++)
        randomText+=pattern.charAt(Math.floor(Math.random()*pattern.length));
        testEmail = randomText + "@gmail.com"
        //payload another way to use data for variables in body
        cy.fixture("Post-create").then((payload)=>{

        
        cy.request ({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                "Authorization": "Bearer " + accessToken
        }, 
        body: {
            "name": payload.name,
            "email": testEmail,
            "gender": payload.gender,
            "status": payload.status
        }
    }).then((res)=>{
        cy.log(JSON.stringify(res));
        expect(res.status).to.eq(201);
        //expect(res.body.data).has.property('name', payload.name);
     
    }).then((res)=>{
        const userId = res.body.data.id
        cy.log("user id is: " + userId);
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users"+userId,
            headers: {
                "Authorization": "Bearer " + accessToken
        } 
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data).has.property('id', userId);
        });
    });
    });
});
});