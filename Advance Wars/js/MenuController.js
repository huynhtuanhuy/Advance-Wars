class MenuController {
  constructor(x,y,configs){
    /**mo ta configs :
      ID :
    **/
    this.top = Advwar.menuGroup.create(x,y-8,'menu','topMenu.png');
    this.optionFire = Advwar.menuGroup.create(x,y,'menu','FireOption.png');
    this.optionMove = Advwar.menuGroup.create(x,y+20,'menu','moveMenu.png');
    this.optionSupp = Advwar.menuGroup.create(x,y+40,'menu','suppOption.png');
    this.optionPow = Advwar.menuGroup.create(x,y+60,'menu','powOption.png');
    this.optionUlti = Advwar.menuGroup.create(x,y+80,'menu','ultiOption.png');
    this.optionLoad = Advwar.menuGroup.create(x,y+100,'menu','loadOption.png');
    this.optionDeploy = Advwar.menuGroup.create(x,y+120,'menu','deployOption.png');
    this.optionJoin = Advwar.menuGroup.create(x,y+140,'menu','joinOption.png');
    this.optionEnd = Advwar.menuGroup.create(x,y+160,'menu','endOption.png');
    this.end = Advwar.menuGroup.create(x,y+180,'menu','bottomMenu.png');
    this.pointerMenu = Advwar.menuGroup.create(x,y,'menu','pointerMenu.png');
    this.sound = 'menuSound.wav';
    this.setVisible(false);
  }
  setVisible(check){
    if(check){
      this.top.exists = true;
      this.optionFire.exists = true;
      this.optionMove.exists = true;
      this.optionSupp.exists = true;
      this.optionPow.exists = true;
      this.optionUlti.exists = true;
      this.optionLoad.exists = true;
      this.optionDeploy.exists = true;
      this.optionJoin.exists = true;
      this.optionEnd.exists = true;
      this.end.exists = true;
      this.pointerMenu.exists = true;
    }else{
      this.top.exists = false;
      this.optionFire.exists = false;
      this.optionMove.exists = false;
      this.optionSupp.exists = false;
      this.optionPow.exists = false;
      this.optionUlti.exists = false;
      this.optionLoad.exists = false;
      this.optionDeploy.exists = false;
      this.optionJoin.exists = false;
      this.optionEnd.exists = false;
      this.end.exists = false;
      this.pointerMenu.exists = false;
    }
  }
  pointerMoveDown(list,pointer){
    Advwar.speaker.loadAndPlay(this.sound);
    for (var i = 0;i<list.length;i++){
      if((pointer.pointerMenu.x == list[i].x)&&(pointer.pointerMenu.y == list[i].y)){
        if(i == (list.length - 1)){
          pointer.pointerMenu.x = list[0].x;
          pointer.pointerMenu.y = list[0].y;
          // console.log('----------'+list.length - 1);
          // console.log(i+'-end----------');
          break;
        }else{
          pointer.pointerMenu.x = list[i+1].x;
          pointer.pointerMenu.y = list[i+1].y;
          // console.log(i+'-1st----------');
          break;
        }
      }
    }
  }
  pointerMoveUp(list,pointer){
    Advwar.speaker.loadAndPlay(this.sound);
    for (var i = 0;i<list.length;i++){
      if((pointer.pointerMenu.x == list[i].x)&&(pointer.pointerMenu.y == list[i].y)){
        if(i == 0){
          pointer.pointerMenu.x = list[list.length-1].x;
          pointer.pointerMenu.y = list[list.length-1].y;
          // console.log('----------'+list.length - 1);
          // console.log(i+'-end----------');
          break;
        }else{
          pointer.pointerMenu.x = list[i-1].x;
          pointer.pointerMenu.y = list[i-1].y;
          // console.log(i+'-1st----------');
          break;
        }
      }
    }
  }

  menuSelect (){
    if ((this.pointerMenu.x == this.optionFire.x)&&(this.pointerMenu.y == this.optionFire.y)){
      return 'fire';
    }else if((this.pointerMenu.x == this.optionPow.x)&&(this.pointerMenu.y == this.optionPow.y)){
      return 'pow';
    }else if((this.pointerMenu.x == this.optionMove.x)&&(this.pointerMenu.y == this.optionMove.y)){
      return 'move';
    }else if((this.pointerMenu.x == this.optionSupp.x)&&(this.pointerMenu.y == this.optionSupp.y)){
      return 'supp';
    }else if((this.pointerMenu.x == this.optionUlti.x)&&(this.pointerMenu.y == this.optionUlti.y)){
      return 'ulti';
    }else if((this.pointerMenu.x == this.optionLoad.x)&&(this.pointerMenu.y == this.optionLoad.y)){
      return 'load';
    }else if((this.pointerMenu.x == this.optionDeploy.x)&&(this.pointerMenu.y == this.optionDeploy.y)){
      return 'deploy';
    }else if((this.pointerMenu.x == this.optionEnd.x)&&(this.pointerMenu.y == this.optionEnd.y)){
      return 'end';
    }else if((this.pointerMenu.x == this.optionJoin.x)&&(this.pointerMenu.y == this.optionJoin.y)){
      return 'join';
    }else{
    }
  }

  ressetMenuChoice(){
    this.pointerMenu.x = 0;
    this.pointerMenu.y = 0;
  }
  menuSetupMenu(configs){
    var x = configs.x;
    var y = configs.y;
    var result = [];
    this.top.exists = configs.top;
    this.optionFire.exists = configs.fire;
    this.optionMove.exists = configs.move;
    this.optionSupp.exists = configs.supp;
    this.optionPow.exists = configs.pow;
    this.optionUlti.exists = configs.ulti;
    this.optionLoad.exists = configs.load;
    this.optionDeploy.exists = configs.deploy;
    this.optionJoin.exists = configs.join;
    this.optionEnd.exists = configs.endOpt;
    this.end.exists = configs.end;
    this.pointerMenu.exists = configs.pointer;
    //reSortMenu
    this.top.x = configs.x;
    this.top.y = configs.y;
    var bodySum=8;
    // console.log(bodySum);
    if(this.optionFire.exists){
      this.optionFire.x = x;
      this.optionFire.y = y+bodySum;
      result.push({
        x : this.optionFire.x,
        y : this.optionFire.y
      });
      bodySum += 20;
    }
    // console.log(bodySum);
    if(this.optionMove.exists){
      this.optionMove.x = x;
      this.optionMove.y = y+bodySum;
      result.push({
        x : this.optionMove.x,
        y : this.optionMove.y
      });
      bodySum += 20;
    }
    // console.log(bodySum);
    if(this.optionSupp.exists){
      this.optionSupp.x = x;
      this.optionSupp.y = y+bodySum;
      result.push({
        x : this.optionSupp.x,
        y : this.optionSupp.y
      });
      bodySum += 20;
    }
    // console.log(bodySum);
    if(this.optionPow.exists){
      this.optionPow.x = x;
      this.optionPow.y = y+bodySum;
      result.push({
        x : this.optionPow.x,
        y : this.optionPow.y
      });
      bodySum += 20;
    }
    // console.log(bodySum);
    if(this.optionUlti.exists){
      this.optionUlti.x = x;
      this.optionUlti.y = y+bodySum;
      result.push({
        x : this.optionUlti.x,
        y : this.optionUlti.y
      });
      bodySum += 20;
    }
    // console.log(bodySum);
    if(this.optionLoad.exists){
      this.optionLoad.x = x;
      this.optionLoad.y = y+bodySum;
      result.push({
        x : this.optionLoad.x,
        y : this.optionLoad.y
      });
      bodySum += 20;
    }
    // console.log(bodySum);
    if(this.optionDeploy.exists){
      this.optionDeploy.x = x;
      this.optionDeploy.y = y+bodySum;
      result.push({
        x : this.optionDeploy.x,
        y : this.optionDeploy.y
      });
      bodySum += 20;
    }
    // console.log(bodySum);
    if(this.optionJoin.exists){
      this.optionJoin.x = x;
      this.optionJoin.y = y+bodySum;
      result.push({
        x : this.optionJoin.x,
        y : this.optionJoin.y
      });
      bodySum += 20;
    }
    // console.log(bodySum);
    if(this.optionEnd.exists){
      this.optionEnd.x = x;
      this.optionEnd.y = y+bodySum;
      result.push({
        x : this.optionEnd.x,
        y : this.optionEnd.y
      });
      bodySum += 20;
    }
    if(this.pointerMenu.exists){
      this.pointerMenu.x = result[0].x;
      this.pointerMenu.y = result[0].y;
      // bodySum += 20;
      // console.log(bodySum+' pointer');
    }
    // console.log(bodySum);
    if(this.end.exists){
      this.end.x = x;
      this.end.y = y+bodySum;
      bodySum += 20;
    }
    //endSort
    return result;
  }

}
