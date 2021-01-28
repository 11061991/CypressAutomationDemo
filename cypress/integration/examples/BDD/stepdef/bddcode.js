import {Given, When} from "cypress-cucumber-preprocessor/steps";
import POM from '../POM'

Given('open the page', function(){

        cy.visit(Cypress.env('URL'))
        
})

When('navigate the table', function(){
    
const pom=new POM();
    cy.fixture('example').then(function(data){
        this.data = data;
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
        expect(coltext).to.equal(this.data.CIValue);
        pom.getLink().eq(index).click();
}  
})
}
})
        
})

})