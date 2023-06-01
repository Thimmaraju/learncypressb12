///<reference types="cypress"/>

describe('Automation - File Upload Example', function () {

    it('Cypress Test Case - Understanding upload file ', function () {
  
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');

     cy.xpath('//input[@name="upfile"]').attachFile('Module1/register.json');
      
      //cy.fileupload("//input[@name='upfile']",'module1/test4.txt')

      cy.wait(3000)
      cy.xpath('//input[@type="submit"]').click();
    
      cy.contains("The file's contents are:").should("be.visible")
    })


    
    it('Cypress Test Case - Understanding upload file - Select file ', function () {
  
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');

     cy.xpath('//input[@name="upfile"]').selectFile('D:/LearnCypressB12/cypress/fixtures/Module1/register.json');
      
      //cy.fileupload("//input[@name='upfile']",'module1/test4.txt')

      cy.wait(3000)
      cy.xpath('//input[@type="submit"]').click();
    
      cy.contains("The file's contents are:").should("be.visible")
    })


    it.only('Cypress Test Case - Understanding download file ', function () {
      let r = (Math.random() + 1).toString(36).substring(7);
      cy.downloadFile("https://static.abplive.com/wp-content/uploads/sites/2/2017/01/30201030/parrot.jpg", "cypress/downloads", "parrot"+r+".jpg")
      //cy.readFile('cypress/downloads/raju.jpg').should('exist')
    })

  })