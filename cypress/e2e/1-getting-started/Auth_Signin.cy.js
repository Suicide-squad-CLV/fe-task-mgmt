describe('Signin', () => {
    it('Signin unsucessfull', () => {
        cy.visit('http://localhost:3000')
        cy.get('#email').type('Dove1222@gmail.com')
        cy.get('#password').type('123456789')
        cy.get("button[type='submit']").click()
        cy.get('.Toastify__toast-body > :nth-child(2)').should('contain','Username or Password is incorrect!')
    })
    it('Signin sucessfull', () => {
        cy.visit('http://localhost:3000')
        cy.get('#email').type('devdove2309@gmail.com')
        cy.get('#password').type('dove123456')
        cy.get("button[type='submit']").click()
        cy.location('pathname').should('contain','/task-management')
    })
    before(() => {
        Cypress.on("uncaught:exception", (err, runnable) => {
            // Your custom handling logic here
            console.error("Uncaught exception:", err.message);
            // You can also choose to return false to prevent the error from failing the test
            return false
        })
    })
})
