[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10562433&assignment_repo_type=AssignmentRepo)

# CISC374 Catfe :D
## Who worked on what:

Diya Shah: added new title scene, added new narrative scene, and added new instructions scene. Made some changes to do the preload Scene as well. Ordered them by user clicks so it goes by Title scene -> narrative scene -> instructions scene -> and then tutorials scene

Anthony Racioppo:
- Set up initial code base for preloading, title screen, functions for handling submitting orders, base functionality of gameplay elements, ingredients, clear button, cat generation, validity check for orders
- Set up Money System and passing money between scenes

Emma Frampton:
- Added abstracted BaseScene with detailed docstrings for future code references.
- Changed variables to be more abstract: ex. myBag --> myCounter to represent possible ingredients
- Cleaned up inital code, fixed scene calls, and dealt with all group merge conflicts

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

Diya Shah:
- Updated and added 3 new scenes: TitleScene, NarrativeScene, InstructionScene
- Created the visuals and graphics for these scenes, so it would be more visually pleasing
- Edited preloadscene as well
- Fixed tutorial scene aesthetics, by add css elements 
- Added and created bacground assets for final win scene and movint to next level scene
- Updated aesthetics for Money, Level, Replay, and final scene buttons
- refactored code to get rid of static assets, replaced them with phaser text buttons than can be changee dynamically
- refactored scenes to skips unused scenes from MVP (insttructions scenes)

Robin Moore:
- Refactored the code to create Cat objects
- Refactored the code to allow there to be multiple cats per level
