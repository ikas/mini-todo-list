describe('Hotkeys specification', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })

  it('add todos', () => {
    cy.get('#new-todo')
      .type('Something to do 1 {enter}')
      .type('Something to do 2 {enter}')
      .type('Something to do 3 {enter}')

    cy.get('.todo-wrapper').should('have.length', 3)
  })

  it('enter toggles done status', () => {
    cy.get('#key-mapper').click()
      .type('{downarrow}')
      .type('{downarrow}')
      .type('{enter}')
    
    cy.get('#todo-list')
      .contains('Something to do 3').should('have.class', 'striked')

    cy.get('#key-mapper').click()
      .type('{downarrow}')
      .type('{downarrow}')
      .type('{enter}')
    
    cy.get('#todo-list')
      .contains('Something to do 3').should('not.have.class', 'striked')
  })
  
  it('command backspace deletes todos', () => {
    cy.get('#key-mapper').click()
      .type('{downarrow}')
      .type('{downarrow}')
      .type('{meta}{backspace}')
    
    cy.get('.todo-wrapper').should('have.length', 2)
  })
})
