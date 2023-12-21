describe('Update Task', () => {
    beforeEach(() =>{
        cy.visit('http://localhost:3000')
        cy.get('#email').type('devdove2309@gmail.com')
        cy.get('#password').type('dove123456')
        cy.get("button[type='submit']").click()
        cy.location('pathname').should('contain','/task-management')
    })
   
    it('Delete Task successfully', () => {
        cy.get('[data-cy="task-item-5"] > .flex-col > .relative > .flex > [data-cy="delete-btn"]').click()
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