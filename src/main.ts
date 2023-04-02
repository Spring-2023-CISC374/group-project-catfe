import Phaser from 'phaser'
import PreloadScene from './PreloadScene'
import TitleScene from './TitleScene'
import GameScene from './GameScene'
import winScene from './winScene'

import NarrativeScene from './NarrativeScene'
import InstructionsScene from './InstructionsScene'
import TutorialScene from './TutorialScene'


const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 1532,
	height: 845,
	physics: {
		default: 'arcade',
		arcade: {
			//gravity: { y: 300 },
			debug: false
		},
	},

	scene: [PreloadScene, GameScene, TitleScene, NarrativeScene, InstructionsScene, TutorialScene, winScene],

}

export default new Phaser.Game(config)
