/// <reference path="../node_modules/phaser/typescript/phaser.comments.d.ts" />
import "phaser";
import { SceneA } from "./SceneA";

class Game extends Phaser.Game { 
    constructor(config: GameConfig) {
        super(config);
    }
}

const config: GameConfig = {
    type: Phaser.AUTO,
    width: window.innerWidth * window.devicePixelRatio,
    height: window.innerHeight * window.devicePixelRatio,
    scene: [SceneA]
};

window.onload = () => {
    const game: Phaser.Game = new Game(config); 
}
