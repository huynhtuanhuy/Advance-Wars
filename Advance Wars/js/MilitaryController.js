class MilitaryController {
  constructor(x, y, configs){
    this.configs = configs;

    this.idMilitary = configs.id;


    if ((this.idMilitary == 1)&&(this.configs.Snow == false)) {
      Advwar.militaryControllers[x].push(new MilitaryInfantry(x, y, {
        teamColour : 1,
        Snow : this.configs.Snow,
        img : 'infantry.png'
      }));
    }else if((this.idMilitary == 2)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryBazoka(x, y, {
        teamColour : 1,
        Snow : this.configs.Snow,
        img : 'bazoka.png'
      }));
    }else if((this.idMilitary == 3)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryJeep(x, y, {
        teamColour : 1,
        Snow : this.configs.Snow,
        img : 'jeep.png'
      }));
    }else if((this.idMilitary == 4)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryTruck(x, y, {
        teamColour : 1,
        Snow : this.configs.Snow,
        img : 'truck.png'
      }));
    }else if((this.idMilitary == 5)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryLightTank(x, y, {
        teamColour : 1,
        Snow : this.configs.Snow,
        img : 'lightTank.png'
      }));
    }else if((this.idMilitary == 6)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryHeavyTank(x, y, {
        teamColour : 1,
        Snow : this.configs.Snow,
        img : 'heavyTank.png'
      }));
    }else if((this.idMilitary == 7)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryAntiAir(x, y, {
        teamColour : 1,
        Snow : this.configs.Snow,
        img : 'antiAir.png'
      }));
    }else if((this.idMilitary == 8)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryNeoTank(x, y, {
        teamColour : 1,
        Snow : this.configs.Snow,
        img : 'neo.png'
      }));
    }else if((this.idMilitary == 9)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryPhao(x, y, {
        teamColour : 1,
        Snow : this.configs.Snow,
        img : 'phao.png'
      }));
    }else if((this.idMilitary == 10)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryLandMisslle(x, y, {
        teamColour : 1,
        Snow : this.configs.Snow,
        img : 'landMisslle.png'
      }));
    }else if((this.idMilitary == 11)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryAirMisslle(x, y, {
        teamColour : 1,
        Snow : this.configs.Snow,
        img : 'airMisslle.png'
      }));
    }else if((this.idMilitary == 12)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryJet(x, y, {
        teamColour : 1,
        Snow : this.configs.Snow,
        img : 'jet.png'
      }));
    }else if((this.idMilitary == 13)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryBomber(x, y, {
        teamColour : 1,
        Snow : this.configs.Snow,
        img : 'bomber.png'
      }));
    }else if((this.idMilitary == 14)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryHellicopter(x, y, {
        teamColour : 1,
        Snow : this.configs.Snow,
        img : 'hellicopter.png'
      }));
    }else if((this.idMilitary == 15)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryHelliTrans(x, y, {
        teamColour : 1,
        Snow : this.configs.Snow,
        img : 'helliTrans.png'
      }));
    }else if((this.idMilitary == 16)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryWarShip(x, y, {
        teamColour : 1,
        Snow : this.configs.Snow,
        img : 'warShip.png'
      }));
    }else if((this.idMilitary == 17)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryGuardShip(x, y, {
        teamColour : 1,
        Snow : this.configs.Snow,
        img : 'guardShip.png'
      }));
    }else if((this.idMilitary == 18)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitarySub(x, y, {
        teamColour : 1,
        Snow : this.configs.Snow,
        img : 'sub.png'
      }));
    }else if((this.idMilitary == 19)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryBoat(x, y, {
        teamColour : 1,
        Snow : this.configs.Snow,
        img : 'boat.png'
      }));
    }else if ((this.idMilitary == 21)&&(this.configs.Snow == false)) {
      Advwar.militaryControllers[x].push(new MilitaryInfantry(x, y, {
        teamColour : 2,
        Snow : this.configs.Snow,
        img : 'infantry.png'
      }));
    }else if((this.idMilitary == 22)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryBazoka(x, y, {
        teamColour : 2,
        Snow : this.configs.Snow,
        img : 'bazoka.png'
      }));
    }else if((this.idMilitary == 23)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryJeep(x, y, {
        teamColour : 2,
        Snow : this.configs.Snow,
        img : 'jeep.png'
      }));
    }else if((this.idMilitary == 24)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryTruck(x, y, {
        teamColour : 2,
        Snow : this.configs.Snow,
        img : 'truck.png'
      }));
    }else if((this.idMilitary == 25)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryLightTank(x, y, {
        teamColour : 2,
        Snow : this.configs.Snow,
        img : 'lightTank.png'
      }));
    }else if((this.idMilitary == 26)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryHeavyTank(x, y, {
        teamColour : 2,
        Snow : this.configs.Snow,
        img : 'heavyTank.png'
      }));
    }else if((this.idMilitary == 27)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryAntiAir(x, y, {
        teamColour : 2,
        Snow : this.configs.Snow,
        img : 'antiAir.png'
      }));
    }else if((this.idMilitary == 28)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryNeoTank(x, y, {
        teamColour : 2,
        Snow : this.configs.Snow,
        img : 'neo.png'
      }));
    }else if((this.idMilitary == 29)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryPhao(x, y, {
        teamColour : 2,
        Snow : this.configs.Snow,
        img : 'phao.png'
      }));
    }else if((this.idMilitary == 30)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryLandMisslle(x, y, {
        teamColour : 2,
        Snow : this.configs.Snow,
        img : 'landMisslle.png'
      }));
    }else if((this.idMilitary == 31)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryAirMisslle(x, y, {
        teamColour : 2,
        Snow : this.configs.Snow,
        img : 'airMisslle.png'
      }));
    }else if((this.idMilitary == 32)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryJet(x, y, {
        teamColour : 2,
        Snow : this.configs.Snow,
        img : 'jet.png'
      }));
    }else if((this.idMilitary == 33)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryBomber(x, y, {
        teamColour : 2,
        Snow : this.configs.Snow,
        img : 'bomber.png'
      }));
    }else if((this.idMilitary == 34)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryHellicopter(x, y, {
        teamColour : 2,
        Snow : this.configs.Snow,
        img : 'hellicopter.png'
      }));
    }else if((this.idMilitary == 35)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryHelliTrans(x, y, {
        teamColour : 2,
        Snow : this.configs.Snow,
        img : 'helliTrans.png'
      }));
    }else if((this.idMilitary == 36)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryWarShip(x, y, {
        teamColour : 2,
        Snow : this.configs.Snow,
        img : 'warship.png'
      }));
    }else if((this.idMilitary == 37)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryGuardShip(x, y, {
        teamColour : 2,
        Snow : this.configs.Snow,
        img : 'guardShip.png'
      }));
    }else if((this.idMilitary == 38)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitarySub(x, y, {
        teamColour : 2,
        Snow : this.configs.Snow,
        img : 'sub.png'
      }));
    }else if((this.idMilitary == 39)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryBoat(x, y, {
        teamColour : 2,
        Snow : this.configs.Snow,
        img : 'boat.png'
      }));
    }else if ((this.idMilitary == 41)&&(this.configs.Snow == false)) {
      Advwar.militaryControllers[x].push(new MilitaryInfantry(x, y, {
        teamColour : 3,
        Snow : this.configs.Snow,
        img : 'infantry.png'
      }));
    }else if((this.idMilitary == 42)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryBazoka(x, y, {
        teamColour : 3,
        Snow : this.configs.Snow,
        img : 'bazoka.png'
      }));
    }else if((this.idMilitary == 43)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryJeep(x, y, {
        teamColour : 3,
        Snow : this.configs.Snow,
        img : 'jeep.png'
      }));
    }else if((this.idMilitary == 44)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryTruck(x, y, {
        teamColour : 3,
        Snow : this.configs.Snow,
        img : 'truck.png'
      }));
    }else if((this.idMilitary == 45)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryLightTank(x, y, {
        teamColour : 3,
        Snow : this.configs.Snow,
        img : 'lightTank.png'
      }));
    }else if((this.idMilitary == 46)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryHeavyTank(x, y, {
        teamColour : 3,
        Snow : this.configs.Snow,
        img : 'heavyTank.png'
      }));
    }else if((this.idMilitary == 47)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryAntiAir(x, y, {
        teamColour : 3,
        Snow : this.configs.Snow,
        img : 'antiAir.png'
      }));
    }else if((this.idMilitary == 48)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryNeoTank(x, y, {
        teamColour : 3,
        Snow : this.configs.Snow,
        img : 'neo.png'
      }));
    }else if((this.idMilitary == 49)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryPhao(x, y, {
        teamColour : 3,
        Snow : this.configs.Snow,
        img : 'phao.png'
      }));
    }else if((this.idMilitary == 50)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryLandMisslle(x, y, {
        teamColour : 3,
        Snow : this.configs.Snow,
        img : 'landMisslle.png'
      }));
    }else if((this.idMilitary == 51)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryAirMisslle(x, y, {
        teamColour : 3,
        Snow : this.configs.Snow,
        img : 'airMisslle.png'
      }));
    }else if((this.idMilitary == 52)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryJet(x, y, {
        teamColour : 3,
        Snow : this.configs.Snow,
        img : 'jet.png'
      }));
    }else if((this.idMilitary == 53)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryBomber(x, y, {
        teamColour : 3,
        Snow : this.configs.Snow,
        img : 'bomber.png'
      }));
    }else if((this.idMilitary == 54)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryHellicopter(x, y, {
        teamColour : 3,
        Snow : this.configs.Snow,
        img : 'hellicopter.png'
      }));
    }else if((this.idMilitary == 55)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryHelliTrans(x, y, {
        teamColour : 3,
        Snow : this.configs.Snow,
        img : 'helliTrans.png'
      }));
    }else if((this.idMilitary == 56)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryWarShip(x, y, {
        teamColour : 3,
        Snow : this.configs.Snow,
        img : 'warShip.png'
      }));
    }else if((this.idMilitary == 57)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryGuardShip(x, y, {
        teamColour : 3,
        Snow : this.configs.Snow,
        img : 'guardShip.png'
      }));
    }else if((this.idMilitary == 58)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitarySub(x, y, {
        teamColour : 3,
        Snow : this.configs.Snow,
        img : 'sub.png'
      }));
    }else if((this.idMilitary == 59)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryBoat(x, y, {
        teamColour : 3,
        Snow : this.configs.Snow,
        img : 'boat.png'
      }));
    }else if ((this.idMilitary == 61)&&(this.configs.Snow == false)) {
      Advwar.militaryControllers[x].push(new MilitaryInfantry(x, y, {
        teamColour : 4,
        Snow : this.configs.Snow,
        img : 'infantry.png'
      }));
    }else if((this.idMilitary == 62)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryBazoka(x, y, {
        teamColour : 4,
        Snow : this.configs.Snow,
        img : 'bazoka.png'
      }));
    }else if((this.idMilitary == 63)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryJeep(x, y, {
        teamColour : 4,
        Snow : this.configs.Snow,
        img : 'jeep.png'
      }));
    }else if((this.idMilitary == 64)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryTruck(x, y, {
        teamColour : 4,
        Snow : this.configs.Snow,
        img : 'truck.png'
      }));
    }else if((this.idMilitary == 65)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryLightTank(x, y, {
        teamColour : 4,
        Snow : this.configs.Snow,
        img : 'lightTank.png'
      }));
    }else if((this.idMilitary == 66)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryHeavyTank(x, y, {
        teamColour : 4,
        Snow : this.configs.Snow,
        img : 'heavyTank.png'
      }));
    }else if((this.idMilitary == 67)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryAntiAir(x, y, {
        teamColour : 4,
        Snow : this.configs.Snow,
        img : 'antiAir.png'
      }));
    }else if((this.idMilitary == 68)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryNeoTank(x, y, {
        teamColour : 4,
        Snow : this.configs.Snow,
        img : 'neo.png'
      }));
    }else if((this.idMilitary == 69)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryPhao(x, y, {
        teamColour : 4,
        Snow : this.configs.Snow,
        img : 'phao.png'
      }));
    }else if((this.idMilitary == 70)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryLandMisslle(x, y, {
        teamColour : 4,
        Snow : this.configs.Snow,
        img : 'landMisslle.png'
      }));
    }else if((this.idMilitary == 71)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryAirMisslle(x, y, {
        teamColour : 4,
        Snow : this.configs.Snow,
        img : 'airMisslle.png'
      }));
    }else if((this.idMilitary == 72)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryJet(x, y, {
        teamColour : 4,
        Snow : this.configs.Snow,
        img : 'jet.png'
      }));
    }else if((this.idMilitary == 73)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryBomber(x, y, {
        teamColour : 4,
        Snow : this.configs.Snow,
        img : 'bomber.png'
      }));
    }else if((this.idMilitary == 74)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryHellicopter(x, y, {
        teamColour : 4,
        Snow : this.configs.Snow,
        img : 'hellicopter.png'
      }));
    }else if((this.idMilitary == 75)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryHelliTrans(x, y, {
        teamColour : 4,
        Snow : this.configs.Snow,
        img : 'helliTrans.png'
      }));
    }else if((this.idMilitary == 76)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryWarShip(x, y, {
        teamColour : 4,
        Snow : this.configs.Snow,
        img : 'warShip.png'
      }));
    }else if((this.idMilitary == 77)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryGuardShip(x, y, {
        teamColour : 4,
        Snow : this.configs.Snow,
        img : 'guardShip.png'
      }));
    }else if((this.idMilitary == 78)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitarySub(x, y, {
        teamColour : 4,
        Snow : this.configs.Snow,
        img : 'sub.png'
      }));
    }else if((this.idMilitary == 79)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryBoat(x, y, {
        teamColour : 4,
        Snow : this.configs.Snow,
        img : 'boat.png'
      }));
    }else if ((this.idMilitary == 81)&&(this.configs.Snow == false)) {
      Advwar.militaryControllers[x].push(new MilitaryInfantry(x, y, {
        teamColour : 5,
        Snow : this.configs.Snow,
        img : 'infantry.png'
      }));
    }else if((this.idMilitary == 82)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryBazoka(x, y, {
        teamColour : 5,
        Snow : this.configs.Snow,
        img : 'bazoka.png'
      }));
    }else if((this.idMilitary == 83)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryJeep(x, y, {
        teamColour : 5,
        Snow : this.configs.Snow,
        img : 'jeep.png'
      }));
    }else if((this.idMilitary == 84)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryTruck(x, y, {
        teamColour : 5,
        Snow : this.configs.Snow,
        img : 'truck.png'
      }));
    }else if((this.idMilitary == 85)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryLightTank(x, y, {
        teamColour : 5,
        Snow : this.configs.Snow,
        img : 'lightTank.png'
      }));
    }else if((this.idMilitary == 86)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryHeavyTank(x, y, {
        teamColour : 5,
        Snow : this.configs.Snow,
        img : 'heavyTank.png'
      }));
    }else if((this.idMilitary == 87)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryAntiAir(x, y, {
        teamColour : 5,
        Snow : this.configs.Snow,
        img : 'antiAir.png'
      }));
    }else if((this.idMilitary == 88)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryNeoTank(x, y, {
        teamColour : 5,
        Snow : this.configs.Snow,
        img : 'neo.png'
      }));
    }else if((this.idMilitary == 89)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryPhao(x, y, {
        teamColour : 5,
        Snow : this.configs.Snow,
        img : 'phao.png'
      }));
    }else if((this.idMilitary == 90)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryLandMisslle(x, y, {
        teamColour : 5,
        Snow : this.configs.Snow,
        img : 'landMisslle.png'
      }));
    }else if((this.idMilitary == 91)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryAirMisslle(x, y, {
        teamColour : 5,
        Snow : this.configs.Snow,
        img : 'airMisslle.png'
      }));
    }else if((this.idMilitary == 92)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryJet(x, y, {
        teamColour : 5,
        Snow : this.configs.Snow,
        img : 'jet.png'
      }));
    }else if((this.idMilitary == 93)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryBomber(x, y, {
        teamColour : 5,
        Snow : this.configs.Snow,
        img : 'bomber.png'
      }));
    }else if((this.idMilitary == 94)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryHellicopter(x, y, {
        teamColour : 5,
        Snow : this.configs.Snow,
        img : 'hellicopter.png'
      }));
    }else if((this.idMilitary == 95)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryHelliTrans(x, y, {
        teamColour : 5,
        Snow : this.configs.Snow,
        img : 'helliTrans.png'
      }));
    }else if((this.idMilitary == 96)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryWarShip(x, y, {
        teamColour : 5,
        Snow : this.configs.Snow,
        img : 'warShip.png'
      }));
    }else if((this.idMilitary == 97)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryGuardShip(x, y, {
        teamColour : 5,
        Snow : this.configs.Snow,
        img : 'guardShip.png'
      }));
    }else if((this.idMilitary == 98)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitarySub(x, y, {
        teamColour : 5,
        Snow : this.configs.Snow,
        img : 'sub.png'
      }));
    }else if((this.idMilitary == 99)&&(this.configs.Snow == false)){
      Advwar.militaryControllers[x].push(new MilitaryBoat(x, y, {
        teamColour : 5,
        Snow : this.configs.Snow,
        img : 'boat.png'
      }));
    }

    else {
      Advwar.militaryControllers[x].push(new Temp(x, y, {}));
    }
  }
  check(){

  }
}
