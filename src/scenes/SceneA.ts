export class SceneA extends Phaser.Scene {
  private glove: Phaser.GameObjects.Image;

  constructor() {
    super("SceneA");
  }

  public preload(): void {
    this.load.image("glove", "../assets/glove.png");
  }

  public create(): void {
    this.glove = this.add.image(0, 0, "glove");
    this.glove.setScale(0.5);
    this.glove.setOrigin();
  }
}
