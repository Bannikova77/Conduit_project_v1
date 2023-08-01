var elements = require('./elements')

class SignUpPage {
  // typeInNewTodoField(value) {
  //   return cy.get(elements.TODOPAGE.NEW_TODO_FIELD).type(value)
  // }

  clickSignInButton() {
     return cy.get(elements.CONDUIT.SignInButton).click()
   }

  // getRemainingText() {
  //   return cy.get(elements.TODOPAGE.REMAINING_TEXT).invoke('text')
  // }

  // clickOnCheckBox(index) {
  //   return cy.get(elements.TODOPAGE.CHECKBOX).eq(index).check()
  // }

  // getCheckboxText(index) {
  //   return cy.get(elements.TODOPAGE.CHECKBOX_TEXT).eq(index).invoke('text')
  // }

  // verifyCheckboxToBeChecked(index) {
  //   return cy.get(elements.TODOPAGE.CHECKBOX).eq(index).should("be.checked")
  // }

  // getLastTodoText() {
  //   return cy.get(elements.TODOPAGE.CHECKBOX_TEXT).last().invoke('text')
  // }

  }
  export default SignUpPage