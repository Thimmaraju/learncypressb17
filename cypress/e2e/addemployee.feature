Feature: Verify Add employee functionality

    Automation of Positive and negative tests for add employee

    # Scenario: Verify add employee with valid input details
    #         Given User launch the Application
    #         When User enter username "Admin" and Password "admin123"
    #         And User click on login button
    #         Then User should be navigated to dashboard page
    #         When User clicks on PIM module
    #         And User clicks on add employee submenu
    #         And User enter the firstname "Satheesh" and lastname "Goud"
    #         And User clicks on save button
    #         Then User should get successfully saved message

    Scenario Outline: Verify add employee with valid input details
        Given User launch the Application
       # When User enter username and Password
        When User enter username "Admin" and Password "admin123"
        And User click on login button
        Then User should be navigated to dashboard page
        When User clicks on PIM module
        And User clicks on add employee submenu
        And User enter the firstname "<firstname>" and lastname "<lastname>"
        And User clicks on save button
        Then User should get successfully saved message
        Examples:
            | firstname | lastname | Middlename
            # | Satheesh  | Goud     |
            # | Ragaa     | Madhiri  |
            # | Shashi    | Rekha    |
            # | RAju      | G        |
             | Nagesh      | B      |