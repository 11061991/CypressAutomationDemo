//<referance types = 'cypress'/>
describe('MyTestSuite',function(){
    it('Table Test', function()
    {
        cy.visit('testautomationpractice.blogspot.com')
        cy.get('table[name =BookTable]').contains('td','Learn Selenium').should('be.visible')
        
    })
})