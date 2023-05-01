export default class Cat extends Phaser.Physics.Arcade.Sprite {

    public catType: string;
    public accessories: string[];
    public clothing: string;
    public wantedIngredients: string[];
    public level: number;
    //can add more variables as necessary; i.e. shirt, glasses, etc. and just add parameters to the constructor


    constructor(scene, x: number, y: number, catType: string, level: number, acc: string[] = ['none'], clothes: string = 'none') {
        super(scene, x, y, catType.concat('Cat'));

        this.catType = catType;
        this.accessories = acc;
        this.clothing = clothes;
        this.wantedIngredients = this.determineOrder();
        this.level = level;

        this.setScale(0.25);

        scene.add.existing(this);

        this.setVisible(false);
    }

    determineOrder() {
        if (this.catType === 'tan') {
            return ['caramelLatte'];
        } else if (this.catType === 'white') {
            return ['vanillaLatte'];
        } else if (this.catType === 'black') {
            return ['blackCoffee'];
        
        } 
        else if (this.catType === 'orangeWhite') {
            return ['caramelLatte', 'vanillaLatte'];
        }
        else {
            return ['anything!'];
        }
    }
}