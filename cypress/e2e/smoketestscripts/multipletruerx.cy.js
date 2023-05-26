describe('Multiple ', () => {
 
    it('Multiple elememts click', () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.xpath("//button[text()='ADD TO CART']").click({multiple : true})

        cy.wait(5000)

        cy.get('a[class="increment"]').click({multiple : true})
    })
  })
