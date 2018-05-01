/// <reference path="../node_modules/phaser/typescript/phaser.comments.d.ts" />
import "phaser";

class Game extends Phaser.Game { 

    public preload() {
    }

    constructor(config: any) {
        super(config);
    }
}


const config: any = {
    type: Phaser.AUTO,
    width: window.innerWidth * window.devicePixelRatio,
    height: window.innerHeight * window.devicePixelRatio,
};

const game: Phaser.Game = new Game(config);
