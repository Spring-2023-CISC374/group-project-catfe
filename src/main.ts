import Phaser from 'phaser'

import PreloadScene from './PreloadScene'
import TitleScene from './TitleScene'
import TutorialScene from './TutorialScene'
import winScene from './winScene'

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
	scene: [PreloadScene, TitleScene, TutorialScene, winScene],
}

export default new Phaser.Game(config)
