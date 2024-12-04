Feature: Create post

Scenario: AddPost
Given a user connected to his account
And "content" or "image" field is not empty
When he click on the button "Publier"
Then a new post is created
And the database is updated

Scenario: AddPost error
Given a user connected to his account
And "content" and "image" fields are empty
When he click on the button "Publier"
Then an error message "Le formulaire doit contenir un texte ou une image" is displayed
