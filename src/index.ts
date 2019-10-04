import "phaser";
import Game from "./Game";
import { SceneA } from "./scenes/SceneA";
import { SceneB } from "./scenes/SceneB";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: window.innerWidth * window.devicePixelRatio,
  height: window.innerHeight * window.devicePixelRatio,
  scene: [SceneA, SceneB]
};

window.onload = () => {
  const game: Phaser.Game = new Game(config);
};
