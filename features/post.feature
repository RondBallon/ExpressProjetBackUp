Feature: Create post

Scenario: AddPost
Given a user connected to his account
When he click on the button "Publier"
Then a new post is created
And the database is updated