describe('Update Task', () => {
    beforeEach(() =>{
        cy.visit('http://localhost:3000')
        cy.get('#email').type('devdove2309@gmail.com')
        cy.get('#password').type('dove123456')
        cy.get("button[type='submit']").click()
        cy.location('pathname').should('contain','/task-management')
    })
   
    it('Update Task successfully', () => {
        // cy.get('[data-cy="task-item-3"] > .flex-col > .relative > .flex > [data-cy="edit-btn"]').click()
        // cy.get("body > div:nth-child(20)").should('exist')
        // //cy.get("[data-cy='task-status']").click()
        // //cy.get('select').select('In Progress', {force: true}).click()
        // //cy.get('[aria-labelledby="radix-:r1o:"]').click()   
        // // cy.get("[data-cy='add-task-btn']").click();
        // cy.get("#title").type("New Task");
        // cy.get("#description").type("New Description");
        // cy.get("[data-cy='select-input']").click();
        // cy.get("[data-cy='option-7256b3a3-98b6-4b29-91d1-04ba40389ff4']").click();
        // cy.get("[data-cy='combo-input']").click();
        // cy.get("[data-cy='combo-search']").type("e");
        // cy.get("[data-cy='search-results']");
        // cy.get("[data-cy='combobox-item']").eq(0).click();
        // cy.get("button[type='submit']").click()
        // cy.get("[data-cy='task-item-4']")
        //     .find("[data-cy='task-title']")    
        //     .should('contain','Task 200')

        cy.get("[data-cy='task-item-4']")
            .find("[data-cy='edit-btn']")
            .click()
        
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