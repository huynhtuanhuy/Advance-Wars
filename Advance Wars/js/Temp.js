/**Temp sẽ là 1 class giống class bình thường nhưng không chứa thông tin gì**/
class Temp{
  constructor(x, y, configs) {
    this.configs;
    /**mau cua team:
    1:red
    2:green
    3:gold
    4:silver
    5:blue
    **/
    this.teamColour;
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
    this.militaryID;
    /**mau cua linh**/
    this.health;
    /**kha nang di chuyen**/
    this.movementSpeed;
    /**don vi nay co lan duoc khong**/
    this.diveAble;
    /**tha duoc quan nay khong**/
    this.deployAble;
    /**don vi nay coc chiem duoc thanh khong**/
    this.takeControlOfCity;
    /****/
    this.animation;

    /**khai bao sprite**/
    this.sprite = Advwar.militaryGroup.create(
      x*Advwar.configs.tileSize,
      y*Advwar.configs.tileSize,
      null//sau nay sua sau nhe!
    );
    /**toa do array**/
    this.arrayPositionX;
    this.arrayPositionY;
    /**toa do Pixel**/
    this.positionX;
    this.positionY;

    /**ten don vi linh**/
    this.name;

    configs.anchor;
  }

  fire(enemy){

  }
}
