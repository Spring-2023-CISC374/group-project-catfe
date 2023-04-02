import Cat from "./objects/Cat";

export default class tutorialScene extends Phaser.Scene {
  private background: any;
  private counter: any;
  private instruction: any;
  private clear: any;
  private send: any;
  // add Cats here
  // EXAMPLE --------------------------------------------------------------------------------------------
    //private whiteCat: Cat;
    //private orangeCat: Cat;
    private cat?: Cat;
    private catType?: string;

  // add Ingredients here 
  // EXAMPLE --------------------------------------------------------------------------------------------
  private vanilla: any;
  private oranges: any

    private rng = Math.floor(Math.random() * 2) + 1; // rng for which cat to send out

    private wantedIngredient = ""; // string to hold the desired ingredient for each cat

    private myCounter: { //myCounter is comprised of menu item arrays that hold the images that go into each cat's inventory
        // ingredients
        // EXAMPLE --------------------------------------------------------------------------------------
        oranges: Phaser.GameObjects.Image[]; 
        vanilla: Phaser.GameObjects.Image[];
      } = {
        //arrays of ingredients
        // EXAMPLE --------------------------------------------------------------------------------------
        oranges: [],
        vanilla: [],
      };

  
    constructor(){
        super({key: 'baseScene'});
    }

    create(){
        //set background
        this.background = this.add.image(this.scale.width/2, this.scale.height/2, "background");
        //set counter
        this.counter = this.add.image(700, 500, "counter");
        //set instructions
        this.instruction = this.add.image(150,180, "instruction1");
        //set ingredients
        // EXAMPLE --------------------------------------------------------------------------------------
        this.oranges = this.add.group();
        this.vanilla = this.add.group();


        //set their images and buttons 
        // EXAMPLE --------------------------------------------------------------------------------------
        const orangesImage = this.add.image(300, 800, 'oranges').setInteractive();
        orangesImage.on('pointerdown', () => this.handleOrangeClick());
        this.oranges.add(orangesImage);
        const vanillaImage = this.add.image(1100, 750, 'vanilla').setInteractive();
        vanillaImage.on('pointerdown', () => this.handleVanillaClick());
        this.vanilla.add(vanillaImage);

        //clear button
        this.clear = this.add.image(1350, 100, 'clear').setInteractive().on('pointerdown', () => this.handleClearClick());
        //send button
        this.clear = this.add.image(1350, 200, 'send').setInteractive().on('pointerdown', () => this.handleSendClick());
        
        
        if (this.rng === 1){ // rng option for orange cat
          //set cats
          // EXAMPLE ------------------------------------------------------------------------------------
            //this.orangeCat = this.add.image(700, 150, "orangeCat").setScale(.25); //throw an orange cat behind the counter
            //this.orangeCat = new Cat(this, 700, 150, 'orange');
            //this.add.existing(this.orangeCat);
            this.catType = 'orange';
        }
        else{
          // EXAMPLE ------------------------------------------------------------------------------------
            //this.whiteCat = this.add.image(700,150, "whiteCat").setScale(.25); //throw a white cat behind the counter
            this.catType = 'white';
        }

        this.cat = new Cat(this, 700, 150, this.catType);
        this.wantedIngredient = this.cat.wantedIngredients[0];

    }

    handleClearClick() {
      // EXAMPLE ----------------------------------------------------------------------------------------
      const keys: ('oranges' | 'vanilla')[] = ['oranges', 'vanilla'];
      
      keys.forEach((ingredientKey) => {
        this.myCounter[ingredientKey].forEach((ingredient: Phaser.GameObjects.Image) => {
          // EXAMPLE ------------------------------------------------------------------------------------
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
      // EXAMPLE ----------------------------------------------------------------------------------------
        this.myCounter.oranges.length = 0;
        this.myCounter.vanilla.length = 0;
      }

      handleSendClick(){
        // EXAMPLE --------------------------------------------------------------------------------------
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
        // EXAMPLE --------------------------------------------------------------------------------------
        const newOranges = this.add.image(700, 500, 'oranges').setScale(0.25);
        this.addToMyCounter(newOranges);
      }
    
      handleVanillaClick() {
        // EXAMPLE --------------------------------------------------------------------------------------
        const newVanilla = this.add.image(700, 400, 'vanilla').setScale(0.35);
        this.addToMyCounter(newVanilla);
      }
    
      addToMyCounter(image: Phaser.GameObjects.Image) {
        const key = image.texture.key;
        // EXAMPLE --------------------------------------------------------------------------------------
        if (key === 'oranges' || key === 'vanilla') {
          this.myCounter[key].push(image);
        }
      }

    
    
}