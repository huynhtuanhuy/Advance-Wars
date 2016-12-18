var Advwar = {};
Advwar.configs = {
  tileSize: 15
}
window.onload = function () {
  Advwar.game = new Phaser.Game(
    480,
    300,
    Phaser.AUTO,
    '',
    {
      preload: preload,
      create: create,
      update: update,
      render: render,
    },
    false,
    false
  );
}

var preload = function(){
  Advwar.game.load.json('mapList', 'Assets/mapList.json');
  Advwar.game.scale.minWidth = 48;
  Advwar.game.scale.minHeight = 32;
  Advwar.game.scale.maxWidth = 480;
  Advwar.game.scale.maxHeight = 300;
  Advwar.game.scale.pageAlignHorizontally = true;
  Advwar.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  Advwar.game.load.atlasJSONHash('terrain', 'Assets/terrain.png', 'Assets/terrain.json');
  Advwar.game.load.atlasJSONHash('redArmy', 'Assets/red.png', 'Assets/red.json');
  Advwar.game.load.atlasJSONHash('blueArmy', 'Assets/blue.png', 'Assets/blue.json');
  Advwar.game.load.atlasJSONHash('silverArmy', 'Assets/silver.png', 'Assets/silver.json');
  Advwar.game.load.atlasJSONHash('greenArmy', 'Assets/green.png', 'Assets/green.json');
  Advwar.game.load.atlasJSONHash('yellowArmy', 'Assets/yellow.png', 'Assets/yellow.json');
  Advwar.game.load.atlasJSONHash('pointer', 'Assets/pointer.png', 'Assets/pointer.json');
  Advwar.game.load.atlasJSONHash('menu', 'Assets/menu.png', 'Assets/menu.json');
  Advwar.game.load.image('infantry', 'Assets/284.png');
  Advwar.game.time.advancedTiming = true;
}

var create = function(){
  Advwar.game.physics.startSystem(Phaser.Physics.ARCADE);
  Advwar.keyboard = Advwar.game.input.keyboard;

  //**Load json map**//
  Advwar.mapList = Advwar.game.cache.getJSON('mapList');
  Advwar.mapPlay = Advwar.mapList.map1;

  Advwar.flipFlopU;
  Advwar.flipFlopD;
  Advwar.flipFlopL;
  Advwar.flipFlopR;
  Advwar.flipFlopC;
  Advwar.flipFlopESC;

  Advwar.terrainGroup = Advwar.game.add.physicsGroup();
  Advwar.moveAbleGroup = Advwar.game.add.physicsGroup(); //Add lop move able
  Advwar.militaryGroup = Advwar.game.add.physicsGroup();
  Advwar.pointerGroup = Advwar.game.add.physicsGroup();
  Advwar.menuGroup = Advwar.game.add.physicsGroup();//Add them group menu

  Advwar.terrainControllers = [];
  Advwar.moveAbleControllers = []; //Add lop quan ly move able
  Advwar.militaryControllers = [];

  Advwar.maps = [];
  Advwar.militaries = [];

  new MapBuilder();
  new MapMilitaries();
  for (var i = 0; i < Advwar.mapPlay.col; i++) {
    Advwar.moveAbleControllers[i] = [];
    for (var j = 0; j < Advwar.mapPlay.row; j++) {
      new TerrainController(i, j, Advwar.maps[i][j], {
      });

      Advwar.moveAbleControllers[i].push(new MoveAbleController(i, j, {})); //Ve lop move able

      new MilitaryController(i, j, {
        id : Advwar.militaries[i][j],
        Snow : false
      });
    }
  }

  Advwar.pointer = new PointerController(10, 10, {});
  Advwar.mennuControllers = [];//add them menu Obj older
}

var update = function(){
  Advwar.pointer.update();
}

var render = function(){
  Advwar.game.debug.text(Advwar.terrainControllers[Advwar.pointer.x][Advwar.pointer.y].name, 300, 32);
  Advwar.game.debug.text(Advwar.terrainControllers[Advwar.pointer.x][Advwar.pointer.y].arrayPositionX, 300, 48);
  Advwar.game.debug.text(Advwar.terrainControllers[Advwar.pointer.x][Advwar.pointer.y].arrayPositionY, 300, 64);

  Advwar.game.debug.text(Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].name, 300, 80);
  Advwar.game.debug.text(Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].arrayPositionX, 300, 96);
  Advwar.game.debug.text(Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].arrayPositionY, 300, 112);
  Advwar.game.debug.text(Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].health, 300, 128);
  Advwar.game.debug.text(Advwar.militaryControllers[Advwar.pointer.x][Advwar.pointer.y].active, 300, 144);
}
