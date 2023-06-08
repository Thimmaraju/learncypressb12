import { Then } from "cypress-cucumber-preprocessor/steps";


Then('User should error message', () => {
    cy.contains("Invalid credentials").should("be.visible")
  })