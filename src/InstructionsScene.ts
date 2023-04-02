import Phaser from 'phaser'

export default class instructionsScene extends Phaser.Scene{
//DIYA - instructions Scene
    
    private button: any;

    constructor(){
        super({key: 'InstructionsScene'});
    }
// TitleScene code lifted from Katarina Pfeifer and Anna McCarter
    create(){
        //If they click anywhere it moves on to the next scene
        this.button=this.add.image(this.scale.width/2, this.scale.height/2, "instructionsScene")
        .setInteractive()
        .on('pointerdown', ()=>this.goToTutorial());
        this.button.setScale(0.8);
    }

    goToTutorial(){
        this.scene.start('tutorialScene');
    }
}