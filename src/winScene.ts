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
    this.add.image(this.scale.width/2, this.scale.height/2, "winScene").on('pointerdown', () => this.backToGame());
    this.moneyCount = this.add.text(350, 16, 'Money: '+data.money, { font: '30px Avenir',
    color: '#4a2511',
    backgroundColor: 'white', 
    padding: {x:20, y:20}});
    this.moneyCount = this.add.text(100, 16, 'Level: '+this.level, { font: '30px Avenir',
    color: '#4a2511',
    backgroundColor: 'white', 
    padding: {x:20, y:20}});
    let message = '';
    if (this.level === 1) {
      message = '       Good Job! Moving to level 2 :)\n\nLook out for some new neck accessories!';
      this.add.image(800, 420,'win-lvl1').setScale(.75);
    } else if (this.level === 2) {
        message = '       Good Job! Moving to level 3 :)\n\nLook out for some new head accessories!';
        this.add.image(800, 420, 'win-lvl2').setScale(.75);
    } else if (this.level === 3) {
        message = '       Good Job! Moving to level 4 :)\n\nLook out for some new clothing items!';
        this.add.image(800, 420, 'win-lvl3').setScale(.75);
    }
    this.moneyCount = this.add.text(500, 200, message, { font: '30px Avenir',
    color: 'white',
    //backgroundColor: 'white', 
    padding: {x:20, y:20}});
    const nextButton = this.add.text(600, 600, 'Click here to begin', { font: '30px Avenir',
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
