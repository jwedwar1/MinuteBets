import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth.services';
import { HomePage } from './../home/home';
import { LoginPageModule } from './../login/login';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


/**
 * Generated class for the ResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html',
  email:"string",
})


export class ResetPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private auth: AuthService, afDatabase: AngularFireDatabase) {



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPage');
  }

  resetPW() {
		//this.auth.sendPasswordResetEmail(this.email)
		this.navCtrl.setRoot(LoginPageModule);
    }


}
