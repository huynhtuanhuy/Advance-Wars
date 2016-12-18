var menuState = {
  create : function(){
    var spriteB = Advwar.game.add.sprite(0,0, 'opening','splashScreen.png');
    spriteB.anchor = new Phaser.Point(0, 0);
    // game.add.tween(sprite).to( { x: '+300' }, 2000, Phaser.Easing.Linear.None, true);
    var tweenB = Advwar.game.add.tween(spriteB).to( { y: '-120' }, 2000, Phaser.Easing.Linear.None, true);

    var spriteA = Advwar.game.add.sprite(420, 150, 'opening','Advance_Wars_logo.png');
    spriteA.anchor = new Phaser.Point(0.5, 0.5);
    spriteA.alpha = 0;
    var tweenA = Advwar.game.add.tween(spriteA).to( { alpha: 1 , y : '+50'}, 2000, Phaser.Easing.Linear.None, false, 1000, 0, false);

    var spriteC = Advwar.game.add.sprite(420, 270, 'opening','start.png');
    spriteC.anchor = new Phaser.Point(0.5, 0.5);
    spriteC.alpha = 0;
    var tweenC = Advwar.game.add.tween(spriteC).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, false, 0, 1000, true);



    var keyA = Advwar.game.input.keyboard.addKey(Phaser.Keyboard.A);
    var openingTheme = Advwar.game.add.audio('openingAudio');
    openingTheme.loop = true;
    openingTheme.play();
    tweenA.chain(tweenC);
    tweenA.start();
    tweenB.start();

    keyA.onDown.addOnce(jumpNext, this);

    function jumpNext(event){
      openingTheme.stop();
      Advwar.game.state.start('playState');
    };
  },
};
