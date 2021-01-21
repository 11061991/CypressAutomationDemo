import POM from '../POM'
describe('Test Suite', () => {
     
      beforeEach(function() {
        
        cy.fixture('example').then(function(data){
        this.data = data;
        cy.visit(Cypress.env('URL'))
        
         })})
     
   it('Test1: Verify Table row column attributes', function() {
        // To display the table in UI scroll line
        const pom=new POM();
        pom.getShowTable().scrollIntoView().should("be.visible")

        pom.getTableHeaders().each(($header, index, $list)=>
     {
       const text=$header.text()
       // cy.log(text)-- is printing all headers for the table
       cy.log(text)
       if(text.includes(this.data.CIHeader1)){
        pom.getCICol().each(($col, index, $list)=>{
            const coltext=$col.text()
            cy.log(coltext)
            if(coltext.includes(this.data.CIValue)){ 
                //cy.get('#readme > div.Box-body.px-5.pb-5 > article > table > tbody > tr').eq(index)
                expect(coltext).to.equal(this.data.CIValue);
                pom.getLink().eq(index).click();
            }  
        })
       }
     })})

    it('Test2: Verify Table row column attributes', function() {
        const pom=new POM();
        // To display the table in UI scroll line
    pom.getShowTable().scrollIntoView().should("be.visible")
     cy.wait(3000)
    pom.getTableHeaders().each(($header, index, $list)=>
     {
       const text=$header.text()
       // cy.log(text)-- is printing all headers for the table
       cy.log(text)
       if(text.includes(this.data.CIHeaders2)){
        expect(text).to.contains(this.data.CIHeaders2);
        pom.getCICol().each(($col, index, $list)=>{
            if(index==3){ 
                pom.getLink2().eq(index).click();
            }  
        })
       }
     })})
  
     it('Test3: Verify Table row column attributes',  function()  {
        const pom=new POM();
        // To display the table in UI scroll line
        pom.getShowTable().scrollIntoView().should("be.visible")

        pom.getTableHeaders().each(($header, index, $list)=>
     {
       const text=$header.text()
       // cy.log(text)-- is printing all headers for the table
       cy.log(text)
       if(text.includes(this.data.CIHeader1)){
        pom.getCICol().each(($col, index, $list)=>{
            const coltext=$col.text()
            cy.log(coltext)
            if(coltext.includes(this.data.CIValue)){ 
                //cy.get('#readme > div.Box-body.px-5.pb-5 > article > table > tbody > tr').eq(index)
                expect(coltext).to.contains(this.data.RandomValue);
                pom.getLink().eq(index).click();
            }  
        })
       }
 })})
  

    
  })