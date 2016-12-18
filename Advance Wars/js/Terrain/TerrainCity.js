class TerrainCity{
  constructor(x, y, configs) {
    this.configs = configs;
    /**
    ID list:
    1:red
    2:green
    3:gold
    4:silver
    5:blue
    **/
    this.colour = this.configs.colour;
    /**
    ID list :
    1: main_city
    2: bo_binh_city
    3: san_bay_city
    4: normal_city
    **/
    this.cityType = this.configs.cityType;
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
    this.moveAble = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    /**dinh dang cua thuoc tinh moveAble : int () kha nang giam toc do cua dia hinh
    this.moveAbleEffect = [kha nang giam tuong ung voi 19 loai binh chung];
    gia tri se la -10 khi moveAble = fasle;
    this.moveAbleEffect = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];**/
    this.moveAbleEffect = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-10,-10,-10,-10];
    /**lan duoc tren dia hinh nay khong**/
    this.diveAble = false;
    /**tha duoc quan tren dia hinh nay khong**/
    this.deployAble = true;

    /**khong co back ground**/
    if(this.configs.cityType == 1){
      this.backgound = 'mainCity.png';
    }else if (this.configs.cityType == 2){
      this.backgound = 'factory.png';
    }
    else if (this.configs.cityType == 3){
      this.backgound = 'airport.png';
    }
    else if (this.configs.cityType == 4){
      this.backgound = 'city.png';
    }else{

    }
    /**khong def boots cho bat ky don vi nao**/
    this.defBoost = 2;
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

    if(this.configs.cityType == 1){
      this.sprite.anchor = new Phaser.Point(0, 0.5);
    }
    else {
      this.sprite.anchor = new Phaser.Point(0, 0);
    }


    /**toa do array**/
    this.arrayPositionX = x;
    this.arrayPositionY = y;
    /**toa do Pixel**/
    this.positionX = this.sprite.position.x;
    this.positionY = this.sprite.position.y;

    /**ten dia hinh**/
    this.name = 'City';

    configs.anchor = new Phaser.Point(0, 0);
  }
}
