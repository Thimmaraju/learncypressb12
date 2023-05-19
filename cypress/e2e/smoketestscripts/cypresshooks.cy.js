describe("visiting webpage using cypress", () => {

    after(function () {

        cy.log("this will run after all Tests")
      
    });


    beforeEach(function () {
    
        cy.log("before each Test" );
    });


    afterEach(function () {
      cy.log("after each Test" );
    });

    before(function () {
        cy.log("before All the Test script ");
    });
  

    it.skip("1st test", () => {
      cy.log("1st IT block");
      
    });

    it("dummy block 2", () => {
      cy.log("2nd IT block");
    });

    it.skip("dummy block 3", () => {
        cy.log("3rd IT block");
      });
  });