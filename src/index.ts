import "phaser";
import { SceneA } from "./SceneA";

class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: window.innerWidth * window.devicePixelRatio,
  height: window.innerHeight * window.devicePixelRatio,
  scene: [SceneA]
};

window.onload = () => {
  const game: Phaser.Game = new Game(config);
};
