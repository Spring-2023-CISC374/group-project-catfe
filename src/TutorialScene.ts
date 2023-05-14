export default class TutorialScene extends Phaser.Scene {
    public background: any;
    public countertop: any;
    public instruction: any;
    public clear: any;
    public send: any;
    private level: integer = 1;
    public cup: Phaser.GameObjects.Group | any;
    //private whiteCat: Phaser.GameObjects.Group;
    private caramelLatte: any;
    private vanillaLatte: any;
    private blackCoffee: any;
    private tutorialMessage: any;
    private wall: any;
    private almondMilk: any;
    private milk: any;
    private oatMilk: any;
    private cookie: any;
    private muffin: any;
    private cakepop: any;
    private lemonPump: any;
    private raspberryPump: any;
    private mintPump: any;

    constructor() {
        super({ key: 'TutorialScene' });
    }

    create() {
        // set background
        //this.background = this.add.image(this.scale.width/2, this.scale.height/2, "background");
        this.countertop = this.add.image(this.scale.width / 2, this.scale.height / 2, "countertop");
        this.wall = this.add.image(this.scale.width / 2, this.scale.height / 2, "wall");


        // set default cat 
        //const catImage = this.add.image(725, 390, "whiteCat").setScale(.25);
        //this.whiteCat = this.add.group();
        //this.whiteCat.add(catImage);

        this.countertop = this.add.image(this.scale.width / 2, this.scale.height / 2, "countertop");

        // set cup
        const cupImage = this.add.image(750, 500, 'cup').setScale(.25);
        this.cup = this.add.group();
        this.cup.add(cupImage);

        // set instructions
        this.instruction = this.add.image(230, 230, "instruction1").setScale(.55);

        // set ingredients
        this.almondMilk = this.add.group();
        this.milk = this.add.group();
        this.oatMilk = this.add.group();
        this.cookie = this.add.group();
        this.muffin = this.add.group();
        this.cakepop = this.add.group();
        this.lemonPump = this.add.group();
        this.raspberryPump = this.add.group();
        this.mintPump = this.add.group();
        this.caramelLatte = this.add.group();
        this.vanillaLatte = this.add.group();
        this.blackCoffee = this.add.group();
        //set their images and buttons
        const caramelLatteImage = this.add.image(600, 700, 'caramelLatte').setScale(.25);
        this.caramelLatte.add(caramelLatteImage);
        const vanillaLatteImage = this.add.image(900, 700, 'vanillaLatte').setScale(.2);
        this.vanillaLatte.add(vanillaLatteImage);
        const blackCoffeeImage = this.add.image(750, 700, 'blackCoffee').setScale(.2);
        this.blackCoffee.add(blackCoffeeImage);
        const almondMilkImage = this.add.image(1440, 760, 'almondMilk').setScale(.42);
        this.almondMilk.add(almondMilkImage);
        const milkImage = this.add.image(1450, 525, 'milk').setScale(.4);
        this.milk.add(milkImage);
        const oatMilkImage = this.add.image(1450, 638, 'oatMilk').setScale(.4);
        this.oatMilk.add(oatMilkImage);
        const cookieImage = this.add.image(100, 525, 'cookie').setScale(.3);
        this.cookie.add(cookieImage);
        const muffinImage = this.add.image(100, 645, 'muffin').setScale(.3);
        this.muffin.add(muffinImage);
        const cakepopImage = this.add.image(100, 800, 'cakepop').setScale(.3);
        this.cakepop.add(cakepopImage);
        const lemonPumpImage = this.add.image(1100, 495, 'lemonPump').setScale(.38);
        this.lemonPump.add(lemonPumpImage);
        const raspberryPumpImage = this.add.image(1200, 495, 'raspberryPump').setScale(.38);
        this.raspberryPump.add(raspberryPumpImage);
        const mintPumpImage = this.add.image(1300, 495, 'mintPump').setScale(.38);
        this.mintPump.add(mintPumpImage);

        //clear button
        this.clear =this.add.text(1350, 100, 'Clear', { font: '30px Avenir',
        color: 'white',
        backgroundColor: '#4a2511', 
        padding: {x:20, y:20} });
        //send button
        this.send = this.add.text(1350, 200, 'Send', { font: '30px Avenir',
        color: 'white',
        backgroundColor: '#4a2511', 
        padding: {x:20, y:20} });
      
        //BEGIN TUTORIAL: 
        this.tutorialMessage = this.add.text(0, 0, 'Welcome to Catfe!\nClick anywhere to continue.', { font: '30px Avenir',
        color: 'white',
        backgroundColor: '#4a2511', 
        padding: {x:32, y:32} });
        this.wall.setInteractive().on('pointerdown', () => {this.secondTutorial();});
        
    
    }
    secondTutorial() {
    // Remove the previous tutorial text
        this.tutorialMessage.destroy();
        // Create and display the next tutorial message
        this.tutorialMessage = this.add.text(600, 320, 'Our adorable customers\nwill be here, behind the counter!\nSelect the correct ingredient\naccording to the side panel in the\ntop left corner!', 
        { font: '20px Avenir', 
        color: 'white', backgroundColor: '#4a2511',
        padding: {x:20, y:20} });
        this.wall.setInteractive().on('pointerdown', () => {this.thirdTutorial();});
    }

    thirdTutorial() {
        this.tutorialMessage.destroy();
        // Create and display the next tutorial message
        this.tutorialMessage = this.add.text(1100, 100, 'Click here to send off\nyour purrfect creation\nor undo!', 
        { font: '20px Avenir', 
        color: 'white',
        backgroundColor: '#4a2511',
        padding: {x:20, y:20} });
        this.wall.setInteractive().on('pointerdown', () => {this.fourthTutorial();});

    }

    fourthTutorial() {
        this.tutorialMessage.destroy();
        // Create and display the next tutorial message
        this.tutorialMessage = this.add.text(500, 300, "That's all there is to it! Click anywhere to get started!",{ font: '20px Avenir', 
        color: 'white',
        backgroundColor: '#4a2511',
        padding: {x:20, y:20} });
        this.wall.setInteractive().on('pointerdown', () => {this.scene.start('GameScene', {level: this.level, money: 0})});
    }
        

}


