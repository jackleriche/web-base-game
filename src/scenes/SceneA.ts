import Game from "./../Game";

export class SceneA extends Phaser.Scene {
  private glove: Phaser.GameObjects.Image;

  constructor() {
    super("SceneA");
  }

  public preload(): void {
    this.load.image("glove", "../assets/glove.png");
  }

  public create(): void {
    this.glove = this.add.image(Game.WIDTH / 2, Game.HEIGHT / 2, "glove");
    this.glove.setScale(0.5);
    this.glove.setOrigin(0.5, 0.5);

    this.input.on("pointerdown", this._onPointerDown, this);

  }

  private _onPointerDown(pointer: Phaser.Input.Pointer): void {
    this.glove.setPosition(pointer.x, pointer.y);
    this.glove.setRotation(Math.random() * 2 * Math.PI);
    this.glove.setScale(Math.random() * 2);
  }
}
