class SoundController{
  constructor(configs){
    this.configs = configs;
  }


  /**
  Advwar.game.load.audio('pointerAudio', 'assets/audio/pointerSoftSound.wav');
  Advwar.game.load.audio('menuAudio', 'assets/audio/menuSound.wav');
  Advwar.game.load.audio('selectAudio', 'assets/audio/selectSound.wav');
  **/
  loadAndPlay(string){
    var sound = new Audio('assets/audio/'+string);
    sound.play();
  }
}
