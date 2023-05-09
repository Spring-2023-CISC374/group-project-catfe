import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene {
	

	constructor() {
		super('PreloadScene')
	}

	preload() {
		this.load.image('titleScreen', 'assets/catfe_title.png'); //created new title/preload scene - DIYA
		//Countertop and wall
		this.load.image('countertop', 'assets/Countertop.png');
		this.load.image('wall', 'assets/Wall.png');
		//Background
		this.load.image('background', 'assets/Background.png');
		//Cats
		this.load.image('blackCat', 'assets/cats/L1-B.PNG');
		this.load.image('tanCat', 'assets/cats/L1-T.PNG');
		this.load.image('whiteCat', 'assets/cats/L1-W.png');
		this.load.image('cup', 'assets/cup.png');
		// ingredients
		this.load.image('caramelLatte', 'assets/caramel.png');
		this.load.image('vanillaLatte', 'assets/vanilla.png');
		this.load.image('blackCoffee', 'assets/coffee.png');
		//milk
		this.load.image('milk', 'assets/milk.png');
		this.load.image('oatMilk', 'assets/oatMilk.png');
		this.load.image('almondMilk', 'assets/almondMilk.png');
		//food
		this.load.image('cookie', 'assets/cookie.png');
		this.load.image('muffin', 'assets/muffin.png');
		this.load.image('cakepop', 'assets/cakepop.png');
		//syrups
		this.load.image('lemonPump', 'assets/lemonPump.png');
		this.load.image('raspberryPump', 'assets/raspberryPump.png');
		this.load.image('mintPump', 'assets/mintPump.png');
		//instructions
		this.load.image('instruction1', 'assets/instruction1.png');
		this.load.image('instruction2', 'assets/instruction2.png');
		this.load.image('instruction3', 'assets/instruction3.png');
		this.load.image('clear', 'assets/clear.png');
		this.load.image('send', 'assets/send.png');
		this.load.image('winScene', 'assets/winScreen.png');
		this.load.image('narrativeScene', 'assets/narrativeScene.png'); //Diya- added
		this.load.image('instructionsScene', 'assets/InstructionsScene.png'); //diya - added
		this.load.image('orangeWhiteCat', 'assets/orangeWhiteCat.png');
		this.load.image('accessoriesPseudo', 'assets/accessoriesPseudo.png');
		this.load.image('basesPseudo', 'assets/basesPseudo.png');
		this.load.image('clothingPseudo', 'assets/clothingPseudo.png');
		this.load.image('hatsPseudo', 'assets/hatsPseudo.png');
		this.load.image('leftArrow', 'assets/ArrowLeft.png');
		this.load.image('rightArrow', 'assets/ArrowRight.png');
		this.load.image('flipButton', 'assets/FlipButton.png');
	}

	create() {
		this.scene.start('TitleScene');
	}

}
