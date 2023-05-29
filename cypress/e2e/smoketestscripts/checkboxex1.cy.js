describe('checkbox Test', function () {

    it('Working with Check boxes', function () {
 
       cy.visit("https://register.rediff.com/register/register.php");

 //CheckBox 
 
       cy.get('input[name^=chk_altemail]').check().should('be.checked');
 
       // cy.wait(10000)
 
        cy.xpath('//input[starts-with(@name,"chk_altemail")]').uncheck().should('not.be.checked');
 
  //Radio 
 
       // cy.xpath('//input[@value="f"]', { timeout: 20000 }).check().should('be.checked');

       // cy.xpath('//input[@value="f"]', { timeout: 20000 }).uncheck().should('not.be.checked');
 
  //Uncheck will not work for Radio
 
  //Dropdowns

      //Text
 
        cy.xpath('//select[starts-with(@name,"DOB_Month")]').select("MAY").should("have.value", "05" )
 
      //
      //Value
 
      cy.xpath('//select[starts-with(@name,"DOB_Month")]').select("09").should("have.value", "09" )
 
 
    });
 });
 