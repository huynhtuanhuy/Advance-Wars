var chooseMapState = {
  create : function(){
    var spriteB = Advwar.game.add.sprite(0, 0, 'opening','splashScreen.png');

    var spriteA = Advwar.game.add.sprite(320, 67.5, 'opening','Advance_Wars_logo.png');
    spriteA.anchor = new Phaser.Point(0.5, 0.5);
    spriteA.alpha = 0;
    var tweenA = Advwar.game.add.tween(spriteA).to( { alpha: 1 }, 4000, Phaser.Easing.Linear.None, false, 1000, 0, false);

    var spriteC = Advwar.game.add.sprite(320, 420, 'opening','start.png');
    spriteC.anchor = new Phaser.Point(0.5, 0.5);
    spriteC.alpha = 0;
    var tweenC = Advwar.game.add.tween(spriteC).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, false, 0, 1000, true);

    var openingTheme = Advwar.game.add.audio('openingAudio');

    var keyA = Advwar.game.input.keyboard.addKey(Phaser.Keyboard.A);

    openingTheme.loop = true;
    openingTheme.play();
    tweenA.start();
    tweenC.start();

    keyA.onDown.addOnce(jumpNext, this);

    function jumpNext(event){
      openingTheme.stop();
      Advwar.game.state.start('playState');
    };
  },

  start : function(smt){
    Advwar.game.audio.stop();
    Advwar.game.state.start('playState');
  },
};
