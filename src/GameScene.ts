import Cat from "./objects/Cat";

export default class GameScene extends Phaser.Scene {
    private background: any;
    private counter: any;
    private instruction: any;
    private clear: any;
    private send: any;
    private cup: any;
    //private whiteCat: any;
    //private orangeCat: any;
    private cat?: Cat;
    private catType?: string;
    private oranges: any;
    private vanilla: any;

    private rng = Math.floor(Math.random() * 2) + 1; // rng for which cat to send out

    private wantedIngredient = ""; // string to hold the desired ingredient for each cat

    private myCounter: { //myCounter, 2 arrays titled oranges and vanilla which hold the images that go onto the Counter
        oranges: Phaser.GameObjects.Image[];
        vanilla: Phaser.GameObjects.Image[];
      } = {
        oranges: [],
        vanilla: [],
      };

  
    constructor(){
        super({key: 'GameScene'});
    }

    create(){
        //set background
        this.background = this.add.image(this.scale.width/2, this.scale.height/2, "background");
        //set counter
        this.counter = this.add.image(700, 500, "counter");
        //set instructions
        this.instruction = this.add.image(150, 180, "instruction1");
        this.cup = this.add.image(700, 500, "cup");
        //set ingredients
        this.oranges = this.add.group();
        this.vanilla = this.add.group();
        //set their images and buttons
        const orangesImage = this.add.image(300, 800, 'oranges').setInteractive();
        orangesImage.on('pointerdown', () => this.handleOrangeClick());
        this.oranges.add(orangesImage);
        const vanillaImage = this.add.image(1100, 750, 'vanilla').setInteractive();
        vanillaImage.on('pointerdown', () => this.handleVanillaClick());
        this.vanilla.add(vanillaImage);
        //clear button
        this.clear = this.add.image(1350, 100, 'clear').setInteractive().on('pointerdown', () => this.handleClearClick());
        //send button
        this.send = this.add.image(1350, 200, 'send').setInteractive().on('pointerdown', () => this.handleSendClick());
        if (this.rng === 1){ // rng option for orange cat
            //this.orangeCat = this.add.image(700, 150, "orangeCat").setScale(.25); //throw an orange cat behind the counter

            this.catType = 'orange';

        }
        else{

            this.catType = 'white';

        }

        this.cat = new Cat(this, 700, 150, this.catType);

        this.wantedIngredient = this.cat.wantedIngredients[0];

    }
    handleClearClick() {
        const keys: ('oranges' | 'vanilla')[] = ['oranges', 'vanilla'];
      
        keys.forEach((ingredientKey) => {
          this.myCounter[ingredientKey].forEach((ingredient: Phaser.GameObjects.Image) => {
            if (
              (ingredient.texture.key === 'oranges' &&
                (ingredient.x !== 300 || ingredient.y !== 800)) ||
              (ingredient.texture.key === 'vanilla' &&
                (ingredient.x !== 1100 || ingredient.y !== 750))
            ) {
              ingredient.destroy();
            }
          });
        });
      
        this.myCounter.oranges.length = 0;
        this.myCounter.vanilla.length = 0;
      }

      handleSendClick(){
        if ((this.wantedIngredient === "oranges" && this.myCounter.oranges.length>0 && this.myCounter.vanilla.length === 0)||
         (this.wantedIngredient === "vanilla" && this.myCounter.vanilla.length>0 && this.myCounter.oranges.length === 0)){
            this.scene.start('winScene');
        }
        else{
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

      handleOrangeClick() {
        const newOranges = this.add.image(700, 500, 'oranges').setScale(0.25);
        this.addToMyCounter(newOranges);
      }
    
      handleVanillaClick() {
        const newVanilla = this.add.image(700, 400, 'vanilla').setScale(0.35);
        this.addToMyCounter(newVanilla);
      }
    
      addToMyCounter(image: Phaser.GameObjects.Image) {
        const key = image.texture.key;
        if (key === 'oranges' || key === 'vanilla') {
          this.myCounter[key].push(image);
        }
      }

    
    
}
