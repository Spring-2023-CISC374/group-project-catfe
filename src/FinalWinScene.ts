export default class FinalWinScene extends Phaser.Scene {
    constructor() {
      super({ key: 'FinalWinScene' });
    }
  
    create(data: { money: integer }) {
      const { money } = data;
      this.add.text(400, 300, `Your total tips: ${money}`, { fontSize: '32px', color: 'red' });
  
      const replayButton = this.add.text(400, 400, 'Replay', { font: '32px Avenir', color: 'white', backgroundColor: '#4a2511', padding: {x:32, y:32}}).setInteractive();
      replayButton.on('pointerdown', () => {
        this.scene.start('GameScene', { level: 1, money: 0});
      });
    }
  }
