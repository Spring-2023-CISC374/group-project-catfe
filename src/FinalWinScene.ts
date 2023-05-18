//final game scene- last scene user sees upon finishing all the levels

export default class FinalWinScene extends Phaser.Scene {
    constructor() {
      super({ key: 'FinalWinScene' });
    }
  
    create(data: { money: integer }) {
      // add background and text buttons showing user how much money they made
      this.add.image(this.scale.width/2, this.scale.height/2, "winScene")
      const { money } = data;
      this.add.text(400, 300, `Your total tips: ${money}`, { font: '30px Avenir',
      color: '#4a2511',
      backgroundColor: 'white', 
      padding: {x:20, y:20} }); //diya - aesthetics of buttons/text boxes
  
      // replay button allows user to restart game from level 1 and 0 money
      const replayButton = this.add.text(400, 400, 'Replay', { font: '32px Avenir', color: 'white', backgroundColor: '#4a2511', padding: {x:32, y:32}}).setInteractive();
      replayButton.on('pointerdown', () => {
        this.scene.start('GameScene', { level: 1, money: 0});
      });
    }
  }
