class MilitaryNeoTank{
  constructor(x, y, configs) {
    this.configs = configs;
    /**mau cua team:
    1:red
    2:green
    3:gold
    4:silver
    5:blue
    **/
    this.teamColour = configs.teamColour;
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
    this.militaryID = 8;
    /**mau cua linh**/
    this.health = 100;
    /**kha nang di chuyen**/
    this.movementSpeed = 7;
    /**don vi nay co lan duoc khong**/
    this.diveAble = false;
    /**tha duoc quan nay khong**/
    this.deployAble = false;
    /**don vi nay coc chiem duoc thanh khong**/
    this.takeControlOfCity = true;

    this.active = true;

    this.activeFire = true;

    this.minRngAtk = 1;
    this.maxRngAtk = 1;
    /****/
    this.animation = 'smt here';

    this.color = this.defineColour(this.teamColour);
    this.Ava = 'F'+this.configs.img;
    /**khai bao sprite**/
    this.sprite = Advwar.militaryGroup.create(
      x*Advwar.configs.tileSize,
      y*Advwar.configs.tileSize,
      this.defineColour(this.teamColour),
      this.configs.img
    );
    /**toa do array**/
    this.arrayPositionX = x;
    this.arrayPositionY = y;
    /**toa do Pixel**/
    this.positionX = this.sprite.position.x;
    this.positionY = this.sprite.position.y;

    this.landExplo = Advwar.game.add.sprite(this.sprite.x, this.sprite.y, 'landExplo');
    this.landExplo.animations.add('landExplos');
    this.landExplo.visible = false;

    this.muzzle = Advwar.game.add.sprite(this.sprite.x, this.sprite.y, 'muzzle');
    this.muzzle.animations.add('muzzles');
    this.muzzle.visible = false;

    /**ten don vi linh**/
    this.name = 'Neo_Tank';

    //**Weapon**//
    this.weapon = 0;

    configs.anchor = new Phaser.Point(0, 0);
  }

  defineColour(colour){
    if(colour == 1){
      return 'redArmy';
    }else if(colour == 2){
      return 'greenArmy';
    }else if(colour == 3){
      return 'yellowArmy';
    }else if(colour == 4){
      return 'silverArmy';
    }else if(colour == 5){
      return 'blueArmy';
    }else{}
  }

  takeDamage(id, x, y){
    // this.muzzle.x = this.x*Advwar.configs.tileSize;
    // this.muzzle.y = this.y*Advwar.configs.tileSize;
    if (id == 1 || id == 3 || id == 7 || id == 14) {
        this.muzzle.x = x*Advwar.configs.tileSize;
        this.muzzle.y = y*Advwar.configs.tileSize;
        this.muzzle.visible = true;
        Advwar.speaker.loadAndPlay('muzzle.wav');
        this.muzzle.animations.play('muzzles', 10, false);
        Advwar.menuBullet.visible=true;
        Advwar.menuBullet.animations.play('menuBullet', 10 , false);
      }
      else {
        this.landExplo.x = x*Advwar.configs.tileSize;
        this.landExplo.y = y*Advwar.configs.tileSize;
        this.landExplo.visible = true;
        Advwar.speaker.loadAndPlay('explo.wav');
        this.landExplo.animations.play('landExplos', 10, false);
        Advwar.menuExplo.visible=true;
        Advwar.menuExplo.animations.play('menuExplo', 10, false);
      }
    }

  fire(enemy, x, y){
    if (this.activeFire) {
      //Gay damage cho dich
      var dmg = Advwar.dmgController.calculateDamage(this,enemy);
      enemy.health -= dmg;
      enemy.takeDamage(Advwar.militaryControllers[Advwar.pointer.selectArrayX][Advwar.pointer.selectArrayY].weapon, x, y);
      //reset o neu dich chet
      if (enemy.health <= 0) {
        enemy.sprite.kill();
        Advwar.militaries[x][y] = 0;
        Advwar.militaryControllers[x][y] = new Temp(x, y, {});
        Advwar.fireAbleControllers[x][y].sprite.visible = false;
      }
      this.activeFire = false;
    }
    this.sprite.tint = 0x323232;
  }
}
