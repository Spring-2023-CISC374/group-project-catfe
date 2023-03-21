export { }

class Cat extends Phaser.Physics.Arcade.Sprite {

    public catType: string;
    public accessory: string;
    public wantedIngredients: string[];
    //can add more variables as necessary; i.e. shirt, glasses, etc. and just add parameters to the constructor


    constructor(scene, x: number, y: number, catType: string, acc: string = 'none') {
        super(scene, x, y, catType);

        this.catType = catType;
        this.accessory = acc;
        this.wantedIngredients = this.determineOrder();
    }

    determineOrder() {
        if (this.catType === 'orange') {
            return ['oranges'];
        } else if (this.catType === 'white') {
            return ['vanilla'];
        } else {
            return ['anything!'];
        }
    }
}