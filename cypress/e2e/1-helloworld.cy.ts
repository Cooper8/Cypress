describe('empty spec', () => {
  it('passes', () => {
    cy.log('hello world')
  })
  it('typescript intro', () => {
    let stringVariable:string = "9";
    let numberVariable:number = 0;
    let booleanVariable:boolean = true;
    let anyVariable:any = false;

    function addTwoNumbers(a:number,b:number) {
      return a+b;

      interface User {
        username: string;
        password: string;

        function returningUserInformation(user:User):void{
          console.log('this is user name' + user.username);
          console.log('this is user password' + user.password)
        }
      }
    }
  }),
})