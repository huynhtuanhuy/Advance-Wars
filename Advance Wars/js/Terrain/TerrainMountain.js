class TerrainMountain{
  constructor(x, y, configs) {
    this.configs = configs;
    /**
    ID list:
    1: linh bo binh
    2: linh bazoka
    3: jeep
    4: xe tai
    5: tank hang nhe
    6: tank hang nang
    7: tank phong khong
    8: NEO tank
    9: xe phao
    10: xe ten lua mat dat
    11: xe ten lua phong khong
    12: may bay chien dau
    13: may bay nem bom
    14: truc thang
    15: may bay cho linh
    16: thuyen chien
    17: thuyen phong ve (phong khong va chong tau ngam)
    18: tau ngam
    19: tau cho quan
    dinh dang cua thuoc tinh moveAble : ID : cua nhung nhom quan co kha nang di tren dia hinh nay
    this.moveAble = [list of ID];
    **/
    this.moveAble = [12,13,14,15];

    /**dinh dang cua thuoc tinh moveAble : int () kha nang giam toc do cua dia hinh
    this.moveAbleEffect = [kha nang giam tuong ung voi 19 loai binh chung];
    gia tri se la -10 khi moveAble = fasle;
    this.moveAbleEffect = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];**/
    this.moveAbleEffect = [-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,-10,0,0,0,0,-10,-10,-10,-10];
    /**lan duoc tren dia hinh nay khong**/
    this.diveAble = false;
    /**tha duoc quan tren dia hinh nay khong**/
    this.deployAble = false;

    /**khong co back ground**/
    this.backgound = 'moutain.png';
    /**khong def boots cho bat ky don vi nao**/
    this.defBoost = 0;
    /****/
    this.animation = null;

    this.Snow = this.configs.Snow;

    /**khai bao sprite**/
    this.sprite = Advwar.terrainGroup.create(
      x*Advwar.configs.tileSize,
      y*Advwar.configs.tileSize,
      'terrain',
      this.configs.img//sau nay sua sau nhe!
    );
    this.sprite.anchor = new Phaser.Point(0, 0.25);

    /**toa do array**/
    this.arrayPositionX = x;
    this.arrayPositionY = y;
    /**toa do Pixel**/
    this.positionX = this.sprite.position.x;
    this.positionY = this.sprite.position.y;
    /**ten dia hinh**/
    this.name = 'Moutain';

    configs.anchor = new Phaser.Point(0, 0);
  }

}
