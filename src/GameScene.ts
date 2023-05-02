import Cat from "./objects/Cat";

export default class GameScene extends Phaser.Scene {
    private background: any;
    private counter: any;
    private instruction: any;
    private clear: any;
    private send: any;
    private cup: any;
    private caramelLatte: any;
    private vanillaLatte: any;
    private blackCoffee: any;
    private money: integer = 0;
    private moneyCount: any;
    private levelCount: any;
    private level: integer = 0;
    private final_level: integer = 3;

    private cats: Array<Cat> = [];
    private queue: Array<Cat> = [];

    private myCounter: { //myCounter, 2 arrays titled caramelLatte and vanillaLatte which hold the images that go onto the Counter
        caramelLatte: Phaser.GameObjects.Image[];
        vanillaLatte: Phaser.GameObjects.Image[];
        blackCoffee: Phaser.GameObjects.Image[];
      } = {
        caramelLatte: [],
        vanillaLatte: [],
        blackCoffee: [],
      };
      private instructionKeys: string[] = [ //instruction sets that correspond to each level
        'instruction1',
        'instruction2',
        'instruction3',
      ];

  
    constructor(){
        super({key: 'GameScene'});
    }

    create(data: {level: integer, money: integer}){
        this.level = data.level;
        this.money = data.money;
        //set background
        this.background = this.add.image(this.scale.width/2, this.scale.height/2, "background");
        //set counter
        this.counter = this.add.image(700, 500, "counter");
        //set instructions
        const instructionKey = this.instructionKeys[this.level - 1] || 'instruction3'; //sets proper instruction based on what current level is
        this.instruction = this.add.image(150, 180, instructionKey);
        this.cup = this.add.image(700, 500, "cup");
        //set ingredients
        this.caramelLatte = this.add.group();
        this.vanillaLatte = this.add.group();
        this.blackCoffee = this.add.group();
        //set their images and buttons
        const caramelLatteImage = this.add.image(300, 800, 'caramelLatte').setInteractive().setScale(.3);
        caramelLatteImage.on('pointerdown', () => this.handleCaramelClick());
        this.caramelLatte.add(caramelLatteImage);
        const vanillaLatteImage = this.add.image(1100, 750, 'vanillaLatte').setInteractive();
        vanillaLatteImage.on('pointerdown', () => this.handleVanillaClick());
        this.vanillaLatte.add(vanillaLatteImage);
        const blackCoffeeImage = this.add.image(750, 750, 'blackCoffee').setInteractive().setScale(.3);
        blackCoffeeImage.on('pointerdown', () => this.handleCoffeeClick());
        this.blackCoffee.add(blackCoffeeImage);
        //clear button
        this.clear = this.add.image(1350, 100, 'clear').setInteractive().on('pointerdown', () => this.handleClearClick());
        //send button
        this.send = this.add.image(1350, 200, 'send').setInteractive().on('pointerdown', () => this.handleSendClick());

        this.moneyCount = this.add.text(300, 16, 'Money: '+this.money, { font: '30px Avenir',
        color: '#4a2511',
        backgroundColor: 'white', 
        padding: {x:10, y:10}});

        this.levelCount = this.add.text(300, 100, 'Level: '+this.level, { font: '30px Avenir',
        color: '#4a2511',
        backgroundColor: 'white', 
        padding: {x:10, y:10}});

        this.cats = [new Cat(this, 700, 150, 'tan', 1),
            new Cat(this, 700, 150, 'white', 1), 
            new Cat(this, 700, 150, 'black', 2),
            new Cat(this, 700, 150, 'orangeWhite', 3)
        ];
        this.cats = this.cats.filter(cat => cat.level <= this.level); // filters cats based on their level


        while (this.cats.length > 0) {
            let rng: number = Math.floor(Math.random() * this.cats.length); // rng for which cat to send out
            this.queue.push(this.cats.splice(rng, 1)[0]);
        }
        this.queue[0].setVisible(true);

        /*if (this.rng === 1){ // rng option for orange cat
            //this.orangeCat = this.add.image(700, 150, "orangeCat").setScale(.25); //throw an orange cat behind the counter

            this.catType = 'orange';

        }
        else{

            this.catType = 'white';

        }

        this.cat = new Cat(this, 700, 150, this.catType);

        this.wantedIngredient = this.cat.wantedIngredients[0];
        */
    }
    handleClearClick() {
        const keys: ('caramelLatte' | 'vanillaLatte'  | 'blackCoffee')[] = ['caramelLatte', 'vanillaLatte', 'blackCoffee'];
      
        keys.forEach((ingredientKey) => {
          this.myCounter[ingredientKey].forEach((ingredient: Phaser.GameObjects.Image) => { //checks that each wanted ingredient is correct
            if (
              (ingredient.texture.key === 'caramelLatte' &&
                (ingredient.x !== 300 || ingredient.y !== 800)) ||
              (ingredient.texture.key === 'vanillaLatte' &&
                (ingredient.x !== 700 || ingredient.y !== 775)) ||
              (ingredient.texture.key === 'blackCoffee' &&
                (ingredient.x !== 2000 || ingredient.y !== 750))
            ) {
              ingredient.destroy();
            }
          });
        });
      
        this.myCounter.caramelLatte.length = 0;
        this.myCounter.vanillaLatte.length = 0;
        this.myCounter.blackCoffee.length = 0;
      }

      handleSendClick() {
        const wantedIngredients = this.queue[0].wantedIngredients;
        const hasCaramelLatte = this.myCounter.caramelLatte.length > 0;
        const hasVanillaLatte = this.myCounter.vanillaLatte.length > 0;
        const hasBlackCoffee = this.myCounter.blackCoffee.length > 0;
    
        const isCorrectOrder =
            (wantedIngredients.includes("caramelLatte") === hasCaramelLatte) &&
            (wantedIngredients.includes("vanillaLatte") === hasVanillaLatte) &&
            (wantedIngredients.includes("blackCoffee") === hasBlackCoffee);
    
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
        const newVanilla = this.add.image(700, 400, 'vanillaLatte').setScale(0.35);
        this.addToMyCounter(newVanilla);
      }

      handleCoffeeClick() {
        const newCoffee = this.add.image(700, 400, 'blackCoffee').setScale(0.05);
        this.addToMyCounter(newCoffee);
      }
    
      addToMyCounter(image: Phaser.GameObjects.Image) {
        const key = image.texture.key;
        if (key === 'caramelLatte' || key === 'vanillaLatte' || key === 'blackCoffee') {
          this.myCounter[key].push(image);
        }
      }


      
}
