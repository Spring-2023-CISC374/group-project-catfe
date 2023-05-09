import Cat from "./objects/Cat";

export default class GameScene extends Phaser.Scene {
    public background: any;
    public wall: any;
    public countertop: any;
    public counter: any;
    public instruction: any;
    public clear: any;
    public send: any;
    public cup: any;
    //ingredients
    private caramelLatte: any;
    private vanillaLatte: any;
    private blackCoffee: any;
    //milk
    private milk: any;
    private oatMilk: any;
    private almondMilk: any;
    //food
    private cookie: any;
    private muffin: any;
    private cakepop: any;
    //syrups
    private lemonPump: any;
    private raspberryPump: any;
    private mintPump: any;
    //money
    private money: integer = 0;
    private moneyCount: any;
    //levels
    public levelCount: any;
    private level: integer = 0;
    private final_level: integer = 4;
    private instIndex = 0;
    private nextButton?: Phaser.GameObjects.Image;
    private prevButton?: Phaser.GameObjects.Image;
    private flipButton?: Phaser.GameObjects.Image;
    private instructionPseudo?: Phaser.GameObjects.Image;

    private cats: Array<Cat> = [];
    private queue: Array<Cat> = [];

    private myCounter: { //myCounter, 2 arrays titled caramelLatte and vanillaLatte which hold the images that go onto the Counter
        caramelLatte: Phaser.GameObjects.Image[];
        vanillaLatte: Phaser.GameObjects.Image[];
        blackCoffee: Phaser.GameObjects.Image[];
        milk: Phaser.GameObjects.Image[];
        oatMilk: Phaser.GameObjects.Image[];
        almondMilk: Phaser.GameObjects.Image[];
        cookie: Phaser.GameObjects.Image[];
        muffin: Phaser.GameObjects.Image[];
        cakepop: Phaser.GameObjects.Image[];
        lemonPump: Phaser.GameObjects.Image[];
        raspberryPump: Phaser.GameObjects.Image[];
        mintPump: Phaser.GameObjects.Image[];
      } = {
        caramelLatte: [],
        vanillaLatte: [],
        blackCoffee: [],
        milk: [],
        oatMilk: [],
        almondMilk: [],
        cookie: [],
        muffin: [],
        cakepop: [],
        lemonPump: [],
        raspberryPump: [],
        mintPump: []
      };
      private instructionKeys: string[] = [ //instruction sets that correspond to each level
        'instruction1',
        'instruction2',
        'instruction3',
      ];

    private pseudocodeInstructions: string[] = [ // pseudocode instructions, taking the form of a more detailed booklet kind of thing
        'basesPseudo',
        'accessoriesPseudo',
        'hatsPseudo',
        'clothingPseudo'
    ]
    

  
    constructor(){
        super({key: 'GameScene'});
    }

