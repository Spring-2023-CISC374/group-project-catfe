export default class FinalWinScene extends Phaser.Scene {
    constructor() {
      super({ key: 'FinalWinScene' });
    }
  
    create(data: { money: integer }) {
      this.add.image(this.scale.width/2, this.scale.height/2, "winScene")
      const { money } = data;
      this.add.text(400, 300, `Your total tips: ${money}`, { font: '30px Avenir',
      color: '#4a2511',
      backgroundColor: 'white', 
      padding: {x:20, y:20} });
  
      const replayButton = this.add.text(400, 400, 'Replay', { font: '32px Avenir', color: 'white', backgroundColor: '#4a2511', padding: {x:32, y:32}}).setInteractive();
      replayButton.on('pointerdown', () => {
        this.scene.start('GameScene', { level: 1, money: 0});
      });
    }
  }
