import Phaser from 'phaser'

export default class winScene extends Phaser.Scene{

    private button: any;

    constructor(){
        super({key: 'winScene'});
    }

    create(){
        this.add.image(this.scale.width/2, this.scale.height/2, "winScene")
    }

    
}