var resultState = {
  create : function(){
    var spriteB = Advwar.game.add.sprite(0,-300, 'ending');
    spriteB.anchor = new Phaser.Point(0, 0);
    var tweenB = Advwar.game.add.tween(spriteB).to( { y: '+300' }, 7000, Phaser.Easing.Linear.None, true);
    var keyA = Advwar.game.input.keyboard.addKey(Phaser.Keyboard.A);

    var Ending = Advwar.game.add.text(320, 350, "END.\nPress A to Continue!", {
        font: "50px Arial",
        fill: "#323232",
        align: "center"
    });

    Ending.anchor.setTo(0.5, 0.5);
    var tweenE = Advwar.game.add.tween(Ending).to( { y: '-200' }, 10000, Phaser.Easing.Linear.None, true);
    keyA.onDown.addOnce(this.start, this);
    tweenE.start();

  },

  start : function(){
    Advwar.game.state.start('menuState');
  },
};
