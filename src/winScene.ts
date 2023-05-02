import Phaser from 'phaser'

export default class winScene extends Phaser.Scene{

    private button: any;
    private moneyCount: any;
    private levelCount: any;
    private level: integer = 0;
    private money: integer = 0;

    constructor(){
        super({key: 'winScene'});
    }

    create(data: { money: integer, level: integer; }){
        this.level = data.level;
        this.money = data.money;
        this.add.image(this.scale.width/2, this.scale.height/2, "winScene")
        this.moneyCount = this.add.text(300, 16, 'Money: '+data.money, { fontSize: '32px', color: 'red'});
        this.moneyCount = this.add.text(300, 48, 'Level: '+this.level, { fontSize: '32px', color: 'red'});
        const nextButton = this.add.text(400, 400, 'Next Level', { fontSize: '32px', color: 'blue' }).setInteractive();
        nextButton.on('pointerdown', () => this.backToGame());
    }
    backToGame(){
        this.level++;
        this.scene.start('GameScene', {level: this.level, money: this.money});
    }

    
}