    create(data: {level: integer, money: integer}){
        this.level = data.level;
        this.money = data.money;
        //set wall and counter
        this.wall = this.add.image(this.scale.width/2, this.scale.height/2, "wall");

        //DON'T MOVE! needs to stay here so that the countertop is brought forward and cats are behind it 
        this.cats = [new Cat(this, 725, 390, 'l1b', 1),
        new Cat(this, 725, 390, 'l1t', 1), //Put the white cat far down to test if it doesn't show up(it doesn't, it's behind counter)
        new Cat(this, 725, 390, 'l1w', 1),
        new Cat(this, 725, 390, 'l2b1', 2),
        new Cat(this, 725, 390, 'l2b2', 2),
        new Cat(this, 725, 390, 'l2t1', 2),
        new Cat(this, 725, 390, 'l2t2', 2),
        new Cat(this, 725, 390, 'l2w1', 2),
        new Cat(this, 725, 390, 'l2w2', 2),
        new Cat(this, 725, 390, 'l3b1', 3),
        new Cat(this, 725, 390, 'l3b2', 3),
        new Cat(this, 725, 390, 'l3t1', 3),
        new Cat(this, 725, 390, 'l3t2', 3),
        new Cat(this, 725, 390, 'l3w1', 3),
        new Cat(this, 725, 390, 'l3w2', 3),
        new Cat(this, 725, 390, 'l4b1', 4),
        new Cat(this, 725, 390, 'l4b2', 4),
        new Cat(this, 725, 390, 'l4t1', 4),
        new Cat(this, 725, 390, 'l4w1', 4),

    ];
      // Don't move the countertop either :)
        this.countertop = this.add.image(this.scale.width/2, this.scale.height/2, "countertop");

        //set counter
        this.counter = this.add.image(700, 500, "counter");
        //set instructions
        const instructionKey = this.instructionKeys[this.level - 1] || 'instruction3'; //sets proper instruction based on what current level is
        this.instruction = this.add.image(230, 230, instructionKey).setScale(.55);
        
        //set ingredients
        this.caramelLatte = this.add.group();
        this.vanillaLatte = this.add.group();
        this.blackCoffee = this.add.group();
        this.milk = this.add.group();
        this.oatMilk = this.add.group();
        this.almondMilk = this.add.group();
        this.cookie = this.add.group();
        this.muffin = this.add.group();
        this.cakepop = this.add.group();
        this.lemonPump = this.add.group();
        this.raspberryPump = this.add.group();
        this.mintPump = this.add.group();

        //set their images and buttons
        const caramelLatteImage = this.add.image(600, 700, 'caramelLatte').setInteractive().setScale(.25);
        caramelLatteImage.on('pointerdown', () => this.handleCaramelClick());
        this.caramelLatte.add(caramelLatteImage);
        const vanillaLatteImage = this.add.image(900, 700, 'vanillaLatte').setInteractive().setScale(.2);
        vanillaLatteImage.on('pointerdown', () => this.handleVanillaClick());
        this.vanillaLatte.add(vanillaLatteImage);
        const blackCoffeeImage = this.add.image(750, 700, 'blackCoffee').setInteractive().setScale(.2);
        blackCoffeeImage.on('pointerdown', () => this.handleCoffeeClick());
        this.blackCoffee.add(blackCoffeeImage);
        const milkImage = this.add.image(1450, 525, 'milk').setInteractive().setScale(.4);
        milkImage.on('pointerdown', () => this.handleMilkClick());
        this.milk.add(milkImage);
        const oatMilkImage = this.add.image(1450, 638, 'oatMilk').setInteractive().setScale(.4);
        oatMilkImage.on('pointerdown', () => this.handleOatMilkClick());
        this.oatMilk.add(oatMilkImage);
        const almondMilkImage = this.add.image(1440, 760, 'almondMilk').setInteractive().setScale(.42);
        almondMilkImage.on('pointerdown', () => this.handleAlmondMilkClick());
        this.almondMilk.add(almondMilkImage);
        const cookieImage = this.add.image(100, 525, 'cookie').setInteractive().setScale(.3);
        cookieImage.on('pointerdown', () => this.handleCookieClick());
        this.cookie.add(cookieImage);       
        const muffinImage = this.add.image(100, 645, 'muffin').setInteractive().setScale(.3);
        muffinImage.on('pointerdown', () => this.handleMuffinClick());
        this.muffin.add(muffinImage);
        const cakepopImage = this.add.image(100, 800, 'cakepop').setInteractive().setScale(.3);
        cakepopImage.on('pointerdown', () => this.handleCakepopClick());
        this.cakepop.add(cakepopImage);
        const lemonPumpImage = this.add.image(1100, 495, 'lemonPump').setInteractive().setScale(.38);
        lemonPumpImage.on('pointerdown', () => this.handleLemonPumpClick());
        this.lemonPump.add(lemonPumpImage);
        const raspberryPumpImage = this.add.image(1200, 495, 'raspberryPump').setInteractive().setScale(.38);
        raspberryPumpImage.on('pointerdown', () => this.handleRaspberryPumpClick());
        this.raspberryPump.add(raspberryPumpImage);
        const mintPumpImage = this.add.image(1300, 495, 'mintPump').setInteractive().setScale(.38);
        mintPumpImage.on('pointerdown', () => this.handleMintPumpClick());
        this.mintPump.add(mintPumpImage);
        //clear button
        this.clear =this.add.text(1350, 100, 'Clear', { font: '30px Avenir',
        color: 'white',
        backgroundColor: '#4a2511', 
        padding: {x:20, y:20} }).setInteractive().on('pointerdown', () => this.handleClearClick());
        //send button
        this.send = this.add.text(1350, 200, 'Send', { font: '30px Avenir',
        color: 'white',
        backgroundColor: '#4a2511', 
        padding: {x:20, y:20} }).setInteractive().on('pointerdown', () => this.handleSendClick());

        this.moneyCount = this.add.text(500, 16, 'Money: '+this.money, { font: '30px Avenir',
        color: '#4a2511',
        backgroundColor: 'white', 
        padding: {x:10, y:10}});

        this.levelCount = this.add.text(500, 100, 'Level: '+this.level, { font: '30px Avenir',
        color: '#4a2511',
        backgroundColor: 'white', 
        padding: {x:10, y:10}});

        this.cats = this.cats.filter(cat => cat.level <= this.level); // filters cats based on their level
        this.cup = this.add.image(750, 500, "cup").setScale(.25);

        while (this.cats.length > 0) {
            const rng: number = Math.floor(Math.random() * this.cats.length); // rng for which cat to send out
            this.queue.push(this.cats.splice(rng, 1)[0]);
        }
        this.queue[0].setVisible(true);

        this.instructionPseudo = this.add.image(175, 180, this.pseudocodeInstructions[this.instIndex]);
        this.instructionPseudo.setVisible(false);

        this.flipButton = this.add.image(25, 25, 'flipButton').setInteractive();
        this.flipButton.on('pointerdown', () => this.handleFlipClick());
        this.prevButton = this.add.image(80, 25, 'leftArrow').setInteractive();
        this.prevButton.on('pointerdown', () => this.handlePrevClick());
        this.nextButton = this.add.image(145, 25, 'rightArrow').setInteractive();
        this.nextButton.on('pointerdown', () => this.handleNextClick());

    }
    handleClearClick() {
      const keys: ('caramelLatte' | 'vanillaLatte'  | 'blackCoffee' | 'milk' | 'almondMilk' | 'oatMilk' | 'cookie' | 'muffin' | 'cakepop' | 'lemonPump' | 'mintPump' | 'raspberryPump')[] = ['caramelLatte', 'vanillaLatte', 'blackCoffee', 'milk', 'almondMilk', 'oatMilk', 'cookie', 'muffin', 'cakepop','lemonPump','mintPump', 'raspberryPump'];
      
      keys.forEach((ingredientKey) => {
          this.myCounter[ingredientKey].forEach((ingredient: Phaser.GameObjects.Image) => { 
              ingredient.destroy();
          });
      });
      
      this.myCounter.caramelLatte.length = 0;
      this.myCounter.vanillaLatte.length = 0;
      this.myCounter.blackCoffee.length = 0;
      this.myCounter.milk.length = 0;
      this.myCounter.oatMilk.length = 0;
      this.myCounter.almondMilk.length = 0;
      this.myCounter.cookie.length = 0;
      this.myCounter.muffin.length = 0;
      this.myCounter.cakepop.length = 0;
      this.myCounter.lemonPump.length = 0;
      this.myCounter.raspberryPump.length = 0;
      this.myCounter.mintPump.length = 0;
  }

