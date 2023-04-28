import Cat from "./objects/Cat";

export default class GameScene extends Phaser.Scene {
    private background: any;
    private counter: any;
    private instruction: any;
    private clear: any;
    private send: any;
    private cup: any;
    private peachTea: any;
    private vanillaLatte: any;
    private blackCoffee: any;
    private money: integer = 0;
    private moneyCount: any;
    private levelCount: any;
    private level: integer = 0;

    private cats: Array<Cat> = [];
    private queue: Array<Cat> = [];

    private myCounter: { //myCounter, 2 arrays titled peachTea and vanillaLatte which hold the images that go onto the Counter
        peachTea: Phaser.GameObjects.Image[];
        vanillaLatte: Phaser.GameObjects.Image[];
        blackCoffee: Phaser.GameObjects.Image[];
      } = {
        peachTea: [],
        vanillaLatte: [],
        blackCoffee: [],
      };

  
    constructor(){
        super({key: 'GameScene'});
    }

    create(data: {level: integer}){
      this.level = data.level;
        //set background
        this.background = this.add.image(this.scale.width/2, this.scale.height/2, "background");
        //set counter
        this.counter = this.add.image(700, 500, "counter");
        //set instructions
        this.instruction = this.add.image(150, 180, "instruction1");
        this.cup = this.add.image(700, 500, "cup");
        //set ingredients
        this.peachTea = this.add.group();
        this.vanillaLatte = this.add.group();
        this.blackCoffee = this.add.group();
        //set their images and buttons
        const peachTeaImage = this.add.image(300, 800, 'peachTea').setInteractive();
        peachTeaImage.on('pointerdown', () => this.handlePeachTeaClick());
        this.peachTea.add(peachTeaImage);
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

        this.moneyCount = this.add.text(300, 16, 'Money: '+this.money, { fontSize: '32px', color: 'red'});
        this.levelCount = this.add.text(300, 48, 'Level: '+this.level, { fontSize: '32px', color: 'red'});
        this.cats = [new Cat(this, 700, 150, 'orange'),
            new Cat(this, 700, 150, 'white'), 
            new Cat(this, 700, 150, 'black')
        ];

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
        const keys: ('peachTea' | 'vanillaLatte'  | 'blackCoffee')[] = ['peachTea', 'vanillaLatte', 'blackCoffee'];
      
        keys.forEach((ingredientKey) => {
          this.myCounter[ingredientKey].forEach((ingredient: Phaser.GameObjects.Image) => {
            if (
              (ingredient.texture.key === 'peachTea' &&
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
      
        this.myCounter.peachTea.length = 0;
        this.myCounter.vanillaLatte.length = 0;
        this.myCounter.blackCoffee.length = 0;
      }

    handleSendClick() {
        if ((this.queue[0].wantedIngredients[0] === "peachTea" && this.myCounter.peachTea.length > 0 && this.myCounter.vanillaLatte.length === 0 && this.myCounter.blackCoffee.length === 0) ||
            (this.queue[0].wantedIngredients[0] === "vanillaLatte" && this.myCounter.vanillaLatte.length > 0 && this.myCounter.peachTea.length === 0 && this.myCounter.blackCoffee.length === 0) ||
            (this.queue[0].wantedIngredients[0] === "blackCoffee" && this.myCounter.blackCoffee.length > 0 && this.myCounter.peachTea.length === 0 && this.myCounter.vanillaLatte.length === 0)) {
            this.queue[0].setVisible(false);
            this.queue.shift();
            this.handleClearClick();
            this.money+=10;
            this.moneyCount.setText('Money: '+this.money);
            if (this.queue.length === 0) {
              this.scene.start('winScene', {money: this.money, level: this.level});
            } else {
                this.queue[0].setVisible(true);
            }
        }
        else{
          if(this.money>=2){
            this.money-=2;
            this.moneyCount.setText('Money: '+this.money);
          }  
          this.handleClearClick();
            const tempText = this.add.text(920, 150, "Wrong! Try Again!", {
                fontFamily: 'Arial',
                fontSize: '32px',
                color: '#FF0000',
              });
            
              // Schedule the text to be destroyed after 'duration' milliseconds
              this.time.delayedCall(1000, () => {
                tempText.destroy();
              });

        }
      }

      handlePeachTeaClick() {
        const newPeachTea = this.add.image(700, 500, 'peachTea').setScale(0.25);
        this.addToMyCounter(newPeachTea);
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
        if (key === 'peachTea' || key === 'vanillaLatte' || key === 'blackCoffee') {
          this.myCounter[key].push(image);
        }
      }

    
    
}
