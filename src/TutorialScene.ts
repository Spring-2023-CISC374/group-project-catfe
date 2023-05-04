import Cat from "./objects/Cat";

export default class TutorialScene extends Phaser.Scene {
    private background: any;
    private counter: any;
    private cup: any;
    private instruction: any;
    private clear: any;
    private send: any;
    private cat?: Cat;
    private catType?: string;
    private caramelLatte: any;
    private vanillaLatte: any;
    private blackCoffee: any;
    private tutorialMessage: any;
    private level: integer = 1;

    constructor(){
        super( {key: 'TutorialScene'});
    }

    private rng = Math.floor(Math.random() * 2) + 1; // rng for which cat to send out


    create(){
        //set background
        this.background = this.add.image(this.scale.width/2, this.scale.height/2, "background");
        //set counter
        this.counter = this.add.image(700, 500, "counter");
        //set cup
        this.cup = this.add.image(700,500, "cup").setScale(.25);
        //set instructions
        this.instruction = this.add.image(150,180, "instruction1");
        //set ingredients
        this.caramelLatte = this.add.group();
        this.vanillaLatte = this.add.group();
        this.blackCoffee = this.add.group();
        //set their images and buttons
        const caramelLatteImage = this.add.image(300, 800, 'caramelLatte').setScale(.3);
        this.caramelLatte.add(caramelLatteImage);
        const vanillaLatteImage = this.add.image(1100, 750, 'vanillaLatte');
        this.vanillaLatte.add(vanillaLatteImage);
        const blackCoffeeImage = this.add.image(750, 750, 'blackCoffee').setScale(.3);
        this.blackCoffee.add(blackCoffeeImage);
        //clear button
        this.clear = this.add.image(1350, 100, 'clear');
        //send button
        this.send = this.add.image(1350, 200, 'send');
        if (this.rng === 1) { // rng option for orange cat
            //this.orangeCat = this.add.image(700, 150, "orangeCat").setScale(.25); //throw an orange cat behind the counter

            this.catType = 'orange';

        }
        else {

            this.catType = 'white';

        }

        this.cat = new Cat(this, 700, 150, this.catType, 1);
        this.cat.setVisible(true);
      
        //BEGIN TUTORIAL: 
        this.tutorialMessage = this.add.text(0, 0, 'Welcome to Catfe!\nClick anywhere to continue.', { font: '32px Monospace',
        color: '#ffffff',
        backgroundColor: 'pink', 
        padding: {x:32, y:32} });
        this.background.setInteractive().on('pointerdown', () => {this.secondTutorial();});
        
    
    }
    secondTutorial() {
    // Remove the previous tutorial text
        this.tutorialMessage.destroy();
        // Create and display the next tutorial message
        this.tutorialMessage = this.add.text(500, 250, 'Our adorable customers\nwill be here! Select the\ncorrect ingredient according\nto the side panel in the\ntop left corner!', 
        { font: '20px Monospace', 
        color: '#ffffff', backgroundColor: 'pink',
        padding: {x:20, y:20} });
        this.background.setInteractive().on('pointerdown', () => {this.thirdTutorial();});
    }

    thirdTutorial() {
        this.tutorialMessage.destroy();
        // Create and display the next tutorial message
        this.tutorialMessage = this.add.text(900, 50, 'Click here to send off\nyour purrfect creation\nor undo!', 
        { font: '20px Monospace', 
        color: '#ffffff',
        backgroundColor: 'pink',
        padding: {x:20, y:20} });
        this.background.setInteractive().on('pointerdown', () => {this.fourthTutorial();});

    }

    fourthTutorial() {
        this.tutorialMessage.destroy();
        // Create and display the next tutorial message
        this.tutorialMessage = this.add.text(500, 300, "That's all there is to it! Click anywhere to get started!",{ font: '20px Monospace', 
        color: '#ffffff',
        backgroundColor: 'pink',
        padding: {x:20, y:20} });
        this.background.setInteractive().on('pointerdown', () => {this.scene.start('GameScene', {level: this.level, money: 0})});
    }
        

}


