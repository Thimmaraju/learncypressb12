describe('Verify login functionality', () => {


    //  creds = {
    //     "username" : "Admin",  
    //    "password" : "admin123",
    //    "wrongusername" : "Adhbkinhjmin",
    //    "wrongpassword" : "admkmbkuhin123",

    //  }

    var creds = ["Admin", "admin1234", "gfuyhgdiuh", "bhnwfeiluhwoidfhl"]


    it.only('Verify login with Valid credntials', function () {





        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.login(Cypress.env("username"), Cypress.env("password"))


    })

    it('Verify login with valid username and invalid password', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //actions 
        cy.get('input[name="username"]').type(creds.username)

        cy.get('input[name="password"]').type(wrongpassword)

        cy.get('button[type="submit"]').click()

        //assertion 

        cy.contains('Invalid credentials').should("be.visible")

    })

    it('Verify login with invalid username and valid password', () => {


        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //actions 
        cy.get('input[name="username"]').type(wrongusername)

        cy.get('input[name="password"]').type(password)

        cy.get('button[type="submit"]').click()

        //assertion 

        cy.contains('Invalid credentials').should("be.visible")
    })


    it.only('Verify login with invalid username and invalid password', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //actions 
        cy.get('input[name="username"]').type(creds[2])

        cy.get('input[name="password"]').type(creds[3])

        cy.get('button[type="submit"]').click()

        //assertion 

        cy.contains('Invalid credentials').should("be.visible")

    })



})