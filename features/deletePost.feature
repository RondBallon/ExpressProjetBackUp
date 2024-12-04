Feature: Delete post

Scenario: DeletePost
Given a user connected to his account
And has published a post
When he click on the button "Effacer"
Then a confirmation message is displayed "Voulez-vous vraiment supprimer ce contenu"
And if the confirmation button is clicked the database is updated