Feature: Validate Add employee Test cases

  Validate Add employee positive and negative test cases

  Background: login and navigate to create page 

  Given User launch Application
    When  User enter valid username "Admin" and Valid password "admin123"
    And User click on login button
    Then  User should navigated to Dashboard
    When  User click on PIM module
    And   User click on Add employee

  Scenario Outline: Add employee with valid details

    
    And   User enter valid username '<firstname>' and Lastname as '<lastname>'
    And   User click on save button
    Then  User should get successfully saved message
    Examples:
      | firstname | lastname |
      | Raju      | G        |
      | Sandeep   | E        |
      | Animesh   | xyz      |
  @regression
  Scenario: Add employee with invalid details
    And   User enter valid username "Rajvyudqwydguqwgdiqgwidhgcfgueyguyqwegu" and Lastname as "G"
    And   User click on save button
    Then  User should get error message

