
import addemployeedata from "../../fixtures/addemployee.json"

describe('Verify Adding employee', () => {

    it('Verify add employee with valid details', () => {

        cy.visit("/web/index.php/auth/login")

        cy.login(Cypress.env("username"), Cypress.env("password"))
        cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()

        cy.contains('Add Employee').click()

        cy.get('input[name="firstName"]').type(addemployeedata.firstname)

        cy.get('input[name="lastName"]').type(addemployeedata.lastname)

        cy.get('button[type="submit"]').click();
        
    })


})