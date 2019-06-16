describe('Mini Todo List', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })

  it('new todo input is ready to be typed', () => {
    cy.get('#new-todo').should('have.focus')
  })

  it('adds todos', () => {
    cy.get('#new-todo')
      .type('Something to do 1 {enter}')
      .type('Something to do 2 {enter}')
      .type('Something to do 3 {enter}')

    cy.get('.todo-wrapper').should('have.length', 3)
  })

  it('marks todos as done', () => {
    cy.get('.todo-wrapper')
      .contains('Something to do 1')
      .click()
      .should('have.class', 'striked')
  })

  it('one click delete does not delete todos', () => {
    cy.get('#todo-list .todo-wrapper').eq(0)
      .find('button')
      .click()

    cy.get('.todo-wrapper').should('have.length', 3)
  })

  it('double click delete deletes todos', () => {
    cy.get('#todo-list .todo-wrapper').eq(1)
      .find('button')
      .click()
      .click()

    cy.get('.todo-wrapper').should('have.length', 2)
  })
})
