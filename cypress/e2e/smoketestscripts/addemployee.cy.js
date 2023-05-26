
import addemployeedata from "../../fixtures/addemployee.json"

import logindata from '../../fixtures/login.json'

import addemployee from "../../PageObjects/PIM/addemployee.po"

import login from "../../PageObjects/Login/loginpage.po"

describe('Verify Adding employee', () => {

    it('Verify add employee with valid details', () => {

        cy.visit("/web/index.php/auth/login")

        cy.login("Admin", "admin123")
        //cy.get(addemployee.pimMenu()).click()

        cy.clickonelement(addemployee.pimMenu())

        cy.contains(addemployee.addemployeesubmenu()).click()

        cy.Addemployee("Sandeep", "E")
        
    })




})