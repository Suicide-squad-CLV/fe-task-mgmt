describe('Forgot Password', () => {
    beforeEach(() =>{
        cy.visit('http://localhost:3000')
        cy.get('.-my-3').click()
        cy.get("button[type='submit']").click()    
        cy.location('pathname').should('contain','/auth/reset-password')
    })
    it('Access Signin page successfully', () => {
        cy.get('.my-3 > .text-sm').click() 
        cy.location('pathname').should('contain','/auth/login')
   })
    it('Reset Password process unsuccessfully', () => {
        cy.get('#email').type('ctvy@gmail.com')
        cy.get('.inline-flex').click()   
        cy.get('.Toastify__toast-body > :nth-child(2)').should('contain', '2 UNKNOWN: User with this email does not exist')
   })
    it('Reset Password process successfully', () => {
        cy.get('#email').type('devdove2309@gmail.com')
        cy.get('.inline-flex').click()   
        cy.location('pathname').should('contain','/auth/login')
        cy.get('.Toastify__toast-container').should('contain', 'Forgot password email already sent')
   })
})
