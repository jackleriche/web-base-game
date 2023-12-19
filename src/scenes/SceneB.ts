import Game from "../Game";

export class SceneB extends Phaser.Scene {
  private glove: Phaser.GameObjects.Image;

  constructor() {
    super("SceneB");
  }

  public preload(): void {
    this.load.image("glove", "../assets/glove.png");
  }

  public create(): void {
    this.glove = this.add.image(Game.WIDTH / 2, Game.HEIGHT / 2, "glove");
    this.glove.setScale(0.7);
  }
}
