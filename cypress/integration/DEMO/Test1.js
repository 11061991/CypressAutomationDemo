describe('my form', () => {
    before(() => {
      cy.visit('https://www.amazon.com')
    })
  
    it('Test1: Verify Amazon submenus', () => {
      cy.get('#searchDropdownBox').select('Baby',{force: true});
      cy.wait(3000);
      cy.get('#nav-search-submit-button').click();
      cy.wait(3000);
      //cy.get('#nav-subnav > a:nth-child(4)').invoke('show');
      cy.get('#s-refinements > div:nth-child(1) > ul > li:nth-child(1) span a span').invoke("text").should('eq',"Activity & Entertainment")
      cy.get("#s-refinements > div:nth-child(1) > ul > li:nth-child(1)").scrollIntoView().should("be.visible").click();

     
      

      

    })
  })