var Advwar = {};
Advwar.configs = {
  tileSize: 15
}

Advwar.game = new Phaser.Game(640,300,Phaser.AUTO,'',null,false,true,null);

Advwar.game.state.add('bootState',bootState);
Advwar.game.state.add('loadState',loadState);
Advwar.game.state.add('menuState',menuState);
Advwar.game.state.add('playState',playState);
//Advwar.game.state.add('chooseMapState',chooseMapState);
Advwar.game.state.add('resultState',resultState);


Advwar.game.state.start('bootState');
