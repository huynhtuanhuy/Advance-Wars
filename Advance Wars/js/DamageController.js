class DamageController {
  constructor(){

  }

  calculateDamage(shooter,enemy){
    if(shooter.militaryID == 1){
      if(enemy.militaryID == 1){
        return (shooter.health*0.4);
      }else if (enemy.militaryID == 2) {
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 3) {
        return (shooter.health*0.3);
      }else if (enemy.militaryID == 4) {
        return (shooter.health*0.3);
      }else if (enemy.militaryID == 5) {
        return (shooter.health*0.2);
      }else if (enemy.militaryID == 6) {
        return (shooter.health*0.1);
      }else if (enemy.militaryID == 7) {
        return (shooter.health*0.3);
      }else if (enemy.militaryID == 8) {
        return (shooter.health*0.05);
      }else if (enemy.militaryID == 9) {
        return (shooter.health*0.3);
      }else if (enemy.militaryID == 10) {
        return (shooter.health*0.3);
      }else if (enemy.militaryID == 11) {
        return (shooter.health*0.3);
      }else {
        return 0;
      }
    }else if (shooter.militaryID == 2) {
      if(enemy.militaryID == 1){
        return (shooter.health*0.3);
      }else if (enemy.militaryID == 2) {
        return (shooter.health*0.3);
      }else if (enemy.militaryID == 3) {
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 4) {
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 5) {
        return (shooter.health*0.4);
      }else if (enemy.militaryID == 6) {
        return (shooter.health*0.3);
      }else if (enemy.militaryID == 7) {
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 8) {
        return (shooter.health*0.2);
      }else if (enemy.militaryID == 9) {
        return (shooter.health*0.45);
      }else if (enemy.militaryID == 10) {
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 11) {
        return (shooter.health*0.6);
      }else {
        return 0;
      }
    }else if (shooter.militaryID == 3) {
      if(enemy.militaryID == 1){
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 2) {
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 3) {
        return (shooter.health*0.4);
      }else if (enemy.militaryID == 4) {
        return (shooter.health*0.3);
      }else if (enemy.militaryID == 5) {
        return (shooter.health*0.3);
      }else if (enemy.militaryID == 6) {
        return (shooter.health*0.2);
      }else if (enemy.militaryID == 7) {
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 8) {
        return (shooter.health*0.1);
      }else if (enemy.militaryID == 9) {
        return (shooter.health*0.3);
      }else if (enemy.militaryID == 10) {
        return (shooter.health*0.3);
      }else if (enemy.militaryID == 11) {
        return (shooter.health*0.3);
      }else if (enemy.militaryID == 14) {
        return (shooter.health*0.2);
      }else {
        return 0;
      }
    }else if (shooter.militaryID == 5) {
      if(enemy.militaryID == 1){
        return (shooter.health*0.4);
      }else if (enemy.militaryID == 2) {
        return (shooter.health*0.4);
      }else if (enemy.militaryID == 3) {
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 4) {
        return (shooter.health*0.5);
      }else if (enemy.militaryID == 5) {
        return (shooter.health*0.5);
      }else if (enemy.militaryID == 6) {
        return (shooter.health*0.3);
      }else if (enemy.militaryID == 7) {
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 8) {
        return (shooter.health*0.15);
      }else if (enemy.militaryID == 9) {
        return (shooter.health*0.5);
      }else if (enemy.militaryID == 10) {
        return (shooter.health*0.5);
      }else if (enemy.militaryID == 11) {
        return (shooter.health*0.5);
      }else if (enemy.militaryID == 14) {
        return (shooter.health*0.1);
      }else {
        return 0;
      }
    }else if (shooter.militaryID == 6) {
      if(enemy.militaryID == 1){
        return (shooter.health*0.4);
      }else if (enemy.militaryID == 2) {
        return (shooter.health*0.4);
      }else if (enemy.militaryID == 3) {
        return (shooter.health*0.81);
      }else if (enemy.militaryID == 4) {
        return (shooter.health*0.7);
      }else if (enemy.militaryID == 5) {
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 6) {
        return (shooter.health*0.7);
      }else if (enemy.militaryID == 7) {
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 8) {
        return (shooter.health*0.3);
      }else if (enemy.militaryID == 9) {
        return (shooter.health*0.7);
      }else if (enemy.militaryID == 10) {
        return (shooter.health*0.7);
      }else if (enemy.militaryID == 11) {
        return (shooter.health*0.7);
      }else if (enemy.militaryID == 14) {
        return (shooter.health*0.1);
      }else {
        return 0;
      }
    }else if (shooter.militaryID == 7) {
      if(enemy.militaryID == 1){
        return (shooter.health*0.8);
      }else if (enemy.militaryID == 2) {
        return (shooter.health*0.8);
      }else if (enemy.militaryID == 3) {
        return (shooter.health*0.5);
      }else if (enemy.militaryID == 4) {
        return (shooter.health*0.4);
      }else if (enemy.militaryID == 5) {
        return (shooter.health*0.3);
      }else if (enemy.militaryID == 6) {
        return (shooter.health*0.4);
      }else if (enemy.militaryID == 7) {
        return (shooter.health*0.3);
      }else if (enemy.militaryID == 8) {
        return (shooter.health*0.1);
      }else if (enemy.militaryID == 9) {
        return (shooter.health*0.4);
      }else if (enemy.militaryID == 10) {
        return (shooter.health*0.4);
      }else if (enemy.militaryID == 11) {
        return (shooter.health*0.4);
      }else if (enemy.militaryID == 12) {
        return (shooter.health*0.3);
      }else if (enemy.militaryID == 13) {
        return (shooter.health*0.1);
      }else if (enemy.militaryID == 14) {
        return (shooter.health*0.8);
      }else {
        return 0;
      }
    }else if (shooter.militaryID == 8) {
      if(enemy.militaryID == 1){
        return (shooter.health*0.8);
      }else if (enemy.militaryID == 2) {
        return (shooter.health*0.8);
      }else if (enemy.militaryID == 3) {
        return (shooter.health*0.7);
      }else if (enemy.militaryID == 4) {
        return (shooter.health*0.8);
      }else if (enemy.militaryID == 5) {
        return (shooter.health*0.7);
      }else if (enemy.militaryID == 6) {
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 7) {
        return (shooter.health*0.8);
      }else if (enemy.militaryID == 8) {
        return (shooter.health*0.4);
      }else if (enemy.militaryID == 9) {
        return (shooter.health*0.4);
      }else if (enemy.militaryID == 10) {
        return (shooter.health*0.7);
      }else if (enemy.militaryID == 11) {
        return (shooter.health*0.7);
      }else {
        return 0;
      }
    }else if (shooter.militaryID == 9) {
      if(enemy.militaryID == 1){
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 2) {
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 3) {
        return (shooter.health*0.5);
      }else if (enemy.militaryID == 4) {
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 5) {
        return (shooter.health*0.4);
      }else if (enemy.militaryID == 6) {
        return (shooter.health*0.3);
      }else if (enemy.militaryID == 7) {
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 8) {
        return (shooter.health*0.5);
      }else if (enemy.militaryID == 9) {
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 10) {
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 11) {
        return (shooter.health*0.6);
      }else {
        return 0;
      }
    }else if (shooter.militaryID == 10) {
      if(enemy.militaryID == 1){
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 2) {
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 3) {
        return (shooter.health*0.9);
      }else if (enemy.militaryID == 4) {
        return (shooter.health*0.8);
      }else if (enemy.militaryID == 5) {
        return (shooter.health*0.7);
      }else if (enemy.militaryID == 6) {
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 7) {
        return (shooter.health*0.8);
      }else if (enemy.militaryID == 8) {
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 9) {
        return (shooter.health*0.8);
      }else if (enemy.militaryID == 10) {
        return (shooter.health*0.8);
      }else if (enemy.militaryID == 11) {
        return (shooter.health*0.7);
      }else {
        return 0;
      }
    }else if (shooter.militaryID == 11) {
      if(enemy.militaryID == 12){
        return (shooter.health*1.8);
      }else if (enemy.militaryID == 13) {
        return (shooter.health*1.5);
      }else if (enemy.militaryID == 14) {
        return (shooter.health*3);
      }else if (enemy.militaryID == 15) {
        return (shooter.health*3);
      }else {
        return 0;
      }
    }else if (shooter.militaryID == 12) {
      if(enemy.militaryID == 12){
        return (shooter.health*0.8);
      }else if (enemy.militaryID == 13) {
        return (shooter.health*1.5);
      }else if (enemy.militaryID == 14) {
        return (shooter.health*2);
      }else if (enemy.militaryID == 15) {
        return (shooter.health*2);
      }else {
        return 0;
      }
    }else if (shooter.militaryID == 13) {
      if(enemy.militaryID == 1){
        return (shooter.health*1.3);
      }else if (enemy.militaryID == 2) {
        return (shooter.health*1.3);
      }else if (enemy.militaryID == 3) {
        return (shooter.health*0.9);
      }else if (enemy.militaryID == 4) {
        return (shooter.health*0.9);
      }else if (enemy.militaryID == 5) {
        return (shooter.health*0.7);
      }else if (enemy.militaryID == 6) {
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 7) {
        return (shooter.health*0.8);
      }else if (enemy.militaryID == 8) {
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 9) {
        return (shooter.health*0.9);
      }else if (enemy.militaryID == 10) {
        return (shooter.health*0.9);
      }else if (enemy.militaryID == 11) {
        return (shooter.health*0.9);
      }else if (enemy.militaryID == 16) {
        return (shooter.health*1.5);
      }else if (enemy.militaryID == 17) {
        return (shooter.health*0.8);
      }else {
        return 0;
      }
    }else if (shooter.militaryID == 14) {
      if(enemy.militaryID == 1){
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 2) {
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 3) {
        return (shooter.health*0.4);
      }else if (enemy.militaryID == 4) {
        return (shooter.health*0.4);
      }else if (enemy.militaryID == 5) {
        return (shooter.health*0.3);
      }else if (enemy.militaryID == 6) {
        return (shooter.health*0.3);
      }else if (enemy.militaryID == 7) {
        return (shooter.health*0.2);
      }else if (enemy.militaryID == 8) {
        return (shooter.health*0.1);
      }else if (enemy.militaryID == 9) {
        return (shooter.health*0.4);
      }else if (enemy.militaryID == 10) {
        return (shooter.health*0.4);
      }else if (enemy.militaryID == 11) {
        return (shooter.health*0.4);
      }else {
        return 0;
      }
    }else if (shooter.militaryID == 16) {
      if(enemy.militaryID == 1){
        return (shooter.health*0.5);
      }else if (enemy.militaryID == 2) {
        return (shooter.health*0.5);
      }else if (enemy.militaryID == 3) {
        return (shooter.health*0.8);
      }else if (enemy.militaryID == 4) {
        return (shooter.health*0.8);
      }else if (enemy.militaryID == 5) {
        return (shooter.health*0.6);
      }else if (enemy.militaryID == 6) {
        return (shooter.health*0.5);
      }else if (enemy.militaryID == 7) {
        return (shooter.health*0.8);
      }else if (enemy.militaryID == 8) {
        return (shooter.health*0.4);
      }else if (enemy.militaryID == 9) {
        return (shooter.health*0.8);
      }else if (enemy.militaryID == 10) {
        return (shooter.health*0.8);
      }else if (enemy.militaryID == 11) {
        return (shooter.health*0.8);
      }else {
        return 0;
      }
    }else if (shooter.militaryID == 17) {
      if(enemy.militaryID == 12){
        return (shooter.health*0.8);
      }else if (enemy.militaryID == 13) {
        return (shooter.health*0.9);
      }else if (enemy.militaryID == 14) {
        return (shooter.health*1.5);
      }else if (enemy.militaryID == 15) {
        return (shooter.health*2);
      }else if (enemy.militaryID == 16) {
        return (shooter.health*0.4);
      }else if (enemy.militaryID == 17) {
        return (shooter.health*0.4);
      }else if (enemy.militaryID == 18) {
        return (shooter.health*0.3);
      }else {
        return 0;
      }
    }else if (shooter.militaryID == 18) {
      if(enemy.militaryID == 16){
        return (shooter.health*1.5);
      }else if (enemy.militaryID == 17) {
        return (shooter.health*0.8);
      }else if (enemy.militaryID == 18) {
        return (shooter.health*0.6);
      }else {
        return 0;
      }
    }else{
      return 0;
    }
  }
}
