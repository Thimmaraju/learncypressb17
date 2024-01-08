Feature: Verify Login functionality

    Automation login functionality - Positive and negative tests

Background: launch url
     Given User launch the Application

    Scenario: Verify login with valid creds
    #   When User enter username and Password
        When User enter username "Admin" and Password "admin123"
        And User click on login button
        Then User should be navigated to dashboard page

    Scenario: Verify login with valid username and invalid password
        When User enter username "Admin" and Password "erfhuh"
        And User click on login button
        Then User should get login error message

    Scenario: Verify login with invalid username and valid password
        When User enter username "rhgbr" and Password "admin123"
        And User click on login button
        Then User should get login error message


    Scenario: Verify login with invalid username and invalid password
        When User enter username "rhgbr" and Password "fgurey"
        And User click on login button
        Then User should get login error message