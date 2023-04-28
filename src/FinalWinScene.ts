export default class FinalWinScene extends Phaser.Scene {
    constructor() {
      super({ key: 'FinalWinScene' });
    }
  
    create(data: { money: integer }) {
      const { money } = data;
      this.add.text(400, 300, `Your total tips: ${money}`, { fontSize: '32px', color: 'red' });
  
      const replayButton = this.add.text(400, 400, 'Replay', { fontSize: '32px', color: 'blue' }).setInteractive();
      replayButton.on('pointerdown', () => {
        this.scene.start('GameScene', { level: 1, money: 0});
      });
    }
  }
  