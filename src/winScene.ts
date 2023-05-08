import Phaser from 'phaser'

export default class winScene extends Phaser.Scene{

    public button: any;
    public moneyCount: any;
    public levelCount: any;
    private level: integer = 0;
    private money: integer = 0;

    constructor(){
        super({key: 'winScene'});
    }

    create(data: { money: integer, level: integer; }){
        this.level = data.level;
        this.money = data.money;
        this.add.image(this.scale.width/2, this.scale.height/2, "winScene")
        this.moneyCount = this.add.text(350, 16, 'Money: '+data.money, { font: '30px Avenir',
        color: '#4a2511',
        backgroundColor: 'white', 
        padding: {x:20, y:20}});
        this.moneyCount = this.add.text(100, 16, 'Level: '+this.level, { font: '30px Avenir',
        color: '#4a2511',
        backgroundColor: 'white', 
        padding: {x:20, y:20}});
        this.moneyCount = this.add.text(500, 300, 'Good Job! Moving to the next level :) ', { font: '30px Avenir',
        color: '#4a2511',
        backgroundColor: 'white', 
        padding: {x:20, y:20}});
        const nextButton = this.add.text(500, 500, 'Click here to move to the next level', { font: '30px Avenir',
        color: '#4a2511',
        backgroundColor: 'white', 
        padding: {x:32, y:32} }).setInteractive();
        nextButton.on('pointerdown', () => this.backToGame());
    }
    backToGame(){
        this.level++;
        this.scene.start('GameScene', {level: this.level, money: this.money});
    }

    
}
