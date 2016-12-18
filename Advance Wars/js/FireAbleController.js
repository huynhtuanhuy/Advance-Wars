class FireAbleController {
  constructor(x, y, configs){
    this.configs = configs;

    this.sprite = Advwar.fireAbleGroup.create(
      x*Advwar.configs.tileSize,
      y*Advwar.configs.tileSize,
      'terrain',
      'explosionArea.png'//sau nay sua sau nhe!
    );

    this.sprite.alpha = 0.7;
    this.sprite.visible = false;
  }
}
