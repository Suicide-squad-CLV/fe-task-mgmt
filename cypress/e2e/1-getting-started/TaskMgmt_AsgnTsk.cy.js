describe('Assign Task', () => {
    beforeEach(() =>{
        cy.visit('http://localhost:3000')
        cy.get('#email').type('devdove2309@gmail.com')
        cy.get('#password').type('dove123456')
        cy.get("button[type='submit']").click()
        cy.location('pathname').should('contain','/task-management')
    })
   
    it('Assign Task successfully', () => {
        cy.get('[data-cy="task-item-3"] > .flex-col > .relative > .flex > [data-cy="edit-btn"]').click()
        cy.get("body > div:nth-child(20)").should('exist')
        cy.get("[data-cy='combo-input']").click()
        cy.get("[data-cy='combo-search']").type('dove')
        cy.get("[data-cy='search-results']").select('devdove2309@gmail.com').invoke('span').should("eq", "devdove2309@gmail.com")
        cy.get("button[type='submit']").click()
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