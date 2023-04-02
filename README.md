[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10562433&assignment_repo_type=AssignmentRepo)

# group-game-catfe :D

Diya Shah: added new title scene, added new narrative scene, and added new instructions scene. Made some changes to do the preload Scene as well. Ordered them by user clicks so it goes by Title scene -> narrative scene -> instructions scene -> and then tutorials scene

# group-game-project
# who worked on what
Anthony Racioppo:
- Set up initial code base for preloading, title screen, functions for handling submitting orders, base functionality of gameplay elements, ingredients, clear button, cat generation, validity check for orders


Jillian Camp:
- Worked on tutorial pop-ups mechanic. 
- Changed the name of TutorialScene to GameScene, and then created my own TutorialScene with the pop-ups for the tutorial.
- Created pop ups, with the final click in the tutorial executing `this.game.start('GameScene')` so that gameplay begins when tutorial 
is over.
- Edited TitleScene.ts to execute `this.game.start('TutorialScene')` in order to visualize the pop-ups mechanic.

- To see my work: 
$ git checkout -b jill
$ git fetch origin jill
$ npm run start 

