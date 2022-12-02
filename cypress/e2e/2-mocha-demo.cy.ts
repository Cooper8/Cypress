describe('empty spec', () => {
  before (() =>{
    cy.log("hello from the before")
  })
  after (() =>{
    cy.log("hello from the after")
  })
  it('test 1', () => {
    cy.log('hello world')
  })
    it.only('test 2', () => {
      cy.log('hello world2')
  })
  it.skip('test 3', () => {
    cy.log('hello world3')
})
})