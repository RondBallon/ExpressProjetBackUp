Feature: Login

Scenario: Login with good userName and good password
  Given the user have previously create a account with a userName and a password
  When the user enter his userName correctly 
  And the user enter his password correctly
  Then The user access to the homepage


Scenario: Login with wrong userName
  Given the user have previously create a account with a userName and a password
  When the user enter a wrong userName
  And the user enter his password correctly
  Then the error message "erreur d'identifiant ou mot de passe" is displayed


Scenario: Login with wrong password
  Given the user have previously create a account with a userName and a password
  When the user enter a wrong passeWord
  And the user enter his userName correctly
  Then the error message "erreur d'identifiant ou mot de passe" is displayed
