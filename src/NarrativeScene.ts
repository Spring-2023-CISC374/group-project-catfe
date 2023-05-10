import Phaser from 'phaser'

export default class narrativeScene extends Phaser.Scene{
//DIYA - narrative scene
    
    private button: any;
    public music: any;

    constructor(){
        super({key: 'NarrativeScene'});
    }
// TitleScene code lifted from Katarina Pfeifer and Anna McCarter
    create(){
        this.music = this.sound.add('backgroundMusic');
        this.music.loop = true;
        this.music.play();
        //If they click anywhere it moves on to the next scene
        this.button=this.add.image(this.scale.width/2, this.scale.height/2, "narrativeScene")
        .setInteractive()
        .on('pointerdown', ()=>this.goToTutorial());
        this.button.setScale(0.8);
    }

    goToTutorial(){
        this.scene.start('TutorialScene');
    }
}