export default class Cat extends Phaser.Physics.Arcade.Sprite {

    public catType: string;
    public accessory: string;
    public clothing: string;
    public hat: string;
    public wantedIngredients: string[];
    public level: number;
    //can add more variables as necessary; i.e. shirt, glasses, etc. and just add parameters to the constructor


    constructor(scene: Phaser.Scene, x: number, y: number, catType: string, level: number, acc: string = 'none', clothes: string = 'none', hat: string = 'none') {
        super(scene, x, y, catType.concat('Cat'));

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
        if (this.catType === 'orange') {
            return ['peachTea'];
        } else if (this.catType === 'white') {
            return ['vanillaLatte'];
        } else if (this.catType === 'black') {
            return ['blackCoffee'];
        
        } 
        else if (this.catType === 'orangeWhite') {
            return ['peachTea', 'vanillaLatte'];
        }
        else {
            return ['anything!'];
        }
    }
}