
import addemployeedata from "../../fixtures/addemployee.json"

import logindata from '../../fixtures/login.json'

import addemployee from "../../PageObjects/PIM/addemployee.po"

import login from "../../PageObjects/Login/loginpage.po"

describe('Verify Adding employee', () => {

    it('Verify add employee with valid details', () => {

        cy.visit("/web/index.php/auth/login")

        login.loginwithcreds(logindata.username, logindata.password)
        cy.get(addemployee.pimMenu()).click()

        cy.contains(addemployee.addemployeesubmenu()).click()

        cy.get(addemployee.firstnameInput()).type(addemployeedata.firstname)

        cy.get(addemployee.lastname()).type(addemployeedata.lastname)

        cy.get(addemployee.saveBtn()).click();
        
    })


})