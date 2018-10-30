import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'signin.html'
})
export class SignInPage {

/*
  constructor(public navCtrl: NavController) {

  }
 */

constructor(public alertCtrl: AlertController) { }

doSignInAlert() {
    let alert = this.alertCtrl.create({
      title: 'Coming Soon!',
      message: 'This button will open a popup which allows users to sign in',
      buttons: ['Ok']
    });
    alert.present()
  }

doRegisterAlert() {
    let alert = this.alertCtrl.create({
      title: 'Coming Soon!',
      message: 'This button will open a website (RebelRewards) allowing users to create an account for the app',
      buttons: ['Ok']
    });
    alert.present()
  }

}