      handleSendClick() {
        const wantedIngredients = this.queue[0].wantedIngredients;
        const hasCaramelLatte = this.myCounter.caramelLatte.length > 0;
        const hasVanillaLatte = this.myCounter.vanillaLatte.length > 0;
        const hasBlackCoffee = this.myCounter.blackCoffee.length > 0;
        const hasMilk = this.myCounter.milk.length > 0;
        const hasOatMilk = this.myCounter.oatMilk.length > 0;
        const hasAlmondMilk = this.myCounter.almondMilk.length > 0;
        const hasCookie = this.myCounter.cookie.length > 0;
        const hasMuffin = this.myCounter.muffin.length > 0;
        const hasCakepop = this.myCounter.cakepop.length > 0;
        const hasLemonPump = this.myCounter.lemonPump.length > 0;
        const hasRaspberryPump = this.myCounter.raspberryPump.length > 0;
        const hasMintPump = this.myCounter.mintPump.length > 0;
    
        const isCorrectOrder =
            (wantedIngredients.includes("caramelLatte") === hasCaramelLatte) &&
            (wantedIngredients.includes("vanillaLatte") === hasVanillaLatte) &&
            (wantedIngredients.includes("blackCoffee") === hasBlackCoffee) &&
            (wantedIngredients.includes("milk") === hasMilk) &&
            (wantedIngredients.includes("oatMilk") === hasOatMilk) &&
            (wantedIngredients.includes("almondMilk") === hasAlmondMilk) &&
            (wantedIngredients.includes("cookie") === hasCookie) &&
            (wantedIngredients.includes("muffin") === hasMuffin) &&
            (wantedIngredients.includes("cakepop") === hasCakepop) &&
            (wantedIngredients.includes("lemonPump") === hasLemonPump) &&
            (wantedIngredients.includes("mintPump") === hasMintPump) &&
            (wantedIngredients.includes("raspberryPump") === hasRaspberryPump);
    
        if (isCorrectOrder) {
            this.queue[0].setVisible(false);
            this.queue.shift();
            this.handleClearClick();
            this.money += 10;
            this.moneyCount.setText('Money: ' + this.money);
            if (this.queue.length === 0) {
              if (this.level === this.final_level){
                this.scene.start('FinalWinScene', { money: this.money });
              }
              else{
                this.scene.start('winScene', { money: this.money, level: this.level });
              }
            } else {
                this.queue[0].setVisible(true);
            }
        } else {
            if (this.money >= 2) {
                this.money -= 2;
                this.moneyCount.setText('Money: ' + this.money);
            }
            this.handleClearClick();
            const tempText = this.add.text(920, 150, "Wrong! Try Again!", { font: '30px Avenir',
            color: '#4a2511',
            backgroundColor: 'white', 
            padding: {x:20, y:20}}
            );
    
            // Schedule the text to be destroyed after 'duration' milliseconds
            this.time.delayedCall(1000, () => {
                tempText.destroy();
            });
        }
    }
    
