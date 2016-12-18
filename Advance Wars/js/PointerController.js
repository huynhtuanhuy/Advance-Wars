class PointerController{
  constructor(x, y, configs) {
    this.configs = configs;
    this.x = x; //Toa do array con tro
    this.y = y; //Toa do array con tro
    this.selectArrayX = x; //Toa do array linh duoc chon
    this.selectArrayY = y; //Toa do array linh duoc chon
    this.tmp;
    this.moving = false;
    this.hand = Advwar.pointerGroup.create(x*Advwar.configs.tileSize+Advwar.configs.tileSize,y*Advwar.configs.tileSize+Advwar.configs.tileSize,'pointer','10.png');
    this.topLeft = Advwar.pointerGroup.create(x*Advwar.configs.tileSize,y*Advwar.configs.tileSize,'pointer','3.png');
    this.topRight = Advwar.pointerGroup.create(x*Advwar.configs.tileSize+Advwar.configs.tileSize,y*Advwar.configs.tileSize,'pointer','4.png');
    this.bottomLeft = Advwar.pointerGroup.create(x*Advwar.configs.tileSize,y*Advwar.configs.tileSize+Advwar.configs.tileSize,'pointer','12.png');
    this.topLeft.anchor = new Phaser.Point(0.6, 0.6);
    this.topRight.anchor = new Phaser.Point(0.4, 0.6);
    this.bottomLeft.anchor = new Phaser.Point(0.6, 0.4);
    /**Test menu**/
    this.menu = new MenuController(this.x,this.y);
    this.menu.setVisible(false);
    this.sound = 'pointerSoftSound.wav';
    this.listMenu;
    this.sMenuEvent = false;
    this.aMenuEvent = false;
    this.uMenuEvent = false;
    this.dMenuEvent = false;
  }

  update(){
    this.checkMovement();
    this.pointerSelect();
    this.cancelMoveMilitary();
    /**Nhấn Esc để huỷ chọn**/
  }

  checkMovement(){
    if(Advwar.keyboard.isDown(Phaser.Keyboard.UP)){
      if (!Advwar.flipFlopU && (this.y - 1) >= 0) {
        if (this.moving == true) {
          if (Advwar.moveAbleControllers[this.x][this.y - 1].sprite.visible == true) {
            this.moveUp();
          }
        }
        else {
          this.moveUp();
        }
        Advwar.flipFlopU = true;
      }
    }
    else {
      Advwar.flipFlopU = false;
    }
    if(Advwar.keyboard.isDown(Phaser.Keyboard.DOWN)){
      if (!Advwar.flipFlopD && (this.y + 1) < Advwar.mapPlay.row) {
        if (this.moving == true) {
          if (Advwar.moveAbleControllers[this.x][this.y + 1].sprite.visible == true) {
            this.moveDown();
          }
        }
        else {
          this.moveDown();
        }
        Advwar.flipFlopD = true;
      }
    }
    else {
      Advwar.flipFlopD = false;
    }

    if(Advwar.keyboard.isDown(Phaser.Keyboard.LEFT)){
      if (!Advwar.flipFlopL && (this.x - 1) >= 0) {
        if (this.moving == true) {
          if (Advwar.moveAbleControllers[this.x - 1][this.y].sprite.visible == true) {
            this.moveLeft();
          }
        }
        else {
          this.moveLeft();
        }
        Advwar.flipFlopL = true;
      }
    }
    else {
      Advwar.flipFlopL = false;
    }
    if(Advwar.keyboard.isDown(Phaser.Keyboard.RIGHT)){
      if (!Advwar.flipFlopR && (this.x + 1) < Advwar.mapPlay.col) {
        if (this.moving == true) {
          if (Advwar.moveAbleControllers[this.x + 1][this.y].sprite.visible == true) {
            this.moveRight();
          }
        }
        else {
          this.moveRight();
        }
        Advwar.flipFlopR = true;
      }
    }
    else {
      Advwar.flipFlopR = false;
    }
  }

  pointerSelect(){
    if(Advwar.keyboard.isDown(Phaser.Keyboard.A)){
      if (!Advwar.flipFlopC) {
        if (Advwar.militaryControllers[this.x][this.y].teamColour == Advwar.teamPlay && this.moving == false) {
          this.selectArrayX = this.x;
          this.selectArrayY = this.y;
          this.showMenu(this.menuConfigs(Advwar.militaryControllers[this.selectArrayX][this.selectArrayY]));
          // this.moving = true;
          // this.drawMoveAble(this.selectArrayX, this.selectArrayY, Advwar.militaryControllers[this.selectArrayX][this.selectArrayY]);
        }
        else if (this.moving == true && Advwar.militaries[this.x][this.y] == 0){
            this.moveMilitary();
        }
        else if (Advwar.fireAbleControllers[this.x][this.y].sprite.visible) {
          Advwar.militaryControllers[this.selectArrayX][this.selectArrayY].fire(Advwar.militaryControllers[this.x][this.y], this.x, this.y);
          this.hiddenMoveAble();
        }
        Advwar.flipFlopC = true;
      }
    }
    else {
      Advwar.flipFlopC = false;
    }
  }

  menuConfigs(military){
    // if (!military.active) {
    //   if (!military.activeFire) {
    //     return {
    //       top : true,
    //       fire : false,
    //       move : false,
    //       supp : false,
    //       pow : false,
    //       ulti : false,
    //       load : false,
    //       deploy : false,
    //       join : false,
    //       end : true,
    //       pointer : true,
    //       endOpt : true
    //     }
    //   }
    //   else {
    //     return {
    //       top : true,
    //       fire : true,
    //       move : false,
    //       supp : false,
    //       pow : false,
    //       ulti : false,
    //       load : false,
    //       deploy : false,
    //       join : false,
    //       end : true,
    //       pointer : true,
    //       endOpt : true
    //     }
    //   }
    // }
    // else if (!military.activeFire) {
    //   return {
    //     top : true,
    //     fire : false,
    //     move : false,
    //     supp : false,
    //     pow : false,
    //     ulti : false,
    //     load : false,
    //     deploy : false,
    //     join : false,
    //     end : true,
    //     pointer : true,
    //     endOpt : true
    //   }
    // }else {
      return {
        top : true,
        fire : true,
        move : true,
        supp : false,
        pow : false,
        ulti : false,
        load : false,
        deploy : false,
        join : false,
        end : true,
        pointer : true,
        endOpt : true
      }
    // }
    // if (!military.activeFire) {
    //   return {
    //     top : true,
    //     fire : false,
    //     move : false,
    //     supp : false,
    //     pow : false,
    //     ulti : false,
    //     load : false,
    //     deploy : false,
    //     join : false,
    //     end : true,
    //     pointer : true,
    //     endOpt : true
    //   }
    // }
    // else if (!military.active) {
    //   if (!military.activeFire) {
    //     return {
    //       top : true,
    //       fire : false,
    //       move : false,
    //       supp : false,
    //       pow : false,
    //       ulti : false,
    //       load : false,
    //       deploy : false,
    //       join : false,
    //       end : true,
    //       pointer : true,
    //       endOpt : true
    //     }
    //   }
    //   else {
    //     return {
    //       top : true,
    //       fire : true,
    //       move : false,
    //       supp : false,
    //       pow : false,
    //       ulti : false,
    //       load : false,
    //       deploy : false,
    //       join : false,
    //       end : true,
    //       pointer : true,
    //       endOpt : true
    //     }
    //   }
    // }
    // else {
      // return {
      //   top : true,
      //   fire : true,
      //   move : true,
      //   supp : false,
      //   pow : false,
      //   ulti : false,
      //   load : false,
      //   deploy : false,
      //   join : false,
      //   end : true,
      //   pointer : true,
      //   endOpt : true
      // }
    // }
  }

  showMenu(config){
    /**Test Menu**/
    this.listMenu = null;
    console.log(this.listMenu);
    this.listMenu = this.menu.menuSetupMenu({
      x : this.selectArrayX*Advwar.configs.tileSize,
      y : this.selectArrayY*Advwar.configs.tileSize,
      top : config.top,
      fire : config.fire,
      move : config.move,
      supp : config.supp,
      pow : config.pow,
      ulti : config.ulti,
      load : config.load,
      deploy : config.deploy,
      join : config.join,
      end : config.end,
      pointer : config.pointer,
      endOpt : config.endOpt
    });

    Advwar.game.paused = true;
    // Then add the menu
    // Add a input listener that can help us return from being paused

    var keyA = Advwar.game.input.keyboard.addKey(Phaser.Keyboard.A);
    if (!this.aMenuEvent) {
      keyA.onDown.add(menuSelect, this);
      this.aMenuEvent = true;
    }
    // var keyS = Advwar.game.input.keyboard.addKey(Phaser.Keyboard.S);
    // if (!this.sMenuEvent) {
    //   keyS.onDown.add(unpause, this);
    //   this.sMenuEvent = true;
    // }
    var keyDown = Advwar.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    if (!this.dMenuEvent) {
      keyDown.onDown.add(moveDown, this);
      this.dMenuEvent = true;
    }
    var keyUp = Advwar.game.input.keyboard.addKey(Phaser.Keyboard.UP);
    if (!this.uMenuEvent) {
      keyUp.onDown.add(moveUp, this);
      this.uMenuEvent = true;
    }

    //slect in menu-------------------------------------------------------------
    function menuSelect(event){
      var choice = Advwar.pointer.menu.menuSelect();
      if(choice == 'fire'){
        // if (Advwar.militaryControllers[this.x][this.y].teamColour != Advwar.militaryControllers[this.selectArrayX][this.selectArrayY].teamColour && Advwar.militaries[this.x][this.y] != 0) {
        //   if (Math.abs(this.x - this.selectArrayX) <= Advwar.militaryControllers[this.selectArrayX][this.selectArrayY].maxRange && Math.abs(this.y - this.selectArrayY) <= Advwar.militaryControllers[this.selectArrayX][this.selectArrayY].maxRange) {
        //     Advwar.militaryControllers[this.selectArrayX][this.selectArrayY].fire(Advwar.militaryControllers[this.x][this.y], this.x, this.y, true);
        //   }
        // }
        if (Advwar.militaryControllers[this.x][this.y].activeFire == true) {
          this.drawFireAble(this.selectArrayX, this.selectArrayY, Advwar.militaryControllers[this.selectArrayX][this.selectArrayY]);
        }
        Advwar.pointer.menu.ressetMenuChoice();
        Advwar.pointer.menu.setVisible(false);
        Advwar.game.paused = false;
        // keyS.onDown.addOnce(unpause, this);
        Advwar.speaker.loadAndPlay('selectSound.wav');
      }else if (choice == 'move') {
        if (Advwar.militaryControllers[this.x][this.y].active == true) {
          this.drawMoveAble(this.selectArrayX, this.selectArrayY, Advwar.militaryControllers[this.selectArrayX][this.selectArrayY]);
          this.moving = true;
        }
        Advwar.pointer.menu.ressetMenuChoice();
        Advwar.pointer.menu.setVisible(false);
        Advwar.game.paused = false;
        Advwar.speaker.loadAndPlay('selectSound.wav');
      }else if (choice == 'supp') {

      }else if (choice == 'pow') {

      }else if (choice == 'ulti') {

      }else if (choice == 'load') {

      }else if (choice == 'load') {

      }else if (choice == 'deploy') {

      }else if (choice == 'join') {

      }else if (choice == 'end') {
        for (var i = 0; i < Advwar.militaryControllers.length; i++) {
          for (var j = 0; j < Advwar.militaryControllers[i].length; j++) {
            if (!Advwar.militaryControllers[i][j].active) {
              Advwar.militaryControllers[i][j].active = true;
            }
            if (!Advwar.militaryControllers[i][j].activeFire) {
              Advwar.militaryControllers[i][j].activeFire = true;
              console.log(Advwar.militaryControllers[i][j].sprite.tint);
              Advwar.militaryControllers[i][j].sprite.tint = 0xffffff;
            }
          }
        }
        if (Advwar.teamPlay == 1) {
          Advwar.teamPlay = 3;
        }
        else {
          Advwar.teamPlay = 1;
        }
        Advwar.pointer.menu.ressetMenuChoice();
        Advwar.pointer.menu.setVisible(false);
        Advwar.game.paused = false;
        Advwar.speaker.loadAndPlay('selectSound.wav');
      }else{

      }


    }
    //--------------------------------------------------------------------------
    // And finally the method that handels the pause menu
    function unpause(event){
      if(Advwar.game.paused){
        Advwar.pointer.menu.setVisible(false);
        Advwar.game.paused = false;
        Advwar.pointer.cancelMoveMilitary();
        // console.log(Advwar.game.paused);
      }
    };
    function moveDown(event){
      if(Advwar.game.paused){
        console.log(this.listMenu);
        console.log(' 12');
        Advwar.pointer.menu.pointerMoveDown(this.listMenu,Advwar.pointer.menu);
        // console.log(Advwar.pointer.menu.pointerMenu.x);
        // console.log(Advwar.pointer.menu.pointerMenu.y);
      }
    };
    function moveUp(event){
      if(Advwar.game.paused){
        Advwar.pointer.menu.pointerMoveUp(this.listMenu,Advwar.pointer.menu);
        // console.log(Advwar.pointer.menu.pointerMenu.x);
        // console.log(Advwar.pointer.menu.pointerMenu.y);
      }
    };
    /**end test**/
  }

  moveLeft(){
    //hien tai dang update toa do cua chinh Pointer
    this.x -= 1; //update toa do pointer
    this.hand.body.position.x -= Advwar.configs.tileSize;
    this.topLeft.body.position.x -= Advwar.configs.tileSize;
    this.topRight.body.position.x -= Advwar.configs.tileSize;
    this.bottomLeft.body.position.x -= Advwar.configs.tileSize;
    Advwar.speaker.loadAndPlay(this.sound);
    Advwar.flagBGChange = true;
    Advwar.flasgMilPop = true;
  }
  moveRight(){
    //hien tai dang update toa do cua chinh Pointer
    this.x += 1; //update toa do pointer
    this.hand.body.position.x += Advwar.configs.tileSize;
    this.topLeft.body.position.x += Advwar.configs.tileSize;
    this.topRight.body.position.x += Advwar.configs.tileSize;
    this.bottomLeft.body.position.x += Advwar.configs.tileSize;
    Advwar.speaker.loadAndPlay(this.sound);
    Advwar.flagBGChange = true;
    Advwar.flasgMilPop = true;
  }
  moveUp(){
    //hien tai dang update toa do cua chinh Pointer
    this.y -= 1; //update toa do pointer
    this.hand.body.position.y -= Advwar.configs.tileSize;
    this.topLeft.body.position.y -= Advwar.configs.tileSize;
    this.topRight.body.position.y -= Advwar.configs.tileSize;
    this.bottomLeft.body.position.y -= Advwar.configs.tileSize;
    Advwar.speaker.loadAndPlay(this.sound);
    Advwar.flagBGChange = true;
  }
  moveDown(){
    //hien tai dang update toa do cua chinh Pointer
    this.y += 1; //update toa do pointer
    this.hand.body.position.y += Advwar.configs.tileSize;
    this.topLeft.body.position.y += Advwar.configs.tileSize;
    this.topRight.body.position.y += Advwar.configs.tileSize;
    this.bottomLeft.body.position.y += Advwar.configs.tileSize;
    Advwar.speaker.loadAndPlay(this.sound);
    Advwar.flagBGChange = true;
  }

  moveMilitary(){
    if (Advwar.militaryControllers[this.selectArrayX][this.selectArrayY].active == true && this.moving == true) {
      /**Chuyen doi giua cac o trong array**/
      Advwar.militaryControllers[this.selectArrayX][this.selectArrayY].sprite.body.position.x = this.x*Advwar.configs.tileSize;
      Advwar.militaryControllers[this.selectArrayX][this.selectArrayY].sprite.body.position.y = this.y*Advwar.configs.tileSize;
      Advwar.militaryControllers[this.x][this.y] = Advwar.militaryControllers[this.selectArrayX][this.selectArrayY];
      Advwar.militaryControllers[this.selectArrayX][this.selectArrayY] = new Temp(this.selectArrayX, this.selectArrayY, {});
      this.tmp = Advwar.militaries[this.x][this.y];
      Advwar.militaries[this.x][this.y] = Advwar.militaries[this.selectArrayX][this.selectArrayY];
      Advwar.militaries[this.selectArrayX][this.selectArrayY] = this.tmp;
      this.selectArrayX = this.x;
      this.selectArrayY = this.y;
      this.hiddenMoveAble();
      this.moving = false;
      //**Ngung di chuyen**//
      Advwar.militaryControllers[this.selectArrayX][this.selectArrayY].active = false;
    }
  }

  cancelMoveMilitary(){
    if(Advwar.keyboard.isDown(Phaser.Keyboard.S)){
      if (!Advwar.flipFlopS) {
        this.moving = false;
        this.hiddenMoveAble();
        Advwar.flipFlopS = true;
      }
    }
    else {
      Advwar.flipFlopS = false;
    }
  }

  //Hien luoi ban dich
  drawFireAble(x, y, military){
    var drawFireAble = [];

    for (var i = x - military.maxRngAtk; i <= x + military.maxRngAtk; i++) {
      for (var j = y - military.maxRngAtk; j <= y + military.maxRngAtk; j++) {
        if (i < Advwar.mapPlay.col && i >= 0 && j >= 0 && j < Advwar.mapPlay.row) {
          if (Math.abs(x - i) + Math.abs(y - j) <= military.maxRngAtk && Math.abs(x - i) + Math.abs(y - j) >= military.minRngAtk) {
            drawFireAble.push(new Phaser.Point(i, j));

          }
          else {

          }
        }
      }
    }

    for (var i = 0; i < drawFireAble.length; i++) {
      if (Advwar.militaryControllers[drawFireAble[i].x][drawFireAble[i].y].teamColour != military.teamColour && Advwar.militaries[drawFireAble[i].x][drawFireAble[i].y] != 0) {
        Advwar.fireAbleControllers[drawFireAble[i].x][drawFireAble[i].y].sprite.visible = true;
      }
      else {

      }
    }

    return drawFireAble;
  }

  //Hien luoi di chuyen
  drawMoveAble(x, y, military){
    var drawMoveAble = [];

    for (var i = x - military.movementSpeed; i <= x + military.movementSpeed; i++) {
      for (var j = y - military.movementSpeed; j <= y + military.movementSpeed; j++) {
        if (i < Advwar.mapPlay.col && i >= 0 && j >= 0 && j < Advwar.mapPlay.row) {
          if (Math.abs(x - i) + Math.abs(y - j) <= military.movementSpeed) {
            this.checkMoveAble(x, y, military.militaryID, military.movementSpeed, drawMoveAble);
            military.activeFire = true;
          }
          else {

          }
        }
      }
    }
    for (var i = 0; i < drawMoveAble.length; i++) {
      Advwar.moveAbleControllers[drawMoveAble[i].x][drawMoveAble[i].y].sprite.visible = true;
    }
  }

  checkMoveAble(x, y, id, moveRange, drawMoveAble){
    var moveRangeU = moveRange;
    var moveRangeD = moveRange;
    var moveRangeL = moveRange;
    var moveRangeR = moveRange;

    if (x - 1 >= 0 && moveRangeL - 1 + Advwar.terrainControllers[x - 1][y].moveAbleEffect[id - 1] >= 0) {
      moveRangeL += Advwar.terrainControllers[x - 1][y].moveAbleEffect[id - 1] - 1;
      drawMoveAble.push(new Phaser.Point(x - 1, y));
      this.checkMoveAble(x - 1, y, id, moveRangeL, drawMoveAble);
    }
    if (y - 1 >= 0 && moveRangeU - 1 + Advwar.terrainControllers[x][y - 1].moveAbleEffect[id - 1] >= 0) {
      moveRangeU += Advwar.terrainControllers[x][y - 1].moveAbleEffect[id - 1] - 1;
      drawMoveAble.push(new Phaser.Point(x, y - 1));
      this.checkMoveAble(x, y - 1, id, moveRangeU, drawMoveAble);
    }
    if (y + 1 < Advwar.mapPlay.row && moveRangeD - 1 + Advwar.terrainControllers[x][y + 1].moveAbleEffect[id - 1] >= 0) {
      moveRangeD += Advwar.terrainControllers[x][y + 1].moveAbleEffect[id - 1] - 1;
      drawMoveAble.push(new Phaser.Point(x, y + 1));
      this.checkMoveAble(x, y + 1, id, moveRangeD, drawMoveAble);
    }
    if (x + 1 < Advwar.mapPlay.col && moveRangeR - 1 + Advwar.terrainControllers[x + 1][y].moveAbleEffect[id - 1] >= 0) {
      moveRangeR += Advwar.terrainControllers[x + 1][y].moveAbleEffect[id - 1] - 1;
      drawMoveAble.push(new Phaser.Point(x + 1, y));
      this.checkMoveAble(x + 1, y, id, moveRangeR, drawMoveAble);
    }
  }

  hiddenMoveAble(){
    for (var i = 0; i < Advwar.mapPlay.col; i++) {
      for (var j = 0; j < Advwar.mapPlay.row; j++) {
        Advwar.moveAbleControllers[i][j].sprite.visible = false;
      }
    }

    for (var i = 0; i < Advwar.mapPlay.col; i++) {
      for (var j = 0; j < Advwar.mapPlay.row; j++) {
        Advwar.fireAbleControllers[i][j].sprite.visible = false;
      }
    }
  }
}
