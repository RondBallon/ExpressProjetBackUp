Feature: Delete post

Scenario: DeletePost
Given a user connected to his account
And has published a post
When he click on the button "Effacer"
Then a confirmation message is displayed
And if the confirmation button is clicked the database is updated