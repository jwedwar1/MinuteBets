import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { InGamePage } from './../ingame/ingame';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

/*
  constructor(public navCtrl: NavController) {

  }
*/

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) { }

   doStoreAlert() {
    let alert = this.alertCtrl.create({
      title: 'Coming Soon!',
      message: 'This button will link to a webpage, such as RebelRewards, where students can redeem their tokens for prizes',
      buttons: ['Ok']
    });
    alert.present()
  }

  doAccountAlert() {
    let alert = this.alertCtrl.create({
      title: 'Coming Soon!',
      message: 'This button will link to a webpage, such as RebelRewards, where students can redeem their tokens for prizes',
      buttons: ['Ok']
    });
    alert.present()
  }

  doRoomAlert() {
    let alert = this.alertCtrl.create({
      title: 'Coming Soon!',
      message: 'This button will open a popup with options for users to create a private room',
      buttons: ['Ok']
    });
    alert.present()
  }

  goToGamePage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.setRoot(InGamePage);
  }

}
