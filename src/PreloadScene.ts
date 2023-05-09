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
			//L1
		this.load.image('l1b', 'assets/cats/L1-B.PNG');
		this.load.image('l1t', 'assets/cats/L1-T.PNG');
		this.load.image('l1w', 'assets/cats/L1-W.png');
			//L2
		this.load.image('l2b1', 'assets/cats/L2-B1.PNG');
		this.load.image('l2b2', 'assets/cats/L2-B2.PNG');
		this.load.image('l2t1', 'assets/cats/L2-T1.png');
		this.load.image('l2t2', 'assets/cats/L2-T2.PNG');
		this.load.image('l2w1', 'assets/cats/L2-W1.PNG');
		this.load.image('l2w2', 'assets/cats/L2-W2.png');
			//L3
		this.load.image('l3b1', 'assets/cats/L3-B1.PNG');
		this.load.image('l3b2', 'assets/cats/L3-B2.PNG');
		this.load.image('l3t1', 'assets/cats/L3-T1.png');
		this.load.image('l3t2', 'assets/cats/L3-T2.PNG');
		this.load.image('l3w1', 'assets/cats/L3-W1.PNG');
		this.load.image('l3w2', 'assets/cats/L3-W2.png');
			//L4
		this.load.image('l4b1', 'assets/cats/L4-B1.PNG');
		this.load.image('l4b2', 'assets/cats/L4-B2.PNG');
		this.load.image('l4t1', 'assets/cats/L4-T1.PNG');
		this.load.image('l4w2', 'assets/cats/L4-W2.PNG');
		
		//Cup
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
