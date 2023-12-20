describe('Create Task', () => {
    beforeEach(() =>{
        cy.visit('http://localhost:3000')
        cy.get('#email').type('devdove2309@gmail.com')
        cy.get('#password').type('dove123456')
        cy.get("button[type='submit']").click()
        cy.location('pathname').should('contain','/task-management')
        cy.get("[data-cy='add-task-btn']").click()
        cy.get("[data-cy='modify-task-popup']").should('contain', 'Create New Task')
    })

    it('Create Task unsuccessfully', () => {
        cy.get("button[type='submit']").click()	
        cy.get("[data-cy='form-item-title'] > [data-cy='error-message']").should('contain', 'Please input task title')
        cy.get("[data-cy='form-item-description'] > [data-cy='error-message']").should('contain', 'Please input task description')

   it('Create Task successfully', () => {
        cy.get("#title").type('Task 1')
        cy.get("#description").type('Description 1')
        cy.get("button[type='submit']").click()	
        cy.get("div[role='alert']").should('contain', 'New task was added!')
        cy.wait(1000)
        cy.get(".rounded-lg.border.bg-card.text-card-foreground.shadow-sm.my-2.cursor-grab.p-3").should('be.visible')
    })
    })
})
