import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from './../login/login';
import { HomePage } from './../home/home';
import { AuthService } from '../../services/auth.services';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  goToLoginPageModule() {
    this.navCtrl.push(LoginPage);
  }

  goToHomePage() {
    this.navCtrl.setRoot(HomePage);
  }

  logout() {
    this.auth.signOut();
  	this.navCtrl.setRoot(LoginPage);
  }

}
