/**
 * Working with frame
 */

 describe('handling frames',function() {
     it('iframesuite handling',function() {
         cy.visit('https://the-internet.herokuapp.com/iframe')
         cy.get('#mce_0_ifr').within(function($frame) {
            const iframebody=$frame.contents().find('body')
           cy.wrap(iframebody).invoke("text").should('eq',"Your content goes here.")  //Assertion..
             cy.wrap(iframebody).clear().type('Hello')
         })

         
     })
 })