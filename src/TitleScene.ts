import Phaser from 'phaser'

export default class titleScene extends Phaser.Scene{
//DIYA - title screen
    
    private button: any;

    constructor(){
        super({key: 'TitleScene'});
    }
// TitleScene code lifted from Katarina Pfeifer and Anna McCarter
    create(){
        //If they click anywhere it moves on to the next scene
        this.button=this.add.image(this.scale.width/2, this.scale.height/2, "titleScreen")
        .setInteractive()
        .on('pointerdown', ()=>this.goToTutorial());
        this.button.setScale(0.8);
    }

    goToTutorial(){
        this.scene.start('NarrativeScene');
    }
}