var loadState = {
  preload : function(){
    //setup scale here
    Advwar.game.scale.minWidth = 48;
    Advwar.game.scale.minHeight = 32;
    Advwar.game.scale.maxWidth = 640;
    Advwar.game.scale.maxHeight = 300;
    Advwar.game.scale.pageAlignHorizontally = true;
    Advwar.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    Advwar.game.time.advancedTiming = true;
    // load everything here!
    Advwar.game.load.json('mapList', 'Assets/mapList.json');
    Advwar.game.load.atlasJSONHash('terrain', 'Assets/terrain.png', 'Assets/terrain.json');
    Advwar.game.load.atlasJSONHash('redArmy', 'Assets/red.png', 'Assets/red.json');
    Advwar.game.load.atlasJSONHash('blueArmy', 'Assets/blue.png', 'Assets/blue.json');
    Advwar.game.load.atlasJSONHash('silverArmy', 'Assets/silver.png', 'Assets/silver.json');
    Advwar.game.load.atlasJSONHash('greenArmy', 'Assets/green.png', 'Assets/green.json');
    Advwar.game.load.atlasJSONHash('yellowArmy', 'Assets/yellow.png', 'Assets/yellow.json');
    Advwar.game.load.atlasJSONHash('pointer', 'Assets/pointer.png', 'Assets/pointer.json');
    Advwar.game.load.atlasJSONHash('menu', 'Assets/menu.png', 'Assets/menu.json');
    Advwar.game.load.atlasJSONHash('menu2', 'Assets/menu2.png', 'Assets/menu2.json');
    Advwar.game.load.atlasJSONHash('landExplo', 'Assets/landExplo.png', 'Assets/landExplo.json');
    Advwar.game.load.atlasJSONHash('opening', 'Assets/opening.png', 'Assets/opening.json');
    Advwar.game.load.atlasJSONHash('muzzle', 'Assets/muzzle.png', 'Assets/muzzle.json');
    Advwar.game.load.atlasJSONHash('supper', 'Assets/muzzle.png', 'Assets/supper.json');
    Advwar.game.load.atlasJSONHash('CO', 'Assets/CO.png', 'Assets/CO.json');
    Advwar.game.load.atlasJSONHash('backGround', 'Assets/backGround.png', 'Assets/backGround.json');
    Advwar.game.load.atlasJSONHash('die', 'Assets/die.png', 'Assets/die.json');
    Advwar.game.load.atlasJSONHash('menuBullet', 'Assets/menuBullet.png', 'Assets/menuBullet.json');
    Advwar.game.load.atlasJSONHash('menuExplo', 'Assets/menuExplo.png', 'Assets/menuExplo.json');
    Advwar.game.load.image('ending', 'Assets/ending.png');
    //load audio
    Advwar.game.load.audio('openingAudio', 'assets/audio/opening.mp3');
    Advwar.game.load.audio('themeAudio', 'assets/audio/fanfare.mp3');


    Advwar.speaker = new SoundController({});
  },

  create : function(){
    //switch to menu after load
    Advwar.game.state.start('menuState');
  }
};
