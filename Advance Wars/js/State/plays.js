var playState = {
  create : function (){
    Advwar.status = false;
    Advwar.game.physics.startSystem(Phaser.Physics.ARCADE);
    Advwar.keyboard = Advwar.game.input.keyboard;

    //**Load json map**//
    Advwar.mapList = Advwar.game.cache.getJSON('mapList');
    Advwar.mapPlay = Advwar.mapList.map2;

    Advwar.teamPlay = 1;

    Advwar.flipFlopU;
    Advwar.flipFlopD;
    Advwar.flipFlopL;
    Advwar.flipFlopR;
    Advwar.flipFlopC;
    Advwar.flipFlopESC;

    Advwar.terrainGroup = Advwar.game.add.physicsGroup();
    Advwar.moveAbleGroup = Advwar.game.add.physicsGroup(); //Add lop move able
    Advwar.fireAbleGroup = Advwar.game.add.physicsGroup();
    Advwar.militaryGroup = Advwar.game.add.physicsGroup();
    Advwar.pointerGroup = Advwar.game.add.physicsGroup();
    Advwar.menuGroup = Advwar.game.add.physicsGroup();//Add them group menu

    Advwar.terrainControllers = [];
    Advwar.moveAbleControllers = []; //Add lop quan ly move able
    Advwar.fireAbleControllers = [];
    Advwar.militaryControllers = [];

    Advwar.maps = [];
    Advwar.militaries = [];
    Advwar.dmgController = new DamageController();

    new MapBuilder();
    new MapMilitaries();
    for (var i = 0; i < Advwar.mapPlay.col; i++) {
      Advwar.moveAbleControllers[i] = [];
      Advwar.fireAbleControllers[i] = [];
      for (var j = 0; j < Advwar.mapPlay.row; j++) {
        new TerrainController(i, j, Advwar.maps[i][j], {
        });

        Advwar.moveAbleControllers[i].push(new MoveAbleController(i, j, {})); //Ve lop move able
        Advwar.fireAbleControllers[i].push(new FireAbleController(i, j, {}));

        new MilitaryController(i, j, {
          id : Advwar.militaries[i][j],
          Snow : false
        });
      }
    }

    Advwar.pointer = new PointerController(10, 10, {});
    Advwar.mennuControllers = [];//add them menu Obj older


    Advwar.flagBGChange = true;
    Advwar.flasgMilPop = true;

    Advwar.spriteMenuInfor = Advwar.game.add.sprite(450,0,'menu2','backGroundInfor.png');
    Advwar.spriteMenulogo = Advwar.game.add.sprite(450,0,'menu2','logo.png');

    Advwar.spriteMenubackGround = Advwar.game.add.sprite(455,70,'backGround','sea.png');

    Advwar.spriteMilitary = Advwar.game.add.sprite(550,135,'redArmy','Finfantry.png');
    Advwar.spriteMilitary1 = Advwar.game.add.sprite(570,155,'redArmy','Finfantry.png');
    Advwar.spriteMilitary2 = Advwar.game.add.sprite(500,130,'redArmy','Finfantry.png');
    Advwar.spriteMilitary3 = Advwar.game.add.sprite(480,150,'redArmy','Finfantry.png');
    Advwar.spriteMilitary4 = Advwar.game.add.sprite(520,170,'redArmy','Finfantry.png');

    Advwar.menuBullet = Advwar.game.add.sprite(480,50, 'menuBullet');
    Advwar.menuBullet.animations.add('menuBullet');
    Advwar.menuBullet.visible = false;
    Advwar.menuExplo = Advwar.game.add.sprite(480,50, 'menuExplo');
    Advwar.menuExplo.animations.add('menuExplo');
    Advwar.menuExplo.visible = false;

    Advwar.spriteMilitary.visible = false;
    Advwar.spriteMilitary1.visible = false;
    Advwar.spriteMilitary2.visible = false;
    Advwar.spriteMilitary3.visible = false;
    Advwar.spriteMilitary4.visible = false;

    Advwar.text = Advwar.game.add.text(500, 250, " ", {
        font: "15px Arial",
        fill: "#000000",
        align: "center"
    });
    Advwar.text.anchor.setTo(0, 0.5);

    Advwar.Theme = Advwar.game.add.audio('themeAudio');

    Advwar.Theme.loop = true;
    Advwar.Theme.play();

  },

  update : function(){
    Advwar.pointer.update();

    if (this.checkEnemy()) {
      this.win();
    }

    if(Advwar.flagBGChange  == true)
    {
      if (Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].name != null){
        if(Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].militaryID == 12
        || Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].militaryID == 13
        || Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].militaryID == 14
        || Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].militaryID == 15){
          Advwar.spriteMenubackGround.loadTexture('backGround', 'sky.png');
        }else{
          Advwar.spriteMenubackGround.loadTexture('backGround', Advwar.terrainControllers[Advwar.pointer.x][Advwar.pointer.y].backgound);
        }
      }else{
        Advwar.spriteMenubackGround.loadTexture('backGround', Advwar.terrainControllers[Advwar.pointer.x][Advwar.pointer.y].backgound);
      }

      // console.log(Advwar.terrainControllers[Advwar.pointer.x][Advwar.pointer.y].backgound);
      Advwar.flagBGChange = false;
    }
    if (Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].name != null){
      Advwar.text.setText("Power : " + Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].health + "%...");
    }else{
      Advwar.text.setText(" ");
    }

    if((Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].name != null) && (Advwar.flasgMilPop == true)){
      Advwar.spriteMilitary.loadTexture(Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].color, Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].Ava);
      Advwar.spriteMilitary1.loadTexture(Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].color, Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].Ava);
      Advwar.spriteMilitary2.loadTexture(Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].color, Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].Ava);
      Advwar.spriteMilitary3.loadTexture(Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].color, Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].Ava);
      Advwar.spriteMilitary4.loadTexture(Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].color, Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].Ava);


      if(Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].health >= 80){
        Advwar.spriteMilitary.visible = true;
        Advwar.spriteMilitary1.visible = true;
        Advwar.spriteMilitary2.visible = true;
        Advwar.spriteMilitary3.visible = true;
        Advwar.spriteMilitary4.visible = true;
      }else if(Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].health >= 60){

        Advwar.spriteMilitary.visible = false;
        Advwar.spriteMilitary1.visible = true;
        Advwar.spriteMilitary2.visible = true;
        Advwar.spriteMilitary3.visible = true;
        Advwar.spriteMilitary4.visible = true;
      }else if(Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].health >= 40){
        Advwar.spriteMilitary.visible = false;
        Advwar.spriteMilitary1.visible = false;
        Advwar.spriteMilitary2.visible = true;
        Advwar.spriteMilitary3.visible = true;
        Advwar.spriteMilitary4.visible = true;
      }else if(Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].health >= 20){
        Advwar.spriteMilitary.visible = false;
        Advwar.spriteMilitary1.visible = false;
        Advwar.spriteMilitary2.visible = false;
        Advwar.spriteMilitary3.visible = true;
        Advwar.spriteMilitary4.visible = true;
      }else if(Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].health > 0){
        Advwar.spriteMilitary.visible = false;
        Advwar.spriteMilitary1.visible = false;
        Advwar.spriteMilitary2.visible = false;
        Advwar.spriteMilitary3.visible = false;
        Advwar.spriteMilitary4.visible = true;
      }else{
        Advwar.spriteMilitary.visible = false;
        Advwar.spriteMilitary1.visible = false;
        Advwar.spriteMilitary2.visible = false;
        Advwar.spriteMilitary3.visible = false;
        Advwar.spriteMilitary4.visible = false;
      }
      Advwar.flasgMilPop == false;
    }
    else{
      Advwar.spriteMilitary.visible = false;
      Advwar.spriteMilitary1.visible = false;
      Advwar.spriteMilitary2.visible = false;
      Advwar.spriteMilitary3.visible = false;
      Advwar.spriteMilitary4.visible = false;
    }

  },

  render : function(){
    // Advwar.game.debug.text(Advwar.terrainControllers[Advwar.pointer.x][Advwar.pointer.y].name, 300, 32);
    // Advwar.game.debug.text(Advwar.terrainControllers[Advwar.pointer.x][Advwar.pointer.y].arrayPositionX, 300, 48);
    // Advwar.game.debug.text(Advwar.terrainControllers[Advwar.pointer.x][Advwar.pointer.y].arrayPositionY, 300, 64);
    //
    // Advwar.game.debug.text(Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].name, 300, 80);
    // Advwar.game.debug.text(Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].arrayPositionX, 300, 96);
    // Advwar.game.debug.text(Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].arrayPositionY, 300, 112);
    // Advwar.game.debug.text(Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].health, 300, 128);
    // Advwar.game.debug.text(Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].active, 300, 144);
  },

  checkEnemy(){
      var checkEnemy = [];
      for (var i = 0; i < Advwar.mapPlay.col; i++) {
        for (var j = 0; j < Advwar.mapPlay.row; j++) {
          if (Advwar.militaries[i][j] != 0 && Advwar.militaryControllers[i][j].teamColour != Advwar.teamPlay) {
            checkEnemy.push(new Phaser.Point(i, j));
          }
        }
      }
      if (checkEnemy.length > 0) {
        return false;
      }
      else {
        return true;
      }
    },

    win(){
      Advwar.Theme.stop();
      Advwar.game.state.start('resultState');
    }
  };
