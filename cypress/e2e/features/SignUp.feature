Feature: Username can't be blank error
    Scenario: Username can't be blank error
        Given I open the Conduit page app
        When I click on the "Sign up" button
        When I fill in the correct email
        When I fill in the correct password
        When I click on the "Sign in" button
        Then Verify the error "username cant be blank" appeared


       