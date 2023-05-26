import login from "../../PageObjects/Login/loginpage.po";
import job from "../../PageObjects/Admin/jobsubmodule.po";

import addemployee from '../../PageObjects/PIM/addemployee.po'

describe('Verify adding employee', () => {


    beforeEach(function () {

        
        cy.viewport('iphone-5',"landscape")
        cy.visit('/')

        cy.login("Admin", "admin123")

    });

    before(function () {
        cy.log("Before All the Test scripts");
    });
  
    
    afterEach(function () {
        cy.log("Test case completed " );
      });

    it('add employee with valid details', () => {


        cy.get(addemployee.pimMenu()).click()

        cy.contains(addemployee.addemployeesubmenu()).click()

        cy.get(addemployee.firstnameInput()).type("Ashwani")

        cy.get(addemployee.lastname()).type("karnatakam")

        cy.get(addemployee.saveBtn()).click()

    })

    it('add Job titles', () => {

        cy.get(job.adminmenu()).click()

        cy.contains(job.jobsubmenu()).click()

        cy.contains(job.jobtitleoption()).click()

        cy.get(job.addBtn()).click()

        cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type("Senior Analyst")

        cy.get('button[type="submit"]').click()


    })
    it('add Pay Grades', () => {

        cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click()

        cy.contains('Job').click()

        cy.contains('Pay Grades').click()

        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

        cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type("Grade 6")

        cy.get('button[type="submit"]').click()

    })
    it.only('Add Employment Status', () => {

        cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click()

        cy.contains('Job').click()

        cy.contains('Employment Status').click()

        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

        cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type("Full time")

        cy.get('button[type="submit"]').click()

    })
    it.only('Add Job Category', () => {

        //cy.viewport(width , heigth)

        cy.viewport(820, 1180)

        cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click()

        cy.contains('Job').click()

        cy.contains('Job Categories').click()

        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

        cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type("Human resources")

        cy.get('button[type="submit"]').click()

    })
    it('Add Work Shifts', () => {

        cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click()

        cy.contains('Job').click()

        cy.contains('Work Shifts').click()

        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

        let randomtext = (Math.random() + 1).toString(36).substring(7);

        cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type("Night" + randomtext)

        cy.get('button[type="submit"]').click()

        cy.contains("Successfully Saved").should("be.visible")

        //cy.get("jhnqwdhn").should("exist")

        // assert
        // successfull meassage

    })



})