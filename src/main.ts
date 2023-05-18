import Phaser from 'phaser'
import PreloadScene from './PreloadScene'
import TitleScene from './TitleScene'
import GameScene from './GameScene'
import winScene from './winScene'
import FinalWinScene from './FinalWinScene';

import NarrativeScene from './NarrativeScene'
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

	scene: [PreloadScene, GameScene, TitleScene, NarrativeScene, TutorialScene, winScene, FinalWinScene,],

}

export default new Phaser.Game(config)
