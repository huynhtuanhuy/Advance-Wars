class MenuFire {
  constructor(x,y,configs){
    this.x = x;
    this.y = y;
    this.configs = configs;

    this.optionFire = new  Phaser.sprite(x,y,'menu','FireOption.png');
    this.optionFire.anchor = new Phaser.Point(0.5,0.5);
    this.next;
    this.previous;
  }

  setNext(){

  }
}
