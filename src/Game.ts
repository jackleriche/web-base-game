class Game extends Phaser.Game {
  public static WIDTH: number;
  public static HEIGHT: number;

  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
    if (config.width) {
      Game.WIDTH = Number(config.width);
    }
    if (config.height) {
      Game.HEIGHT = Number(config.height);
    }
  }
}

export default Game;
