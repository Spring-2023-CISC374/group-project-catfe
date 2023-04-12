import Phaser from 'phaser'

export default class winScene extends Phaser.Scene{

    private button: any;
    private moneyCount: any;

    constructor(){
        super({key: 'winScene'});
    }

    create(data: { money: integer; }){
        this.add.image(this.scale.width/2, this.scale.height/2, "winScene")
        this.moneyCount = this.add.text(300, 16, 'Money: '+data.money, { fontSize: '32px', color: 'red'});
    }

    
}