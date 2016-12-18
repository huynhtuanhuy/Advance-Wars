class MoveAbleController {
  constructor(x, y, configs){
    this.configs = configs;

    this.sprite = Advwar.moveAbleGroup.create(
      x*Advwar.configs.tileSize,
      y*Advwar.configs.tileSize,
      'terrain',
      'moveableArea.png'//sau nay sua sau nhe!
    );

    this.sprite.alpha = 0.7;
    this.sprite.visible = false;
  }
}
