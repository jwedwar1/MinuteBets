import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from './../home/home';
import { AccountPage } from './../account/account';
import { QuestionPage } from './../question/question';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../services/auth.services';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';


@Component({
  selector: 'page-ingame',
  templateUrl: 'ingame.html'
})
export class InGamePage {

  currency: number;
  userId: string;
  user: firebase.User;


  constructor(public alertCtrl: AlertController,
     public navCtrl: NavController,    
     private afAuth: AngularFireAuth,
     private auth: AuthService,
     public afDatabase: AngularFireDatabase,
 ) {
  //this.afAuth.authState.subscribe(user => {
    //if (user) this.user = user;
    //this.userId = user.uid;
  //});
    //var countRef = firebase.database().ref('users').child(this.userId).child('currency');
    //countRef.on('value', function(snapshot) {
     // if (snapshot){
     //   this.currency = snapshot.val();
   //   }
   // });
   }


  goBack() {
      this.navCtrl.pop();
    }
  
  generateQuestion(){
    this.navCtrl.setRoot(QuestionPage);
  }

  goToHomePage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.setRoot(HomePage);
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

      this.navCtrl.push(AccountPage);
  }


  betSelected() {
    let alert = this.alertCtrl.create({
      title: 'Coming Soon!',
      message: 'This button will display in-depth information about the previous bet. Current info displayed is: Time Since Bet, Amount Won/Lost, Result',
      buttons: ['Ok']
    });
    alert.present()

  }

}