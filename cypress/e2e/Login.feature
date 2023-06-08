Feature: Verify Login functionality

@smoke
Scenario: Verify login with vaild creds

 Given User launch Application
  When  User enter valid username "Admin" and Valid password "admin123"
  And User click on login button
  Then  User should navigated to Dashboard

Scenario: Verify login with invaild creds

 Given User launch Application
  When  User enter valid username "hkhkjdw" and Valid password "admin123"
  And User click on login button
  Then User should error message

# Scenario: Verify login with invaild username and invalid password 

#  Given User launch Application
#   When  User enter valid username "hkhkjdw" and Valid password "admkhbuihnin123"
#   And User click on login button
#   Then User should error message

# Scenario: Verify login with vaild username and invalid password 

#  Given User launch Application
#   When  User enter valid username "Admin" and Valid password "admkhbuihnin123"
#   And User click on login button
#   Then User should error message

Scenario Outline: Verify login with invaild creds

 Given User launch Application
  When  User enter valid username "<username>" and Valid password "<password>"
  And User click on login button
  Then User should error message
Examples:
| username | password |
| admin    | jfwebhj  |
| jhbdbh   |  admin123|
| jvehjdb  | fevgvq   |