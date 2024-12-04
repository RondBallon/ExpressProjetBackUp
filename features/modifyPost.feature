Feature: Modify post

Scenario: ModifyPost
Given a user connected to his account
And has published a post
When he modify post content and click on the button "Modifier"
Then the database is updated

Scenario: ModifyPost failed
Given a user connected to his account
And has published a post
When he click on the button "Modifier"
But no content has been modified
Then a message is displayed "Le contenu ne comporte pas de modification"