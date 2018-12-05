import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { InGamePage } from './../ingame/ingame';
import { AccountPage } from './../account/account';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../services/auth.services';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userId: string;
  user: firebase.User;

/*
  constructor(public navCtrl: NavController) {

  }
*/

  constructor(public alertCtrl: AlertController, 
    public navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private auth: AuthService,
    public afDatabase: AngularFireDatabase,
    ) { 
      afAuth.authState.subscribe(user => {
        if (user) this.user = user;
        this.userId = user.uid;
              if (auth.first) {
                var database = firebase.database();
                firebase.database().ref('users/' + this.userId).set({
                  currency: 1000
                })
        //let newUserList = this.afDatabase.list(`/users/${this.userId}/currency/`);
        //newUserList.set(1000);
    
      }
      });
    }

   doStoreAlert() {
    let alert = this.alertCtrl.create({
      title: 'Coming Soon!',
      message: 'This button will link to a webpage, such as RebelRewards, where students can redeem their tokens for prizes',
      buttons: ['Ok']
    });
    alert.present()
  }

  doAccountAlert() {
  /*
    let alert = this.alertCtrl.create({
      title: 'Coming Soon!',
      message: 'This button will link to a webpage, such as RebelRewards, where students can redeem their tokens for prizes',
      buttons: ['Ok']
    });
    alert.present()
    */
    //this.navCtrl.setRoot(AccountPage);
    this.navCtrl.push(AccountPage);
  }

  doRoomAlert() {
    let alert = this.alertCtrl.create({
      title: 'About',
      message: 'James and James: two Ole Miss Computer Science students and football fans',
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
