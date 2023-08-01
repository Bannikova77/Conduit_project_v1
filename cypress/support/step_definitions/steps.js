import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

import SignUpPage from '../../e2e/pages/SignUpPage/SignUpPage';
import Homepage from '../../e2e/pages/Homepage';

const signUpPage = new SignUpPage();
const homepage = new Homepage();

Given('I have a fixture named "SignUp"', () => {
  cy.fixture('SignUp').as('fixtureData');
});

Given('I open the Conduit page app', () => {
  //cy.visit('https://react-redux.realworld.io/#/?_k=8xgh3q')
  cy.visit('/');
  cy.contains('conduit');
});

When('I click on the "Sign up" button', () => {
  homepage.getSignUpButton().click();
});

When('I fill in the correct email', () => {
  //const value = this.fixtureData.email;
  cy.get('[placeholder="Email"]').type('atevs2789@gmail.com');
});

When('I fill in the correct password', () => {
  //const value = this.fixtureData.password;
  cy.get('[placeholder="Password"]').type('Bruta22ina');
});

When('I click on the "Sign in" button', () => {
  signUpPage.clickSignInButton();
});

Then('Verify the error "username cant be blank" appeared', () => {
  cy.get('.error-messages').then(($el) => {
    expect($el.text()).to.include("username can't be blank");
  });
});
