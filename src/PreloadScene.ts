import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene {
	

	constructor() {
		super('PreloadScene')
	}

	preload() {
		this.load.image('titleScreen', 'assets/catfe_title.png'); //created new title/preload scene - DIYA
		this.load.image('background', 'assets/background.png');
		this.load.image('blackCat', 'assets/blackCat.jpg');
		this.load.image('orangeCat', 'assets/orangeCat.jpg');
		this.load.image('whiteCat', 'assets/whiteCat.jpg');
		this.load.image('cup', 'assets/cup.png');
		this.load.image('peachTea', 'assets/oranges.jpg');
		this.load.image('vanillaLatte', 'assets/vanilla.jpg');
		this.load.image('blackCoffee', 'assets/coffee.png');
		this.load.image('instruction1', 'assets/instruction1.png');
		this.load.image('clear', 'assets/clear.png');
		this.load.image('send', 'assets/send.png');
		this.load.image('winScene', 'assets/winScreen.png');
		this.load.image('narrativeScene', 'assets/narrativeScene.png'); //Diya- added
		this.load.image('instructionsScene', 'assets/InstructionsScene.png'); //diya - added


	}

	create() {
		this.scene.start('TitleScene');
	}

}
