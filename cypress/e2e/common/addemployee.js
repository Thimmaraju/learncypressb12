import { Given,Then } from "cypress-cucumber-preprocessor/steps";
import addemployee from "../../PageObjects/PIM/addemployee.po"
import login from "../../PageObjects/Login/loginpage.po";


Given('User launch Application', () => {
    cy.visit("/")
  })


  When(`User enter valid username {string} and Valid password {string}`, (username, password) => {
    cy.get(login.usernameinput).type(username)

    cy.get(login.passwordInput()).type(password)
  })

  When('User click on login button', () => {
    cy.get('button[type="submit"]').click()
  })


  Then('User should navigated to Dashboard', () => {
      
    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

  })

  When('User click on PIM module', () => {
      
    cy.clickonelement(addemployee.pimMenu())
  })

  When('User click on Add employee', () => {
      
    cy.contains("Add Employee").click()
  })


  When(`User enter valid username {string} and Lastname as {string}`, (firstaname, lastname) => {
      cy.enterText(addemployee.firstnameInput(), firstaname)

      cy.enterText(addemployee.lastname(), lastname)
  })


  When('User click on save button', () => {
      
    cy.clickonelement(addemployee.saveBtn())
  })

  Then('User should get successfully saved message', () => {
      
    cy.contains("Successfully Saved").should("be.visible")
  })


  
  Then('User should get error message', () => {
      
    cy.contains("Should not exceed 30 characters").should("be.visible")
  })


