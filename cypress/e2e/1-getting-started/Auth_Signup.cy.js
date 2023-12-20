describe('Signup', () => {
    it('Access to Signup page', () => {
        cy.visit('http://localhost:3000')
        cy.get("span[class='text-sm font-medium text-blue-600']").click()
        cy.location('pathname').should('contain', '/auth/signup')
    })

    it('Signup unsuccessfully', () => {
        cy.visit('http://localhost:3000/auth/signup')
        cy.get("button[type='submit']").click()
        cy.get("[data-cy='form-item-fullname'] > [data-cy='error-message']").should('contain', 'Name must be at least 3 characters.')
        cy.visit('http://localhost:3000/auth/signup')
        cy.get("button[type='submit']").click()
        cy.get('#fullname').type('DevDove')
        cy.get('#email').type('ctvy2309@gmail.com')
        cy.get('#password').type('12345678')
        cy.get('#confirm').type('12345678')
        cy.get("button[type='submit']").click()
        cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', '2 UNKNOWN: User already exists')
    })
    
    it('Signup successfully', () => {
        cy.visit('http://localhost:3000/auth/signup')
        cy.get('#fullname').type('DevDove')
        cy.get('#email').type('Dove3@gmail.com')
        cy.get('#password').type('12345678')
        cy.get('#confirm').type('12345678')
        cy.get("button[type='submit']").click()
        cy.get('.Toastify__toast-body').should('contain','Register successful')
        cy.location('pathname').should('contain','/auth/login')
    })
})


