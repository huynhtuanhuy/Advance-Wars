var bootState = {
  create : function(){
    Advwar.game.physics.startSystem(Phaser.Physics.ARCADE);
    //do smt here if needed.
    Advwar.game.state.start('loadState');
  }
};
