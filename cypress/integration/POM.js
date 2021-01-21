class POM{
getShowTable(){
    return cy.get('#readme > div.Box-body.px-5.pb-5 > article > h2:nth-child(5)')

}

getTableHeaders(){
    return cy.get('#readme > div.Box-body.px-5.pb-5 > article > table > thead > tr > th')
}

getCICol(){
    return cy.get('#readme > div.Box-body.px-5.pb-5 > article > table > tbody > tr td:nth-child(1)')
}
getLink(){
    return cy.get('td:nth-child(3) a')
}
getLink2() {
   return cy.get('td:nth-child(4) a')
}
}
export default POM;

