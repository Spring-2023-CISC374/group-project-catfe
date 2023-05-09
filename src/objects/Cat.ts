export default class Cat extends Phaser.Physics.Arcade.Sprite {

    public catType: string;
    public accessory: string;
    public clothing: string;
    public hat: string;
    public wantedIngredients: string[];
    public level: number;
    //can add more variables as necessary; i.e. shirt, glasses, etc. and just add parameters to the constructor


    constructor(scene: Phaser.Scene, x: number, y: number, catType: string, level: number, acc = 'none', clothes = 'none', hat = 'none') {
        super(scene, x, y, catType.concat(''));

        this.catType = catType;
        this.accessory = acc;
        this.clothing = clothes;
        this.hat = hat;
        this.wantedIngredients = this.determineOrder();
        this.level = level;

        this.setScale(0.25);

        scene.add.existing(this);

        this.setVisible(false);
    }

    determineOrder() {
        if (this.catType === 'l1t') {
            return ['caramelLatte'];
        } else if (this.catType === 'l1w') {
            return ['vanillaLatte'];
        } else if (this.catType === 'l1b') {
            return ['blackCoffee'];
        } 
        else if (this.catType === 'l2b1') {
            return ['cookie', 'blackCoffee'];
        }
        else if (this.catType === 'l2b2') {
            return ['muffin', 'blackCoffee'];
        }
        else if (this.catType === 'l2t1') {
            return ['muffin', 'caramelLatte'];
        }
        else if (this.catType === 'l2t2') {
            return ['cakepop', 'caramelLatte'];
        }
        else if (this.catType === 'l2w1') {
            return ['cakepop', 'vanillaLatte'];
        }
        else if (this.catType === 'l2w2') {
            return ['cookie', 'vanillaLatte'];
        }
        else if (this.catType === 'l3b1') {
            return ['almondMilk', 'cookie', 'blackCoffee'];
        }
        else if (this.catType === 'l3b2') {
            return ['milk', 'muffin', 'blackCoffee'];
        }
        else if (this.catType === 'l3t1') {
            return ['oatMilk' ,'cookie', 'caramelLatte'];
        }
        else if (this.catType === 'l3t2') {
            return ['milk' ,'muffin', 'caramelLatte'];
        }
        else if (this.catType === 'l3w1') {
            return ['oatMilk' ,'cakepop', 'vanillaLatte'];
        }
        else if (this.catType === 'l3w2') {
            return ['almondMilk' ,'cookie', 'vanillaLatte'];
        }
        //
        else if (this.catType === 'l4b1') {
            return ['lemonPump','almondMilk', 'cookie', 'blackCoffee'];
        }
        else if (this.catType === 'l4b2') {
            return ['raspberryPump', 'oatMilk', 'muffin', 'blackCoffee'];
        }
        else if (this.catType === 'l4t1') {
            return ['mintPump','milk' ,'muffin', 'caramelLatte'];
        }
        else if (this.catType === 'l4w1') {
            return ['raspberryPump','oatMilk' ,'cakepop', 'vanillaLatte'];
        }
        else {
            return ['anything!'];
        }
    }
}