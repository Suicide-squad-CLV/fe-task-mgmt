describe('Signin', () => {
    it('Signin sucessfully then logout', () => {
        cy.visit('http://localhost:3000')
        cy.get('#email').type('devdove2309@gmail.com')
        cy.get('#password').type('dove123456')
        cy.get("button[type='submit']").click()
        cy.location('pathname').should('contain','/task-management')
        cy.contains('Log out').click()	
        cy.location('pathname').should('contain','/auth/login')
    })
})