      handleCaramelClick() {
        const newCaramelLatte = this.add.image(700, 500, 'caramelLatte').setScale(0.05);
        this.addToMyCounter(newCaramelLatte);
      }
    
      handleVanillaClick() {
        const newVanilla = this.add.image(700, 400, 'vanillaLatte').setScale(0.15);
        this.addToMyCounter(newVanilla);
      }

      handleCoffeeClick() {
        const newCoffee = this.add.image(700, 400, 'blackCoffee').setScale(0.05);
        this.addToMyCounter(newCoffee);
      }

      handleFlipClick() {
        this.instructionPseudo?.setVisible(!this.instructionPseudo.visible);
        this.instruction.setVisible(!this.instruction.visible);
      }

      handlePrevClick() {
        if(this.instIndex>0){
          this.instIndex--;
          this.instructionPseudo?.setTexture(this.pseudocodeInstructions[this.instIndex]);
        }
      }

      handleNextClick() {
        if(this.instIndex<3){
          this.instIndex++;
          this.instructionPseudo?.setTexture(this.pseudocodeInstructions[this.instIndex]);
          //this.instructionPseudo = this.add.image(100, 100, this.pseudocodeInstructions[this.instIndex]);
        }
      }
    
      handleMilkClick() {
        const newMilk = this.add.image(700, 400, 'milk').setScale(0.175);
        this.addToMyCounter(newMilk);
      }
      handleOatMilkClick() {
        const newOatMilk = this.add.image(700, 400, 'oatMilk').setScale(0.175);
        this.addToMyCounter(newOatMilk);
      }
      handleAlmondMilkClick() {
        const newAlmondMilk = this.add.image(700, 400, 'almondMilk').setScale(0.175);
        this.addToMyCounter(newAlmondMilk);
      }
      handleCookieClick() {
        const newCookie = this.add.image(700, 400, 'cookie').setScale(0.1);
        this.addToMyCounter(newCookie);
      }
      handleMuffinClick() {
        const newMuffin = this.add.image(700, 400, 'muffin').setScale(0.1);
        this.addToMyCounter(newMuffin);
      }
      handleCakepopClick() {
        const newCakepop = this.add.image(700, 400, 'cakepop').setScale(0.1);
        this.addToMyCounter(newCakepop);
      }
      handleLemonPumpClick() {
        const newLemonPump = this.add.image(700, 400, 'lemonPump').setScale(0.1);
        this.addToMyCounter(newLemonPump);
      }
      handleRaspberryPumpClick() {
        const newRaspberryPump = this.add.image(700, 400, 'raspberryPump').setScale(0.1);
        this.addToMyCounter(newRaspberryPump);
      }
      handleMintPumpClick() {
        const newMintPump = this.add.image(700, 400, 'mintPump').setScale(0.1);
        this.addToMyCounter(newMintPump);
    }

    addToMyCounter(image: Phaser.GameObjects.Image) {
      const key = image.texture.key;
      console.log('Adding to counter:', key);  // Debug line
      if (key === 'caramelLatte' || key === 'vanillaLatte' || key === 'blackCoffee' || key === 'milk'||
      key === 'oatMilk' || key === 'almondMilk' || key === 'cookie' || key === 'muffin' || key === 'cakepop'
      || key === 'lemonPump' || key === 'raspberryPump' || key === 'mintPump') {
        this.myCounter[key].push(image);
      }
    }
  


      
}
